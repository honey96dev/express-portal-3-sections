import express from 'express';
import {sprintf} from 'sprintf-js';
import db from '../../../core/db';
import {dbTblName} from "../../../core/config";
import tracer from "../../../core/tracer";
import strings from "../../../core/strings";

const router = express.Router();

const loadAnnualSettingsProc = async (req, res, next) => {
  const language = req.get('language');
  const langs = strings[language];
  let sql = sprintf("SELECT * FROM `%s`;", dbTblName.trainingSetting);

  try {
    let rows = await db.query(sql, null);
    let newRows = {};
    for (let row of rows) {
      newRows[row['key']] = row['value'];
    }
    res.status(200).send({
      result: langs.success,
      data: newRows,
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

const saveAnnualSettingsProc = async (req, res, next) => {
  const language = req.get('language');
  const langs = strings[language];
  const {year, summaryEn, summaryAr} = req.body;
  const newRows = [
    ['annual-upcoming-year', year],
    ['annual-upcoming-summary-en', summaryEn],
    ['annual-upcoming-summary-ar', summaryAr],
  ];
  let sql = sprintf("INSERT INTO `%s` VALUES ? ON DUPLICATE KEY UPDATE `key` = VALUES(`key`), `value` = VALUES(`value`);", dbTblName.trainingSetting);

  try {
    let rows = await db.query(sql, [newRows]);
    res.status(200).send({
      result: langs.success,
      message: langs.successfullySaved,
      data: rows,
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

router.post('/load-annual-settings', loadAnnualSettingsProc);
router.post('/save-annual-settings', saveAnnualSettingsProc);

export default router;
