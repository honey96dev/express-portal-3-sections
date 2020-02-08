import express from 'express';
import {sprintf} from 'sprintf-js';
import db from 'core/db';
import {dbTblName} from "core/config";
import {consts} from "core/consts";
import tracer from "core/tracer";
import strings from "core/strings";

const router = express.Router();

const annualUpcomingYearProc = async (req, res, next) => {
  const language = req.get('language');
  const langs = strings[language];

  let sql = sprintf("SELECT * FROM `%s` WHERE `key` = '%s';", dbTblName.trainingSetting, consts.annualUpcomingYear);
  try {
    let rows = await db.query(sql, null);
    const today = new Date();
    let data = today.getFullYear();
    if (rows.length > 0) {
      data = rows[0]['value'];
    }
    res.status(200).send({
      result: langs.success,
      data: data,
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

const loadAllSettingsProc = async (req, res, next) => {
  const language = req.get('language');
  const langs = strings[language];

  let sql = sprintf("SELECT * FROM `%s`;", dbTblName.trainingSetting);
  try {
    let rows = await db.query(sql, null);
    let data = {};
    for (let row of rows) {
      data[row['key']] = row['value'];
    }
    res.status(200).send({
      result: langs.success,
      data: data,
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

router.post('/annual-upcoming-year', annualUpcomingYearProc);
router.post('/load-all-settings', loadAllSettingsProc);

export default router;
