import express from 'express';
import adminRouter from './api/admin';

const router = express.Router();

router.use('/admin', adminRouter);

export default router;
