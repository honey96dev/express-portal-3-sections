import express from 'express';
import {sprintf} from 'sprintf-js';
import {dbTblName, uploadPath} from '../../../core/config';
import db from "../../../core/db";
import strings from '../../../core/strings';
import tracer from '../../../core/tracer';
import consts from "../../../core/consts";

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

const saveProc = async (req, res, next) => {
  const language = req.get('language');
  const params = req.body;
  const {category, video, originVideo, videoSize, brochure, originBrochure, brochureSize} = params;
  const langs = strings[language];
  const videoPath = video.startsWith('/') ? video : `${uploadPath.aboutUs}/${video}`;
  const brochurePath = brochure.startsWith('/') ? brochure : `${uploadPath.aboutUs}/${brochure}`;
  const rows = [
    [category, videoPath, originVideo, videoSize, brochurePath, originBrochure, brochureSize],
  ];
  let sql = sprintf("INSERT INTO `%s` VALUES ? ON DUPLICATE KEY UPDATE `category` = VALUES(`category`), `video` = VALUES(`video`), `originVideo` = VALUES(`originVideo`), `videoSize` = VALUES(`videoSize`), `brochure` = VALUES(`brochure`), `originBrochure` = VALUES(`originBrochure`), `brochureSize` = VALUES(`brochureSize`);", dbTblName.aboutUs);

  try {
    await db.query(sql, [rows]);
    res.status(200).send({
      result: langs.success,
      message: langs.successfullySaved,
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
router.post('/save', saveProc);

export default router;
