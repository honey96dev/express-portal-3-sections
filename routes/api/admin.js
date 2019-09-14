import express from 'express';
import commonRouter from './admin/common';
import authRouter from './admin/auth';
import mediaSliderRouter from './admin/mediaSlider';
import contactUsRouter from './admin/contactUs';
import humanOurServicesRouter from './admin/ourServices';
import businessPartnerRouter from './admin/businessPartner';
import directorBoardRouter from './admin/directorBoard';

const router = express.Router();

router.use('/common', commonRouter);
router.use('/auth', authRouter);
router.use('/media-slider', mediaSliderRouter);
router.use('/contact-us', contactUsRouter);
router.use('/our-services', humanOurServicesRouter);
router.use('/business-partner', businessPartnerRouter);
router.use('/director-board', directorBoardRouter);

export default router;
