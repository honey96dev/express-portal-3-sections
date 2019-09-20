import express from 'express';
import jwt from 'jsonwebtoken';
import {sprintf} from 'sprintf-js';
import {dbTblName, session} from '../../../core/config';
import db from '../../../core/db';
import myCrypto from '../../../core/myCrypto';
import strings from '../../../core/strings';
import tracer from "../../../core/tracer";

const router = express.Router();

const signInProc = async (req, res, next) => {
  const params = req.body;
  const language = req.get('language');
  const langs = strings[language];
  const {username, password} = params;

  let sql = sprintf("SELECT `email` FROM `%s` WHERE BINARY `username` = '%s';", dbTblName.admins, username);
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
  //       message: langs.usernameIsIncorrect,
  //     });
  //     return;
  //   }
  //
  //   const hash = myCrypto.hmacHex(password);
  //   sql = sprintf("SELECT U.* FROM `%s` U WHERE BINARY U.username = '%s' AND BINARY U.hash = '%s';", dbTblName.admins, username, hash);
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
  //     data['token'] = jwt.sign({sub: data['id'],}, session.secretAdmin);
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
        message: langs.usernameIsIncorrect,
      });
      return;
    }

    const hash = myCrypto.hmacHex(password);
    sql = sprintf("SELECT U.* FROM `%s` U WHERE BINARY U.username = '%s' AND BINARY U.hash = '%s';", dbTblName.admins, username, hash);
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
    data['token'] = jwt.sign({sub: data['id'],}, session.secretAdmin);
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

router.post('/sign-in', signInProc);

export default router;
