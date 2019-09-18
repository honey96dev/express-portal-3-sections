import express from 'express';
import {sprintf} from 'sprintf-js';
import {dbTblName, uploadPath} from '../../../core/config';
import dbConn from '../../../core/dbConn';
import strings from '../../../core/strings';
import tracer from '../../../core/tracer';

const router = express.Router();

const _loadData = (req, res, next) => {
  const language = req.get('language');
  const params = req.body;
  const {scope, category, limit} = params;
  const langs = strings[language];
  let sql = sprintf("SELECT * FROM `%s_%s` WHERE `category` = '%s' ORDER BY `timestamp` %s;", scope, dbTblName.events, category, scope === 'previous' ? 'DESC' : 'ASC');

  dbConn.query(sql, null, (error, rows, fields) => {
    if (error) {
      tracer.error(JSON.stringify(error));
      tracer.error(__filename);
      res.status(200).send({
        result: langs.error,
        message: langs.unknownServerError,
      });
      return;
    }

    res.status(200).send({
      result: langs.success,
      data: rows,
    });
  });
};

const _saveData = (req, res, next, mode) => {
  const language = req.get('language');
  const params = req.body;
  const {scope, id, category, type, name, timestamp, title, description, media, originMedia, mediaSize, note} = params;
  const langs = strings[language];
  const meidaPath = media.startsWith('/') ? media : `${uploadPath.previousEvents}/${media}`;
  const rows = [
    [id, category, type, name, timestamp, title, description, meidaPath, originMedia, mediaSize, note],
  ];
  let sql = sprintf("INSERT INTO `%s_%s` VALUES ? ON DUPLICATE KEY UPDATE `type` = VALUES(`type`), `name` = VALUES(`name`), `timestamp` = VALUES(`timestamp`), `title` = VALUES(`title`), `description` = VALUES(`description`), `media` = VALUES(`media`), `originMedia` = VALUES(`originMedia`), `mediaSize` = VALUES(`mediaSize`), `note` = VALUES(`note`);", scope, dbTblName.events);
  dbConn.query(sql, [rows], (error, result, fields) => {
    if (error) {
      tracer.error(JSON.stringify(error));
      tracer.error(__filename);
      res.status(200).send({
        result: langs.error,
        message: langs.unknownServerError,
      });
      return;
    }
    res.status(200).send({
      result: langs.success,
      message: !!id ? langs.successfullyEdited : langs.successfullyAdded,
      data: {
        insertId: !!id ? id : result['insertId'],
      }
    });
  });
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

const deleteProc = (req, res, next) => {
  const language = req.get('language');
  const params = req.body;
  const {id} = params;
  const langs = strings[language];
  let sql = sprintf("DELETE FROM `%s` WHERE `id` = '%d';", dbTblName.previousEvents, id);
  dbConn.query(sql, null, (error, result, fields) => {
    if (error) {
      tracer.error(JSON.stringify(error));
      tracer.error(__filename);
      res.status(200).send({
        result: langs.error,
        message: langs.unknownServerError,
      });
      return;
    }

    _loadData(req, res, next);
  });
};

router.post('/list', listProc);
// router.post('/add', addProc);
router.post('/edit', editProc);
router.post('/delete', deleteProc);

export default router;
