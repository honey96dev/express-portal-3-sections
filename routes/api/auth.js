import express from 'express';
import jwt from 'jsonwebtoken';
import {sprintf} from 'sprintf-js';
import {dbTblName, session} from '../../core/config';
import db from '../../core/db';
import myCrypto from '../../core/myCrypto';
import strings from '../../core/strings';
import tracer from "../../core/tracer";

const router = express.Router();

const signInProc = async (req, res, next) => {
  const params = req.body;
  const language = req.get('language');
  const langs = strings[language];
  const {email, password} = params;

  let sql = sprintf("SELECT `email` FROM `%s` WHERE BINARY `email` = '%s';", dbTblName.users, email);
  // dbConn.query(sql, null, (error, rows, fields) => {
  //   if (error) {
  //     tracer.error(JSON.stringify(error));
  //     tracer.error(__filename);
  //     res.status(200).send({
  //       result: langs.error,
  //       message: langs.unknownServerError,
  //     });
  //     return;
  //   }
  //   if (rows.length === 0) {
  //     res.status(200).send({
  //       result: langs.error,
  //       message: langs.emailIsIncorrect,
  //     });
  //     return;
  //   }
  //
  //   const hash = myCrypto.hmacHex(password);
  //   sql = sprintf("SELECT U.* FROM `%s` U WHERE BINARY U.email = '%s' AND BINARY U.hash = '%s';", dbTblName.users, email, hash);
  //   // console.log(sql, hash);
  //   dbConn.query(sql, null, (error, rows, fields) => {
  //     if (error) {
  //       tracer.error(JSON.stringify(error));
  //       tracer.error(__filename);
  //       res.status(200).send({
  //         result: langs.error,
  //         message: langs.unknownServerError,
  //       });
  //       return;
  //     }
  //
  //     if (rows.length === 0) {
  //       res.status(200).send({
  //         result: langs.error,
  //         message: langs.passwordIsIncorrect,
  //       });
  //       return;
  //     }
  //
  //     let data = rows[0];
  //     if (data['allow'] === 0) {
  //       res.status(200).send({
  //         result: langs.error,
  //         message: langs.yourAccountIsNotAllowed,
  //       });
  //       return;
  //     }
  //     data['token'] = jwt.sign(
  //       {
  //         id: data['id'],
  //         email: data['email'],
  //         firstName: data['firstName'],
  //         lastName: data['lastName'],
  //       },
  //       session.secret
  //     );
  //     res.status(200).send({
  //       result: langs.success,
  //       message: langs.successfullySignedIn,
  //       data,
  //     });
  //   });
  // });
  try {
    let rows = await db.query(sql, null);
    if (rows.length === 0) {
      res.status(200).send({
        result: langs.error,
        message: langs.emailIsIncorrect,
      });
      return;
    }

    const hash = myCrypto.hmacHex(password);
    sql = sprintf("SELECT U.* FROM `%s` U WHERE BINARY U.email = '%s' AND BINARY U.hash = '%s';", dbTblName.users, email, hash);
    // console.log(sql, hash);
    rows = await db.query(sql, null);

    if (rows.length === 0) {
      res.status(200).send({
        result: langs.error,
        message: langs.passwordIsIncorrect,
      });
      return;
    }

    let data = rows[0];
    if (data['allow'] === 0) {
      res.status(200).send({
        result: langs.error,
        message: langs.yourAccountIsNotAllowed,
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
      result: langs.success,
      message: langs.successfullySignedIn,
      data,
    });
  } catch (err) {
    tracer.error(JSON.stringify(err));
    tracer.error(__filename);
    res.status(200).send({
      result: langs.error,
      message: langs.unknownServerError,
      err,
    });
  }
};

const signUpProc = async (req, res, next) => {
  const params = req.body;
  const language = req.get('language');
  const langs = strings[language];
  const {email, firstName, lastName, password, position, country, city, phone} = params;
  const hash = myCrypto.hmacHex(password);

  let sql = sprintf("SELECT `email` FROM `%s` WHERE BINARY `email` = '%s';", dbTblName.users, email);
  // dbConn.query(sql, null, (error, rows, fields) => {
  //   if (error) {
  //     tracer.error('auth/sign-in', JSON.stringify(error));
  //     res.status(200).send({
  //       result: langs.error,
  //       message: langs.unknownServerError,
  //     });
  //     return;
  //   }
  //   if (rows.length > 0) {
  //     res.status(200).send({
  //       result: langs.error,
  //       message: langs.emailAlreadyRegistered,
  //     });
  //     return;
  //   }
  //
  //   const newRows = [
  //     [null, email, firstName, lastName, hash, position, JSON.stringify(country), city, phone, 0],
  //   ];
  //   sql = sprintf("INSERT INTO `%s` VALUES ?;", dbTblName.users, dbTblName.users);
  //   dbConn.query(sql, [newRows], (error, rows, fields) => {
  //     if (error) {
  //       tracer.error(JSON.stringify(error));
  //       tracer.error(__filename);
  //       res.status(200).send({
  //         result: langs.error,
  //         message: langs.unknownServerError,
  //       });
  //       return;
  //     }
  //
  //     // sendVerificationEmail(email);
  //
  //     res.status(200).send({
  //       result: langs.success,
  //       message: langs.successfullyRegistered,
  //     });
  //   });
  // });
  try {
    let rows = await db.query(sql, null);
    if (rows.length > 0) {
      res.status(200).send({
        result: langs.error,
        message: langs.emailAlreadyRegistered,
      });
      return;
    }
    const newRows = [
      [null, email, firstName, lastName, hash, position, country, city, phone, 0],
      // [null, email, firstName, lastName, hash, position, JSON.stringify(country), city, phone, 0],
    ];
    sql = sprintf("INSERT INTO `%s` VALUES ?;", dbTblName.users, dbTblName.users);
    await db.query(sql, [newRows]);
    // sendVerificationEmail(email);
    res.status(200).send({
      result: langs.success,
      message: langs.successfullyRegistered,
    });
  } catch (err) {
    tracer.error(JSON.stringify(err));
    tracer.error(__filename);
    res.status(200).send({
      result: langs.error,
      message: langs.unknownServerError,
      err,
    });
  }
};

router.post('/sign-in', signInProc);
router.post('/sign-up', signUpProc);

export default router;
