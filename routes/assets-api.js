import express from 'express';
import mediaSliderRouter from './assets-api/mediaSlider';

const router = express.Router();

router.use('/media-slider', mediaSliderRouter);

export default router;
