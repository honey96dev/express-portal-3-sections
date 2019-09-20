import express from 'express';
import jwt from 'jsonwebtoken';
import {sprintf} from 'sprintf-js';
import {dbTblName, session} from '../../core/config';
import dbConn from '../../core/dbConn';
import myCrypto from '../../core/myCrypto';
import strings from '../../core/strings';
import tracer from "../../core/tracer";

const router = express.Router();

const signInProc = (req, res, next) => {
  const params = req.body;
  const language = req.get('language');
  const {email, password} = params;

  let sql = sprintf("SELECT `email` FROM `%s` WHERE BINARY `email` = '%s';", dbTblName.users, email);
  dbConn.query(sql, null, (error, rows, fields) => {
    if (error) {
      tracer.error(JSON.stringify(error));
      tracer.error(__filename);
      res.status(200).send({
        result: strings[language].error,
        message: strings[language].unknownServerError,
      });
      return;
    }
    if (rows.length === 0) {
      res.status(200).send({
        result: strings[language].error,
        message: strings[language].emailIsIncorrect,
      });
      return;
    }

    const hash = myCrypto.hmacHex(password);
    sql = sprintf("SELECT U.* FROM `%s` U WHERE BINARY U.email = '%s' AND BINARY U.hash = '%s';", dbTblName.users, email, hash);
    // console.log(sql, hash);
    dbConn.query(sql, null, (error, rows, fields) => {
      if (error) {
        tracer.error(JSON.stringify(error));
        tracer.error(__filename);
        res.status(200).send({
          result: strings[language].error,
          message: strings[language].unknownServerError,
        });
        return;
      }

      if (rows.length === 0) {
        res.status(200).send({
          result: strings[language].error,
          message: strings[language].passwordIsIncorrect,
        });
        return;
      }

      let data = rows[0];
      if (data['allow'] === 0) {
        res.status(200).send({
          result: strings[language].error,
          message: strings[language].yourAccountIsNotAllowed,
        });
        return;
      }
      data['token'] = jwt.sign(
        {
          id: data['id'],
          email: data['email'],
          firstName: data['firstName'],
          lastName: data['lastName'],
        },
        session.secret
      );
      res.status(200).send({
        result: strings[language].success,
        message: strings[language].successfullySignedIn,
        data,
      });
    });
  });
};

const signUpProc = (req, res, next) => {
  const params = req.body;
  const language = req.get('language');
  const {email, firstName, lastName, password, position, country, city, phone} = params;
  const hash = myCrypto.hmacHex(password);

  let sql = sprintf("SELECT `email` FROM `%s` WHERE BINARY `email` = '%s';", dbTblName.users, email);
  dbConn.query(sql, null, (error, rows, fields) => {
    if (error) {
      tracer.error('auth/sign-in', JSON.stringify(error));
      res.status(200).send({
        result: strings[language].error,
        message: strings[language].unknownServerError,
      });
      return;
    }
    if (rows.length > 0) {
      res.status(200).send({
        result: strings[language].error,
        message: strings[language].emailAlreadyRegistered,
      });
      return;
    }

    const hash = myCrypto.hmacHex(password);
    const newRows = [
      [null, email, firstName, lastName, hash, position, JSON.stringify(country), city, phone, 0],
    ];
    sql = sprintf("INSERT INTO `%s` VALUES ?;", dbTblName.users, dbTblName.users);
    dbConn.query(sql, [newRows], (error, rows, fields) => {
      if (error) {
        tracer.error(JSON.stringify(error));
        tracer.error(__filename);
        res.status(200).send({
          result: strings[language].error,
          message: strings[language].unknownServerError,
        });
        return;
      }

      // sendVerificationEmail(email);

      res.status(200).send({
        result: strings[language].success,
        message: strings[language].successfullyRegistered,
      });
    });
  });
};

router.post('/sign-in', signInProc);
router.post('/sign-up', signUpProc);

export default router;
