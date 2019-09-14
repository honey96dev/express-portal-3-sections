import express from 'express';
import {sprintf} from 'sprintf-js';
import {dbTblName} from '../../core/config';
import dbConn from '../../core/dbConn';
import strings from '../../core/strings';
import tracer from '../../core/tracer';

const router = express.Router();

const _loadData = (req, res, next) => {
    const language = req.get('language');
    const params = req.body;
    const {category} = params;
    const langs = strings[language];
    let sql = sprintf("SELECT * FROM `%s` WHERE `category` = '%s';", dbTblName.ourServices, category);

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

const listProc = (req, res, next) => {
    _loadData(req, res, next);
};

router.post('/list', listProc);

export default router;
