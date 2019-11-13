import express from 'express';
import commonRouter from './admin/common';
import authRouter from './admin/auth';
import userMgmt from './admin/userMgmt';
import mediaSliderRouter from './admin/mediaSlider';
import contactUsRouter from './admin/contactUs';
import humanOurServicesRouter from './admin/ourServices';
import businessPartnerRouter from './admin/businessPartner';
import ourClientsRouter from './admin/ourClients';
import directorBoardRouter from './admin/directorBoard';
import eventsRouter from './admin/events';
import coursesRouter from './admin/courses';
import courseInstructorsRouter from './admin/courseInstructors';
import prevSponsorsRouter from './admin/prevSponors';
import trainingRouter from './admin/training';
import massEmailRouter from './admin/massEmail';
import qrScannerRouter from './admin/qrScanner';

const router = express.Router();

router.use('/common', commonRouter);
router.use('/auth', authRouter);
router.use('/user-mgmt', userMgmt);
router.use('/media-slider', mediaSliderRouter);
router.use('/contact-us', contactUsRouter);
router.use('/our-services', humanOurServicesRouter);
router.use('/business-partner', businessPartnerRouter);
router.use('/our-clients', ourClientsRouter);
router.use('/director-board', directorBoardRouter);
router.use('/events', eventsRouter);
router.use('/courses', coursesRouter);
router.use('/course-instructors', courseInstructorsRouter);
router.use('/prev-sponsors', prevSponsorsRouter);
router.use('/training', trainingRouter);
router.use('/mass-email', massEmailRouter);
router.use('/qr-scanner', qrScannerRouter);

export default router;
