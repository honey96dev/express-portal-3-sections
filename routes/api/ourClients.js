import express from 'express';
import {sprintf} from 'sprintf-js';
import {dbTblName} from 'core/config';
import strings from 'core/strings';
import tracer from 'core/tracer';
import db from "core/db";

const router = express.Router();

const _loadData = async (req, res, next) => {
  const language = req.get('language');
  const params = req.body;
  const {category} = params;
  const langs = strings[language];
  let sql = sprintf("SELECT * FROM `%s` WHERE `category` = '%s' ORDER BY `timestamp` DESC LIMIT 20;", dbTblName.ourClients, category);

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
  //   const today = new Date();
  //   let timestamp, diff;
  //   let M, d, h, m;
  //   for (let row of rows) {
  //     timestamp = new Date(row.timestamp);
  //     diff = Math.floor((today - timestamp) / (60 * 1000));
  //
  //     m = diff % 60;
  //     diff = Math.floor(diff / 60);
  //
  //     h = diff % 24;
  //     diff = Math.floor(diff / 24);
  //
  //     d = diff % 30;
  //     diff = Math.floor(diff / 30);
  //
  //     M = diff;
  //
  //     row.timeDiff = {
  //       M, d, h, m
  //     };
  //   }
  //
  //   res.status(200).send({
  //     result: langs.success,
  //     data: rows,
  //   });
  // });
  try {
    let rows = await db.query(sql, null);

    const today = new Date();
    let timestamp, diff;
    let M, d, h, m;
    for (let row of rows) {
      timestamp = new Date(row.timestamp);
      diff = Math.floor((today - timestamp) / (60 * 1000));

      m = diff % 60;
      diff = Math.floor(diff / 60);

      h = diff % 24;
      diff = Math.floor(diff / 24);

      d = diff % 30;
      diff = Math.floor(diff / 30);

      M = diff;

      row.timeDiff = {
        M, d, h, m
      };
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

const listProc = async (req, res, next) => {
  await _loadData(req, res, next);
};

const getProc = async (req, res, next) => {
  const language = req.get('language');
  const params = req.body;
  const {id} = params;
  const langs = strings[language];
  let sql = sprintf("SELECT * FROM `%s` WHERE `id` = '%s';", dbTblName.ourClients, id);

  try {
    let rows = await db.query(sql, null);

    if (rows.length > 0) {
      res.status(200).send({
        result: langs.success,
        data: rows[0],
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

router.post('/list', listProc);
router.post('/get', getProc);

export default router;
