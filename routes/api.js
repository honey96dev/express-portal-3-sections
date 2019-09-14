import express from 'express';
import adminRouter from './api/admin';
import contactUsRouter from './api/contactUs';

const router = express.Router();

router.use('/admin', adminRouter);
router.use('/contact-us', contactUsRouter);

export default router;
