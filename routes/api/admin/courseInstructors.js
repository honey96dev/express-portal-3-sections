import express from 'express';
import {sprintf} from 'sprintf-js';
import {dbTblName, uploadPath} from 'core/config';
import db from "core/db";
import strings from 'core/strings';
import tracer from 'core/tracer';

const router = express.Router();

const _loadData = async (req, res, next) => {
  const language = req.get('language');
  const params = req.body;
  const {targetId} = params;
  const langs = strings[language];

  let sql = sprintf("SELECT * FROM `%s` WHERE `targetId` = '%s';", dbTblName.courseInstructors, targetId);

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
    });
  }
};

const _saveData = async (req, res, next, mode) => {
  const language = req.get('language');
  const params = req.body;
  const {id, targetId, nameEn, nameAr, summaryEn, summaryAr, media, originMedia, mediaSize} = params;
  const langs = strings[language];
  const meidaPath = media.startsWith('/') ? media : `${uploadPath.courseInstructors}/${media}`;
  const rows = [
    [id, targetId, nameEn, nameAr, summaryEn, summaryAr, meidaPath, originMedia, mediaSize],
  ];
  let sql = sprintf("INSERT INTO `%s` VALUES ? ON DUPLICATE KEY UPDATE `nameEn` = VALUES(`nameEn`), `nameAr` = VALUES(`nameAr`), `summaryEn` = VALUES(`summaryEn`), `summaryAr` = VALUES(`summaryAr`), `media` = VALUES(`media`), `originMedia` = VALUES(`originMedia`), `mediaSize` = VALUES(`mediaSize`);", dbTblName.courseInstructors);

  try {
    let result = await db.query(sql, [rows]);
    res.status(200).send({
      result: langs.success,
      message: !!id ? langs.successfullyEdited : langs.successfullyAdded,
      data: {
        insertId: !!id ? id : result['insertId'],
      }
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

const listProc = (req, res, next) => {
  _loadData(req, res, next);
};

const addProc = (req, res, next) => {
  _saveData(req, res, next, 'add');
};

const editProc = (req, res, next) => {
  _saveData(req, res, next, 'edit');
};

const deleteProc = async (req, res, next) => {
  const language = req.get('language');
  const params = req.body;
  const {id} = params;
  const langs = strings[language];
  let sql = sprintf("DELETE FROM `%s` WHERE `id` = '%d';", dbTblName.courseInstructors, id);

  try {
    await db.query(sql, null);
    _loadData(req, res, next);
  } catch (err) {
    tracer.error(JSON.stringify(err));
    tracer.error(__filename);
    res.status(200).send({
      result: langs.error,
      message: langs.unknownServerError,
    });
  }
};

const getProc = async (req, res, next) => {
  const language = req.get('language');
  const params = req.body;
  const {id} = params;
  const langs = strings[language];
  let sql = sprintf("SELECT * FROM `%s` WHERE `id` = '%s';", dbTblName.courseInstructors, id);

  try {
    let rows = await db.query(sql, null);
    if (rows.length) {
      rows = rows[0];
    } else {
      rows = {};
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
    });
  }
};

router.post('/list', listProc);
// router.post('/add', addProc);
router.post('/edit', editProc);
router.post('/delete', deleteProc);
router.post('/get', getProc);

export default router;
