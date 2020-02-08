import express from 'express';
import {sprintf} from 'sprintf-js';
import {dbTblName} from 'core/config';
import db from 'core/db';
import strings from 'core/strings';
import tracer from 'core/tracer';
import {consts} from "core/consts";
import mailer from "core/mailer";

const router = express.Router();

const _loadData = async (req, res, next) => {
  const language = req.get('language');
  const langs = strings[language];
  const {scope, limit} = req.body;
  const today = new Date();
  const todayStr = sprintf('%04d-%02d-%02d', today.getFullYear(), today.getMonth() + 1, today.getDate());
  // let sql = sprintf("SELECT * FROM `%s`;", dbTblName.courses);
  let sql;

  try {
    let rows;
    if (scope === consts.upcoming) {
      sql = sprintf("SELECT * FROM `%s` WHERE `timestamp` %s '%s' ORDER BY `timestamp` %s LIMIT %d;", dbTblName.courses, scope === consts.previous ? '<' : '>=', todayStr, scope === consts.previous ? 'DESC' : 'ASC', limit);
    } else if (scope === consts.previous) {
      sql = sprintf("SELECT * FROM `%s` WHERE `timestamp` %s '%s' ORDER BY `timestamp` %s LIMIT %d;", dbTblName.courses, scope === consts.previous ? '<' : '>=', todayStr, scope === consts.previous ? 'DESC' : 'ASC', limit);
    } else {
      sql = sprintf("SELECT * FROM `%s` WHERE `key` = '%s';", dbTblName.trainingSetting, consts.annualUpcomingYear);
      rows = await db.query(sql, null);
      let year;
      if (rows.length > 0) {
        year = rows[0]['value'];
      } else {
        year = today.getFullYear();
      }
      const timestamp = sprintf("%04d%s", year, '%');

      sql = sprintf("SELECT * FROM `%s` WHERE `timestamp` LIKE '%s' ORDER BY `timestamp` ASC;", dbTblName.courses, timestamp);
    }
    rows = await db.query(sql, null);
    for (let row of rows) {
      row['isFuture'] = row['timestamp'] > todayStr;
    }
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

const listProc = (req, res, next) => {
  _loadData(req, res, next);
};

const getProc = async (req, res, next) => {

  const language = req.get('language');
  const langs = strings[language];
  const {id} = req.body;
  const today = new Date();
  const todayStr = sprintf('%04d-%02d-%02d', today.getFullYear(), today.getMonth() + 1, today.getDate());

  let sql = sprintf("SELECT * FROM `%s` WHERE `id` = '%s';", dbTblName.courses, id);

  try {
    let rows;
    rows = await db.query(sql, null);
    if (rows.length > 0) {
      let data = rows[0];
      data['isFuture'] = data['timestamp'] > todayStr;
      sql = sprintf("SELECT * FROM `%s` WHERE `targetId` = '%s';", dbTblName.courseInstructors, id);
      rows = await db.query(sql, null);
      data['instructors'] = rows;

      res.status(200).send({
        result: langs.success,
        data: data,
      });
    } else {
      res.status(200).send({
        result: langs.error,
        message: langs.notFound,
      });
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

const joinEvent = async (req, res, next) => {
  const language = req.get('language');
  const params = req.body;
  const {target, userId, jobTitle, email} = params;
  const langs = strings[language];

  let sql = sprintf("SELECT `id` FROM `%s` WHERE `target` = '%s' AND `userId` = '%s';", dbTblName.courseJoin, target, userId);
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

    await mailer.sendCourseJoinMail(email);
    sql = sprintf("INSERT INTO `%s`(`target`, `userId`, `jobTitle`) VALUES('%s', '%s', '%s');", dbTblName.courseJoin, target, userId, jobTitle);
    rows = await db.query(sql, null);
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
