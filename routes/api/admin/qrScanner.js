import express from 'express';
import {sprintf} from 'sprintf-js';
import {dbTblName} from '../../../core/config';
import strings from '../../../core/strings';
import tracer from '../../../core/tracer';
import db from "../../../core/db";
import myCrypto from "../../../core/myCrypto";

const router = express.Router();

const getProc = async (req, res, next) => {
  const language = req.get('language');
  const params = req.body;
  const {category, id, userId, email, hash} = params;
  const langs = strings[language];

  const hash2 = myCrypto.hmacHex(category + '@@' + id + '@@' + userId + '@@' + email);
  if (hash !== hash2) {
    res.status(200).send({
      result: langs.error,
      message: langs.invalidHash,
    });
    return;
  }

  let sql = sprintf("SELECT * FROM `%s` WHERE `id` = '%s';", dbTblName.users, userId);

  try {
    let rows = await db.query(sql, null);
    if (rows.length === 0) {
      res.status(200).send({
        result: langs.error,
        message: langs.invalidUser,
      });
      return;
    }
    res.status(200).send({
      result: langs.success,
      data: rows[0],
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

const postProc = async (req, res, next) => {
  const language = req.get('language');
  const params = req.body;
  const {category, id, userId, email, hash} = params;
  const langs = strings[language];

  const hash2 = myCrypto.hmacHex(category + '@@' + id + '@@' + userId + '@@' + email);
  if (hash !== hash2) {
    res.status(200).send({
      result: langs.error,
      message: langs.invalidHash,
    });
    return;
  }

  let sql = sprintf("SELECT * FROM `%s` WHERE `id` = '%d';", category === 'event' ? dbTblName.eventJoin : dbTblName.courseJoin, id);

  try {
    let rows = await db.query(sql, null);
    if (rows.length === 0) {
      res.status(200).send({
        result: langs.error,
        message: langs.notRegistered,
      });
      return;
    }
    sql = sprintf("UPDATE `%s` SET `attend` = '%d' WHERE `id` = '%s';", category === 'event' ? dbTblName.eventJoin : dbTblName.courseJoin, 1, id);
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
    });
  }
};

router.post('/get', getProc);
router.post('/post', postProc);

export default router;
