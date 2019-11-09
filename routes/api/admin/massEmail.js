import express from 'express';
import {sprintf} from 'sprintf-js';
import {dbTblName} from '../../../core/config';
import strings from '../../../core/strings';
import tracer from '../../../core/tracer';
import db from "../../../core/db";
import mailer from '../../../core/mailer';

const router = express.Router();

const sendEmailProc = async (req, res, next) => {
  const language = req.get('language');
  const params = req.body;
  const {name, subject, message} = params;
  const langs = strings[language];

  try {
    let sql = sprintf("SELECT * FROM `%s`;", dbTblName.users);
    let rows = await db.query(sql);
    let to = [];
    for (let row of rows) {
      // mailer.sendMassMail(row['email'], subject, message);
      to.push(row['email']);
    }
    let result = await mailer.sendMassMail(to.join(','), name, subject, message);

    res.status(200).send({
      result: langs.success,
      message: langs.successfullyUploaded,
      data: result,
    });
  } catch (err) {
    tracer.error(JSON.stringify(err));
    tracer.error(__filename);
    res.status(200).send({
      result: langs.error,
      message: langs.unknownServerError,
    });
  }
};

router.post('/send-email', sendEmailProc);

export default router;
