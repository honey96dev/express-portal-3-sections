import express from 'express';
import {sprintf} from 'sprintf-js';
import {dbTblName, uploadPath} from '../../../core/config';
import strings from '../../../core/strings';
import tracer from '../../../core/tracer';
import db from "../../../core/db";

const router = express.Router();

const _loadData = async (req, res, next) => {
  const language = req.get('language');
  const params = req.body;
  const {scope, category, limit} = params;
  const langs = strings[language];
  let sql = sprintf("SELECT * FROM `%s_%s` WHERE `category` = '%s' ORDER BY `timestamp` %s;", scope, dbTblName.events, category, scope === 'previous' ? 'DESC' : 'ASC');

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
    });
  }
};

const _saveData = async (req, res, next, mode) => {
  const language = req.get('language');
  const params = req.body;
  const {scope, id, category, typeEn, typeAr, nameEn, nameAr, timestamp, titleEn, titleAr, descriptionEn, descriptionAr, media, originMedia, mediaSize, note} = params;
  const langs = strings[language];
  const meidaPath = media.startsWith('/') ? media : `${uploadPath.previousEvents}/${media}`;
  const rows = [
    [id, category, typeEn, typeAr, nameEn, nameAr, timestamp, titleEn, titleAr, descriptionEn, descriptionAr, meidaPath, originMedia, mediaSize, note],
  ];
  let sql = sprintf("INSERT INTO `%s_%s` VALUES ? ON DUPLICATE KEY UPDATE `typeEn` = VALUES(`typeEn`), `typeAr` = VALUES(`typeAr`), `nameEn` = VALUES(`nameEn`), `nameAr` = VALUES(`nameAr`), `timestamp` = VALUES(`timestamp`), `titleEn` = VALUES(`titleEn`), `titleAr` = VALUES(`titleAr`), `descriptionEn` = VALUES(`descriptionEn`), `descriptionAr` = VALUES(`descriptionAr`), `media` = VALUES(`media`), `originMedia` = VALUES(`originMedia`), `mediaSize` = VALUES(`mediaSize`), `note` = VALUES(`note`);", scope, dbTblName.events);
  // dbConn.query(sql, [rows], (error, result, fields) => {
  //   if (error) {
  //     tracer.error(JSON.stringify(error));
  //     tracer.error(__filename);
  //     res.status(200).send({
  //       result: langs.error,
  //       message: langs.unknownServerError,
  //     });
  //     return;
  //   }
  //   res.status(200).send({
  //     result: langs.success,
  //     message: !!id ? langs.successfullyEdited : langs.successfullyAdded,
  //     data: {
  //       insertId: !!id ? id : result['insertId'],
  //     }
  //   });
  // });
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
  const {scope, id} = params;
  const langs = strings[language];
  let sql = sprintf("DELETE FROM `%s_%s` WHERE `id` = '%d';", scope, dbTblName.events, id);
  // dbConn.query(sql, null, (error, result, fields) => {
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
  //   _loadData(req, res, next);
  // });
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

router.post('/list', listProc);
// router.post('/add', addProc);
router.post('/edit', editProc);
router.post('/delete', deleteProc);

export default router;
