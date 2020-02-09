import express from 'express';
import {sprintf} from 'sprintf-js';
import dateformat from "dateformat";
import {dbTblName, uploadPath} from 'core/config';
import db from "core/db";
import strings from 'core/strings';
import tracer from 'core/tracer';
import myCrypto from "core/myCrypto";

const router = express.Router();

const _loadData = async (req, res, next) => {
  const language = req.get('language');
  const params = req.body;
  const langs = strings[language];
  let sql = sprintf("SELECT * FROM `%s`;", dbTblName.users);

  try {
    let rows = await db.query(sql, null);
    for (let row of rows) {
      row["birthday2"] = !!row["birthday"] ? row["birthday"].toISOString().substr(0, 10) : "";
      row["gender2"] = langs[row["gender"]];
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
  const langs = strings[language];
  const {id, email, username, firstName, fatherName, lastName, gender, birthday, jobTitle, sector, company, city, phone} = req.body;

  const today = new Date();
  const date = dateformat(today, "yyyy-mm-dd");

  let sql = sprintf("UPDATE `%s` SET `email` = ?, `username` = ?, `firstName` = ?, `fatherName` = ?, `lastName` = ?, `gender` = ?, `birthday` = ?, `jobTitle` = ?, `sector` = ?, `company` = ?, `city` = ?, `phone` = ?, `modifiedDate` = ? WHERE `id` = ?;", dbTblName.users);
  try {
    await db.query(sql, [email, username, firstName, fatherName, lastName, gender, birthday, jobTitle, sector, company, city, phone, date, id]);

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
  let sql = sprintf("DELETE FROM `%s` WHERE `id` = '%d';", dbTblName.users, id);

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

const allowProc = async (req, res, next) => {
  const language = req.get('language');
  const langs = strings[language];
  const {body: {id, newAllow}} = req;
  let sql = sprintf("UPDATE `%s` SET `allow` = '%d' WHERE `id` = '%d';", dbTblName.users, newAllow, id);
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

const resetPasswordProc = async (req, res, next) => {
  const language = req.get('language');
  const langs = strings[language];
  const {body: {id}} = req;
  const newPassword = '1234567890';
  const hash = myCrypto.hmacHex(newPassword);

  let sql = sprintf("UPDATE `%s` SET `hash` = '%s' WHERE `id` = '%d';", dbTblName.users, hash, id);
  try {
    await db.query(sql, null);
    res.status(200).send({
      result: langs.success,
      message: langs.successfullyReset,
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
router.post('/allow', allowProc);
router.post('/reset-password', resetPasswordProc);

export default router;
