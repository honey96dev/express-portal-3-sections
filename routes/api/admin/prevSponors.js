import express from 'express';
import {sprintf} from 'sprintf-js';
import {dbTblName, uploadPath} from '../../../core/config';
import db from "../../../core/db";
import strings from '../../../core/strings';
import tracer from '../../../core/tracer';

const router = express.Router();

const _loadData = async (req, res, next) => {
  const language = req.get('language');
  const params = req.body;
  const {category} = params;
  const langs = strings[language];
  
  let sql = sprintf("SELECT * FROM `%s` WHERE `category` = '%s' ORDER BY `timestamp` DESC;", dbTblName.prevSponsors, category);
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
  const {id, category, nameEn, nameAr, timestamp, sponsor, descriptionEn, descriptionAr, media, originMedia, mediaSize, note} = params;
  const langs = strings[language];
  const meidaPath = media.startsWith('/') ? media : `${uploadPath.prevSponsors}/${media}`;
  const rows = [
    [id, category, nameEn, nameAr, timestamp, sponsor, descriptionEn, descriptionAr, meidaPath, originMedia, mediaSize, note],
  ];
  
  let sql = sprintf("INSERT INTO `%s` VALUES ? ON DUPLICATE KEY UPDATE `nameEn` = VALUES(`nameEn`), `nameAr` = VALUES(`nameAr`), `timestamp` = VALUES(`timestamp`), `sponsor` = VALUES(`sponsor`), `descriptionEn` = VALUES(`descriptionEn`), `descriptionAr` = VALUES(`descriptionAr`), `media` = VALUES(`media`), `originMedia` = VALUES(`originMedia`), `mediaSize` = VALUES(`mediaSize`), `note` = VALUES(`note`);", dbTblName.prevSponsors);
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
  
  let sql = sprintf("DELETE FROM `%s` WHERE `id` = '%d';", dbTblName.prevSponsors, id);
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
router.post('/edit', editProc);
router.post('/delete', deleteProc);

export default router;
