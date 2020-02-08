import express from 'express';
import {sprintf} from 'sprintf-js';
import db from 'core/db';
import {dbTblName} from "core/config";
import tracer from "core/tracer";
import strings from "core/strings";
import myCrypto from "core/myCrypto";

const router = express.Router();

const saveProc = async (req, res, next) => {
  const language = req.get('language');
  const langs = strings[language];
  const {id, firstName, lastName, company, position, country, city, email, phone} = req.body;
  const rows = [
    [id, email, firstName, lastName, '', company, position, country, city, phone, 1],
  ];
  let sql = sprintf("INSERT INTO `%s` VALUES ? ON DUPLICATE KEY UPDATE `firstName` = VALUES(`firstName`), `lastName` = VALUES(`lastName`), `company` = VALUES(`company`), `position` = VALUES(`position`), `country` = VALUES(`country`), `city` = VALUES(`city`), `email` = VALUES(`email`), `phone` = VALUES(`phone`);", dbTblName.users);
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

const changePasswordProc = async (req, res, next) => {
  const language = req.get('language');
  const langs = strings[language];
  const {id, currentPassword, password} = req.body;
  const currentHash = myCrypto.hmacHex(currentPassword);
  const hash = myCrypto.hmacHex(password);
  let sql = sprintf("SELECT * FROM `%s` WHERE `id` = '%s';", dbTblName.users, id);
  try {
    let rows = await db.query(sql, null);
    if (rows.length === 0) {
      res.status(200).send({
        result: langs.error,
        message: langs.notFound,
      });
      return;
    }
    const row = rows[0];
    if (row['hash'] !== currentHash) {
      res.status(200).send({
        result: langs.error,
        message: langs.currentPasswordIncorrect,
      });
      return;
    }
    sql = sprintf("UPDATE `%s` SET `hash` = '%s' WHERE `id` = '%s';", dbTblName.users, hash, id);
    await db.query(sql, null);
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

router.post('/save', saveProc);
router.post('/change-password', changePasswordProc);

export default router;
