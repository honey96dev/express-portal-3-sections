import express from 'express';
import {sprintf} from 'sprintf-js';
import {dbTblName} from 'core/config';
import db from "core/db";
import strings from 'core/strings';
import tracer from 'core/tracer';

const router = express.Router();

const loadProc = async (req, res, next) => {
  const language = req.get('language');
  const params = req.body;
  const {category} = params;
  const langs = strings[language];

  let sql = sprintf("SELECT * FROM %s WHERE `category` = ?", dbTblName.aboutUs);
  
  try {
    let rows = await db.query(sql, [category]);
    res.status(200).send({
      result: langs.success,
      data: rows.length ? rows[0] : {},
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

router.post('/load', loadProc);

export default router;
