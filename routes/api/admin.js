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

export default router;
