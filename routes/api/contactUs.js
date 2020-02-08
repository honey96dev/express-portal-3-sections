import express from 'express';
import {sprintf} from 'sprintf-js';
import db from 'core/db';
import {dbTblName} from "core/config";
import tracer from "core/tracer";
import strings from "core/strings";
import mailer from "core/mailer";

const router = express.Router();

const postProc = async (req, res, next) => {
  const {category, name, email, subject, message} = req.body;
  const language = req.get('language');
  const langs = strings[language];
  const timestamp = new Date().toISOString();
  const rows = [
    [null, category, timestamp, name, email, subject, message],
  ];
  let sql = sprintf("INSERT INTO `%s` VALUES ? ON DUPLICATE KEY UPDATE `name` = VALUES(`name`), `email` = VALUES(`email`), `subject` = VALUES(`subject`), `message` = VALUES(`message`);", dbTblName.contactUs);
  // dbConn.query(sql, [rows], (error, result, fields) => {
  //   if (error) {
  //     tracer.error(JSON.stringify(error));
  //     tracer.error(__filename);
  //     res.status(200).send({
  //       result: langs.success,
  //       message: langs.unknownServerError,
  //     });
  //     return;
  //   }
  //   res.status(200).send({
  //     result: langs.success,
  //     message: langs.successfullyPosted,
  //   })
  // });
  try {
    await db.query(sql, [rows]);
    await mailer.sendContactUsMail( {name, email, subject, message});
    res.status(200).send({
      result: langs.success,
      message: langs.successfullyPosted,
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

router.post('/post', postProc);

export default router;
