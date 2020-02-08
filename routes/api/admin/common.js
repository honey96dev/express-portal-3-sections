import express from 'express';
import {sprintf} from 'sprintf-js';
import uuid from 'uuid';
import path from 'path';
import mkdirp from 'mkdirp';
import strings from 'core/strings';
import tracer from 'core/tracer';

const router = express.Router();

const uploadProc = (req, res, next) => {
  const params = req.params;
  const {dir} = params;
  const language = req.get('language');
  const langs = strings[language];
  const {files} = req;
  if (Object.keys(files).length === 0) {
    tracer.error(JSON.stringify(error));
    tracer.error(__filename);
    return res.status(200).send({
      result: langs.error,
      message: langs.notUploaded,
    });
  }

  const file = files.file;
  const extension = path.extname(file.name);
  const appDir = process.cwd();
  // const appDir = path.dirname(require.main.filename);
  const fileName = sprintf('%s%s', uuid(), extension);
  const fileDir = sprintf('%s/public/uploads/%s', appDir, dir);
  const filePath = sprintf('%s/%s', fileDir, fileName);
  mkdirp(fileDir, () => {
    file.mv(filePath, function (err) {
      if (err) {
        tracer.error(JSON.stringify(err));
        tracer.error(__filename);
        return res.status(200).send({
          result: langs.error,
          message: langs.notUploaded,
        });
      }

      return res.status(200).send({
        result: langs.success,
        message: langs.successfullyUploaded,
        filename: fileName,
        oldFilename: file.name,
      });
    });
  });

};

router.post('/upload/:dir', uploadProc);

export default router;
