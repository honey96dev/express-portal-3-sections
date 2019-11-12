import express from 'express';
import adminRouter from './api/admin';
import authRouter from './api/auth';
import contactUsRouter from './api/contactUs';
import dateRouter from './api/date';
import mediaSliderRouter from './api/mediaSlider';
import ourServicesRouter from './api/ourServices';
import businessPartnerRouter from './api/businessPartner';
import ourClientsRouter from './api/ourClients';
import directorBoardRouter from './api/directorBoard';
import eventsRouter from './api/events';
import trainingRouter from './api/training';
import coursesRouter from './api/courses';
import prevSponsorsRouter from './api/prevSponsors';
import myaccountRouter from './api/myaccount';

const router = express.Router();

router.use('/admin', adminRouter);
router.use('/auth', authRouter);
router.use('/contact-us', contactUsRouter);
router.use('/date', dateRouter);
router.use('/media-slider', mediaSliderRouter);
router.use('/our-services', ourServicesRouter);
router.use('/business-partner', businessPartnerRouter);
router.use('/our-clients', ourClientsRouter);
router.use('/director-board', directorBoardRouter);
router.use('/events', eventsRouter);
router.use('/training', trainingRouter);
router.use('/courses', coursesRouter);
router.use('/prev-sponsors', prevSponsorsRouter);
router.use('/myaccount', myaccountRouter);

export default router;
