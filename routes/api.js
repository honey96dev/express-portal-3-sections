import express from 'express';
import adminRouter from './api/admin';
import authRouter from './api/auth';
import contactUsRouter from './api/contactUs';
import dateRouter from './api/date';
import trainingRouter from './api/training';
import coursesRouter from './api/courses';

const router = express.Router();

router.use('/admin', adminRouter);
router.use('/auth', authRouter);
router.use('/contact-us', contactUsRouter);
router.use('/date', dateRouter);
router.use('/training', trainingRouter);
router.use('/courses', coursesRouter);

export default router;
