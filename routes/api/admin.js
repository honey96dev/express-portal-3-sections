import express from 'express';
import commonRouter from './admin/common';
import authRouter from './admin/auth';
import mediaSliderRouter from './admin/mediaSlider';
import humanOurServicesRouter from './admin/ourServices';

const router = express.Router();

router.use('/common', commonRouter);
router.use('/auth', authRouter);
router.use('/media-slider', mediaSliderRouter);
router.use('/our-services', humanOurServicesRouter);

export default router;
