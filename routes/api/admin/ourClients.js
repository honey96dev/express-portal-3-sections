import express from 'express';
import {sprintf} from 'sprintf-js';
import {dbTblName, uploadPath} from 'core/config';
import strings from 'core/strings';
import tracer from 'core/tracer';
import db from "core/db";

const router = express.Router();

const _loadData = async (req, res, next) => {
  const language = req.get('language');
  const params = req.body;
  const {category} = params;
  const langs = strings[language];
  let sql = sprintf("SELECT * FROM `%s` WHERE `category` = '%s' ORDER BY `timestamp` DESC;", dbTblName.ourClients, category);

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
  const {id, category, timestamp, nameEn, nameAr, photo, photoOriginMedia, photoMediaSize, titleEn, titleAr, descriptionEn, descriptionAr, durationEn, durationAr, scopeEn, scopeAr, deliverableEn, deliverableAr,note,} = params;
  // const {id, category, timestamp, nameEn, nameAr, photo, photoOriginMedia, photoMediaSize, stars, title, feedbackEn, feedbackAr, files, filesOriginMedia, filesMediaSize, note} = params;
  const langs = strings[language];
  const photoMediaPath = photo.startsWith('/') ? photo : `${uploadPath.ourClients}/${photo}`;
  const rows = [
    [id, category, timestamp, nameEn, nameAr, photoMediaPath, photoOriginMedia, photoMediaSize, titleEn, titleAr, descriptionEn, descriptionAr, durationEn, durationAr, scopeEn, scopeAr, deliverableEn, deliverableAr,note,],
    // [id, category, timestamp, nameEn, nameAr, photoMediaPath, photoOriginMedia, photoMediaSize, stars, title, feedbackEn, feedbackAr, files, filesOriginMedia, filesMediaSize, note],
  ];
  let sql = sprintf("INSERT INTO `%s` VALUES ? ON DUPLICATE KEY UPDATE `timestamp` = VALUES(`timestamp`), `nameEn` = VALUES(`nameEn`), `nameAr` = VALUES(`nameAr`), `photo` = VALUES(`photo`), `photoOriginMedia` = VALUES(`photoOriginMedia`), `photoMediaSize` = VALUES(`photoMediaSize`), `titleEn` = VALUES(`titleEn`), `titleAr` = VALUES(`titleAr`), `descriptionEn` = VALUES(`descriptionEn`), `descriptionAr` = VALUES(`descriptionAr`), `durationEn` = VALUES(`durationEn`), `durationAr` = VALUES(`durationAr`), `scopeEn` = VALUES(`scopeEn`), `scopeAr` = VALUES(`scopeAr`), `deliverableEn` = VALUES(`deliverableEn`), `deliverableAr` = VALUES(`deliverableAr`), `note` = VALUES(`note`);", dbTblName.ourClients);
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
  const {id} = params;
  const langs = strings[language];
  let sql = sprintf("DELETE FROM `%s` WHERE `id` = '%d';", dbTblName.ourClients, id);
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
