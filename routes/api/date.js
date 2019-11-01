import express from 'express';
import {sprintf} from 'sprintf-js';
import db from '../../core/db';
import {dbTblName} from "../../core/config";
import tracer from "../../core/tracer";
import strings from "../../core/strings";

const router = express.Router();

const todayProc = async (req, res, next) => {
  const language = req.get('language');
  const langs = strings[language];
  const timestamp = new Date();
  const data = sprintf("%04d-%02d-%02d", timestamp.getFullYear(), timestamp.getMonth() + 1, timestamp.getDate());

  res.status(200).send({
    result: langs.success,
    data: data,
  });
};

const yearProc = async (req, res, next) => {
  const language = req.get('language');
  const langs = strings[language];
  const timestamp = new Date();

  res.status(200).send({
    result: langs.success,
    data: timestamp.getFullYear(),
  });
};

const monthProc = async (req, res, next) => {
  const language = req.get('language');
  const langs = strings[language];
  const timestamp = new Date();

  res.status(200).send({
    result: langs.success,
    data: timestamp.getMonth() + 1,
  });
};

const dateProc = async (req, res, next) => {
  const language = req.get('language');
  const langs = strings[language];
  const timestamp = new Date();

  res.status(200).send({
    result: langs.success,
    data: timestamp.getDate(),
  });
};

router.post('/today', todayProc);
router.post('/year', yearProc);
router.post('/month', monthProc);
router.post('/date', dateProc);

export default router;
