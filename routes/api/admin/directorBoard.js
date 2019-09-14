import express from 'express';
import {sprintf} from 'sprintf-js';
import {dbTblName, uploadPath} from '../../../core/config';
import dbConn from '../../../core/dbConn';
import strings from '../../../core/strings';
import tracer from '../../../core/tracer';
import consts from "../../../core/consts";

const router = express.Router();

const _loadData = (req, res, next) => {
    const language = req.get('language');
    const params = req.body;
    const {category} = params;
    const langs = strings[language];
    let sql = sprintf("SELECT * FROM `%s` WHERE `category` = '%s';", dbTblName.directorBoard, category);

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
    const {id, category, name, title, description, media, note, originMedia, mediaSize} = params;
    const langs = strings[language];
    const meidaPath = media.startsWith('/') ? media : `${uploadPath.directorBoard}/${media}`;
    const rows = [
        [id, category, name, title, description, meidaPath, originMedia, mediaSize, note],
    ];
    let sql = sprintf("INSERT INTO `%s` VALUES ? ON DUPLICATE KEY UPDATE `name` = VALUES(`name`), `title` = VALUES(`title`), `description` = VALUES(`description`), `media` = VALUES(`media`), `originMedia` = VALUES(`originMedia`), `mediaSize` = VALUES(`mediaSize`), `note` = VALUES(`note`);", dbTblName.directorBoard);
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
        tracer.log(result);
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
    let sql = sprintf("DELETE FROM `%s` WHERE `id` = '%d';", dbTblName.directorBoard, id);
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
