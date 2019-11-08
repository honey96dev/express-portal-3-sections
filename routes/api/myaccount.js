import express from 'express';
import {sprintf} from 'sprintf-js';
import db from '../../core/db';
import {dbTblName} from "../../core/config";
import tracer from "../../core/tracer";
import strings from "../../core/strings";

const router = express.Router();

const saveProc = async (req, res, next) => {
  const language = req.get('language');
  const langs = strings[language];
  const {id, firstName, lastName, company, position, country, city, email, phone} = req.body;
  const rows = [
    [id, email, firstName, lastName, '', company, position, country, city, phone, 1],
  ];
  let sql = sprintf("INSERT INTO `%s` VALUES ? ON DUPLICATE KEY UPDATE `firstName` = VALUES(`firstName`), `lastName` = VALUES(`lastName`), `company` = VALUES(`company`), `position` = VALUES(`position`), `country` = VALUES(`country`), `city` = VALUES(`city`), `email` = VALUES(`email`), `phone` = VALUES(`phone`);", dbTblName.users);
  tracer.info(sql);
  try {
    await db.query(sql, [rows]);
    res.status(200).send({
      result: langs.success,
      message: langs.successfullySaved,
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

router.post('/save', saveProc);

export default router;
