import express from 'express';
import {sprintf} from 'sprintf-js';
import {dbTblName} from '../../core/config';
import db from '../../core/db';
import strings from '../../core/strings';
import tracer from '../../core/tracer';
import consts from "../../core/consts";

const router = express.Router();

const _loadData = async (req, res, next) => {
  const language = req.get('language');
  const langs = strings[language];
  const {scope, limit} = req.body;
  const today = new Date();
  const todayStr = sprintf('%04d-%02d-%02d', today.getFullYear(), today.getMonth() + 1, today.getDate());
  // let sql = sprintf("SELECT * FROM `%s`;", dbTblName.courses);
  let sql;
  if (scope === consts.upcoming) {
    sql = sprintf("SELECT * FROM `%s` WHERE `timestamp` %s '%s' ORDER BY `timestamp` %s LIMIT %d;", dbTblName.courses, scope === consts.previous ? '<' : '>=', todayStr, scope === consts.previous ? 'DESC' : 'ASC', limit);
  } else if (scope === consts.previous) {
    sql = sprintf("SELECT * FROM `%s` WHERE `timestamp` %s '%s' ORDER BY `timestamp` %s LIMIT %d;", dbTblName.courses, scope === consts.previous ? '<' : '>=', todayStr, scope === consts.previous ? 'DESC' : 'ASC', limit);
  }
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
  //
  //   res.status(200).send({
  //     result: langs.success,
  //     data: rows,
  //   });
  // });
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
  // db.query(sql, null).then(rows => {
  //   res.status(200).send({
  //     result: langs.success,
  //     data: rows,
  //   });
  // }).catch(err => {
  //   tracer.error(JSON.stringify(err));
  //   tracer.error(__filename);
  //   res.status(200).send({
  //     result: langs.error,
  //     message: langs.unknownServerError,
  //     err,
  //   });
  // });
};

const listProc = (req, res, next) => {
  _loadData(req, res, next);
};

router.post('/list', listProc);

export default router;
