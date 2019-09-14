import express from 'express';
import mediaSliderRouter from './assets-api/mediaSlider';
import ourServicesRouter from './assets-api/ourServices';
import businessPartnerRouter from './assets-api/businessPartner';
import directorBoardRouter from './assets-api/directorBoard';

const router = express.Router();

router.use('/media-slider', mediaSliderRouter);
router.use('/our-services', ourServicesRouter);
router.use('/business-partner', businessPartnerRouter);
router.use('/director-board', directorBoardRouter);

export default router;
