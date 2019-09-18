import express from 'express';
import jwt from 'jsonwebtoken';
import {sprintf} from 'sprintf-js';
import {dbTblName, session} from '../../../core/config';
import dbConn from '../../../core/dbConn';
import myCrypto from '../../../core/myCrypto';
import strings from '../../../core/strings';
import tracer from "../../../core/tracer";

const router = express.Router();

const signInProc = (req, res, next) => {
  const params = req.body;
  const language = req.get('language');
  const {username, password} = params;

  let sql = sprintf("SELECT `email` FROM `%s` WHERE BINARY `username` = '%s';", dbTblName.admins, username);
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
        message: strings[language].usernameIsIncorrect,
      });
      return;
    }

    const hash = myCrypto.hmacHex(password);
    sql = sprintf("SELECT U.* FROM `%s` U WHERE BINARY U.username = '%s' AND BINARY U.hash = '%s';", dbTblName.admins, username, hash);
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
      data['token'] = jwt.sign({sub: data['id'],}, session.secretAdmin);
      res.status(200).send({
        result: strings[language].success,
        message: strings[language].successfullySignedIn,
        data,
      });
    });
  });
};

router.post('/sign-in', signInProc);

export default router;
