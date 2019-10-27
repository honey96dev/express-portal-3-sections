import express from 'express';
import {sprintf} from 'sprintf-js';
import {dbTblName} from '../../core/config';
import strings from '../../core/strings';
import tracer from '../../core/tracer';
import db from "../../core/db";

const router = express.Router();

const _loadData = async (req, res, next) => {
  const language = req.get('language');
  const params = req.body;
  const {scope, category, limit} = params;
  const langs = strings[language];
  const today = new Date();
  const todayStr = sprintf('%04d-%02d-%02d', today.getFullYear(), today.getMonth() + 1, today.getDate());

  let sql;
  if (scope == 'upcoming') {
    sql = sprintf("SELECT * FROM `%s` WHERE `category` = '%s' AND `timestamp` %s '%s' ORDER BY `timestamp` %s LIMIT %d;", dbTblName.events, category, scope === 'previous' ? '<' : '>=', todayStr, scope === 'previous' ? 'DESC' : 'ASC', limit);
    // sql = sprintf("SELECT * FROM `%s_%s` WHERE `category` = '%s' AND `timestamp` %s '%s' ORDER BY `timestamp` %s LIMIT %d;", scope, dbTblName.events, category, scope === 'previous' ? '<' : '>=', todayStr, scope === 'previous' ? 'DESC' : 'ASC', limit);
  } else {
    sql = sprintf("SELECT * FROM `%s` WHERE `category` = '%s' AND `timestamp` %s '%s' ORDER BY `timestamp` %s LIMIT %d;", dbTblName.events, category, scope === 'previous' ? '<' : '>=', todayStr, scope === 'previous' ? 'DESC' : 'ASC', limit);
    // sql = sprintf("SELECT * FROM `%s_%s` WHERE `category` = '%s' AND `timestamp` %s '%s' ORDER BY `timestamp` %s LIMIT %d;", scope, dbTblName.events, category, scope === 'previous' ? '<' : '>=', todayStr, scope === 'previous' ? 'DESC' : 'ASC', limit);
  }

  tracer.info(sql);
  try {
    let rows = await db.query(sql, null);
    res.status(200).send({
      result: langs.success,
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

const listProc = async (req, res, next) => {
  _loadData(req, res, next);
};

const getProc = async (req, res, next) => {
  const language = req.get('language');
  const params = req.body;
  const {scope, id} = params;
  const langs = strings[language];

  let sql = sprintf("SELECT * FROM `%s` WHERE `id` = '%s';", dbTblName.events, id);
  // let sql = sprintf("SELECT * FROM `%s_%s` WHERE `id` = '%s';", scope, dbTblName.events, id);
  try {
    let rows = await db.query(sql, null);
    let row = {};
    if (rows.length > 0) {
      row = rows[0];
    }
    res.status(200).send({
      result: langs.success,
      data: row,
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

const joinEvent = async (req, res, next) => {
  const language = req.get('language');
  const params = req.body;
  const {target, userId, jobTitle} = params;
  const langs = strings[language];

  let sql = sprintf("SELECT `id` FROM `%s` WHERE `target` = '%s' AND `userId` = '%s';", dbTblName.eventJoin, target, userId);
  try {
    let rows = await db.query(sql, null);
    let row = {};
    if (rows.length > 0) {
      res.status(200).send({
        result: langs.error,
        message: langs.youHaveAlreadyJoined,
      });
      return;
    }

    sql = sprintf("INSERT INTO `%s`(`target`, `userId`, `jobTitle`) VALUES('%s', '%s', '%s');", dbTblName.eventJoin, target, userId, jobTitle);
    rows = await db.query(sql, null);
    console.log(rows);
    res.status(200).send({
      result: langs.success,
      message: langs.successfullyJoined,
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

router.post('/list', listProc);
router.post('/get', getProc);
router.post('/join', joinEvent);

export default router;
