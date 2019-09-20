import express from 'express';
import adminRouter from './api/admin';
import authRouter from './api/auth';
import contactUsRouter from './api/contactUs';

const router = express.Router();

router.use('/admin', adminRouter);
router.use('/auth', authRouter);
router.use('/contact-us', contactUsRouter);

export default router;
