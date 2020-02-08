import express from 'express';
import jwt from 'jsonwebtoken';
import {sprintf} from 'sprintf-js';
import {dbTblName, session, server} from 'core/config';
import db from 'core/db';
import myCrypto from 'core/myCrypto';
import strings from 'core/strings';
import tracer from "core/tracer";
import {tokenStatus, resetPasswordUri} from "core/consts";
import consts from "core/consts";
import mailer from "core/mailer";

const _validateToken = async (req, res, next) => {
  const language = req.get('language');
  const langs = strings[language];
  const {email, token} = req.body;
  const today = new Date();
  const timestamp = today.getTime();

  try {
    let sql = sprintf("SELECT * FROM `%s` WHERE `email` = ? AND `token` = ?;", dbTblName.resetPasswordTokens);
    let rows = await db.query(sql, [email, token]);
    if (!rows.length) {
      return tokenStatus.NOT_FOUND;
    }

    const row = rows[0];

    if (timestamp >= row.expire) {
      return tokenStatus.EXPIRED;
    }

    const used = myCrypto.hmacHex(`${row.timestamp}${row.token}${row.expire}`);
    if (used !== row.used) {
      return tokenStatus.ALREADY_USED;
    }

    return tokenStatus.VALID;
  } catch (err) {
    throw err;
  }
};

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
  const {email, firstName, lastName, password, company, position, country, city, phone} = params;
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
      [null, email, firstName, lastName, hash, company, position, country, city, phone, 1],
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


const sendForgotPasswordMailProc = async (req, res, next) => {
  const language = req.get('language');
  const langs = strings[language];
  const {email} = req.body;

  let today = new Date();

  const timestamp = today.getTime();
  today = new Date(timestamp + consts.tokenLifetime * 3600 * 1000);
  const expire = today.getTime();
  const token = myCrypto.hmacHex(`${email}${timestamp}`);
  const used = myCrypto.hmacHex(`${timestamp}${token}${expire}`);

  let sql = sprintf("SELECT * FROM `%s` WHERE `email` = ?;", dbTblName.users);

  try {
    let rows = await db.query(sql, [email]);
    if (!rows.length) {
      res.status(200).send({
        result: langs.error,
        message: langs.emailIsNotRegistered,
      });
      return;
    }
    const user = rows[0];
    const name = `${user.firstName} ${user.lastName}`;
    const url = `${server.baseUrl}${resetPasswordUri}/${email}/${token}`;
    await mailer.sendForgotPasswordMail({email, name, url, subject: langs.forgotPassword});

    sql = sprintf("INSERT INTO `%s` VALUES ? ON DUPLICATE KEY UPDATE `timestamp` = VALUES(`timestamp`), `token` = VALUES(`token`), `expire` = VALUES(`expire`), `used` = VALUES(`used`);", dbTblName.resetPasswordTokens);

    const newRows = [
      [email, timestamp, token, expire, used],
    ];

    await db.query(sql, [newRows]);
    res.status(200).send({
      result: langs.success,
      message: langs.resetEmailIsSent,
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

const validateTokenProc = async (req, res, next) => {
  const lang = req.get('language');
  const langs = strings[lang];
  try {
    const result = await _validateToken(req, res, next);
    switch (result) {
      case tokenStatus.VALID:
        res.status(200).send({
          result: langs.success,
          message: langs.tokenIsValid,
        });
        break;
      case tokenStatus.EXPIRED:
        res.status(200).send({
          result: langs.error,
          message: langs.tokenIsExpired,
        });
        break;
      case tokenStatus.NOT_FOUND:
        res.status(200).send({
          result: langs.error,
          message: langs.tokenIsNotFound,
        });
        break;
      case tokenStatus.ALREADY_USED:
        res.status(200).send({
          result: langs.error,
          message: langs.tokenIsAlreadyUsed,
        });
        break;
    }
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

const resetPasswordProc = async (req, res, next) => {
  const lang = req.get('language');
  const langs = strings[lang];
  const {email, password} = req.body;

  try {
    const result = await _validateToken(req, res, next);
    switch (result) {
      case tokenStatus.EXPIRED:
        res.status(200).send({
          result: langs.error,
          message: langs.tokenIsExpired,
        });
        return;
      case tokenStatus.NOT_FOUND:
        res.status(200).send({
          result: langs.error,
          message: langs.tokenIsNotFound,
        });
        return;
      case tokenStatus.ALREADY_USED:
        res.status(200).send({
          result: langs.error,
          message: langs.tokenIsAlreadyUsed,
        });
        return;
    }

    const hash = myCrypto.hmacHex(password);
    tracer.info(password, hash);
    let sql = sprintf("UPDATE `%s` SET `used` = ? WHERE `email` = ?;", dbTblName.resetPasswordTokens);
    await db.query(sql, [1, email]);
    sql = sprintf("UPDATE `%s` SET `hash` = ? WHERE `email` = ?;", dbTblName.users);
    await db.query(sql, [hash, email]);
    res.status(200).send({
      result: langs.success,
      message: langs.successfullyChanged,
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

const router = express.Router();

router.post("/sign-in", signInProc);
router.post("/sign-up", signUpProc);
router.post("/send-forgot-password-mail", sendForgotPasswordMailProc);
router.post("/validate-token", validateTokenProc);
router.post("/reset-password", resetPasswordProc);

export default router;
