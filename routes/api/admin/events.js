import express from 'express';
import {sprintf} from 'sprintf-js';
import {dbTblName, uploadPath} from 'core/config';
import strings from 'core/strings';
import tracer from 'core/tracer';
import db from "core/db";
import {consts} from "core/consts";
import myCrypto from "core/myCrypto";

const _loadData = async (req, res, next) => {
  const language = req.get('language');
  const params = req.body;
  const {scope, category, limit} = params;
  const langs = strings[language];
  const today = new Date();
  const timestamp = sprintf('%04d-%02d-%02d', today.getFullYear(), today.getMonth() + 1, today.getDate());
  let sql = sprintf("SELECT E.*, COUNT(J.id) `applicants` FROM `%s` E LEFT JOIN `%s` J ON J.target = E.id WHERE E.category = '%s' AND E.timestamp %s '%s' GROUP BY E.id ORDER BY E.timestamp %s;", dbTblName.events, dbTblName.eventJoin, category, scope === consts.previous ? '<' : '>=', timestamp, scope === consts.previous ? 'DESC' : 'ASC');

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

const _loadApplicants = async (req, res, next) => {
  const language = req.get('language');
  const params = req.body;
  const {target} = params;
  const langs = strings[language];
  let sql = sprintf("SELECT J.id, J.jobTitle, J.paid, J.attend, U.id `userId`, U.email, U.firstName, U.fatherName, U.lastName, U.jobTitle, U.sector, U.company, U.city, U.countryCode, U.phone, U.allowedDate FROM `%s` J JOIN `%s` U ON U.id = J.userId WHERE `target` = '%s';", dbTblName.eventJoin, dbTblName.users, target);

  try {
    let rows = await db.query(sql, null);

    for (let row of rows) {
      row['hash'] = myCrypto.hmacHex(consts.event + '@@' + row['id'] + '@@' + row['userId'] + '@@' + row['email']);
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

const _saveData = async (req, res, next, mode) => {
  const language = req.get('language');
  const params = req.body;
  const {scope, id, category, typeEn, typeAr, nameEn, nameAr, timestamp, titleEn, titleAr, descriptionEn, descriptionAr, media, originMedia, mediaSize, note} = params;
  const langs = strings[language];
  const meidaPath = media.startsWith('/') ? media : `${uploadPath.previousEvents}/${media}`;
  const rows = [
    [id, category, typeEn, typeAr, nameEn, nameAr, timestamp, titleEn, titleAr, descriptionEn, descriptionAr, meidaPath, originMedia, mediaSize, note],
  ];
  let sql = sprintf("INSERT INTO `%s` VALUES ? ON DUPLICATE KEY UPDATE `typeEn` = VALUES(`typeEn`), `typeAr` = VALUES(`typeAr`), `nameEn` = VALUES(`nameEn`), `nameAr` = VALUES(`nameAr`), `timestamp` = VALUES(`timestamp`), `titleEn` = VALUES(`titleEn`), `titleAr` = VALUES(`titleAr`), `descriptionEn` = VALUES(`descriptionEn`), `descriptionAr` = VALUES(`descriptionAr`), `media` = VALUES(`media`), `originMedia` = VALUES(`originMedia`), `mediaSize` = VALUES(`mediaSize`), `note` = VALUES(`note`);", dbTblName.events);

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
  let sql = sprintf("DELETE FROM `%s` WHERE `id` = '%d';", dbTblName.events, id);

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
  let sql = sprintf("SELECT * FROM `%s` WHERE `id` = '%s';", dbTblName.events, id);

  try {
    let rows = await db.query(sql, null);
    if (rows.length) {
      rows = rows[0];
      const today = new Date();
      const timestamp = sprintf("%04d-%02d-%02d", today.getFullYear(), today.getMonth() + 1, today.getDate());
      rows['isPrevious'] = rows['timestamp'] < timestamp;
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

const applicantsProc = async (req, res, next) => {
  await _loadApplicants(req, res, next);
};

const deleteApplicantProc = async (req, res, next) => {
  const language = req.get('language');
  const params = req.body;
  const {id} = params;
  const langs = strings[language];
  let sql = sprintf("DELETE FROM `%s` WHERE `id` = '%d';", dbTblName.eventJoin, id);

  try {
    await db.query(sql, null);
    _loadApplicants(req, res, next);
  } catch (err) {
    tracer.error(JSON.stringify(err));
    tracer.error(__filename);
    res.status(200).send({
      result: langs.error,
      message: langs.unknownServerError,
    });
  }
};

const paidProc = async (req, res, next) => {
  const language = req.get('language');
  const params = req.body;
  const {id, paid} = params;
  const langs = strings[language];
  let sql = sprintf("UPDATE `%s` SET `paid` = '%s' WHERE `id` = '%s';", dbTblName.eventJoin, paid, id);

  try {
    await db.query(sql, null);

    await _loadApplicants(req, res, next);
  } catch (err) {
    tracer.error(JSON.stringify(err));
    tracer.error(__filename);
    res.status(200).send({
      result: langs.error,
      message: langs.unknownServerError,
    });
  }
};

const attendProc = async (req, res, next) => {

  const language = req.get('language');
  const params = req.body;
  const {id, attend} = params;
  const langs = strings[language];
  let sql = sprintf("UPDATE `%s` SET `attend` = '%s' WHERE `id` = '%s';", dbTblName.eventJoin, attend, id);

  try {
    await db.query(sql, null);

    await applicantsProc(req, res, next);
  } catch (err) {
    tracer.error(JSON.stringify(err));
    tracer.error(__filename);
    res.status(200).send({
      result: langs.error,
      message: langs.unknownServerError,
    });
  }
};

const router = express.Router();

router.post('/list', listProc);
// router.post('/add', addProc);
router.post('/edit', editProc);
router.post('/delete', deleteProc);
router.post('/get', getProc);
router.post('/applicants', applicantsProc);
router.post('/delete-applicant', deleteApplicantProc);
router.post('/paid', paidProc);
router.post('/attend', attendProc);

export default router;
