import express from 'express';
import mediaSliderRouter from './assets-api/mediaSlider';
import ourServicesRouter from './assets-api/ourServices';
import businessPartnerRouter from './assets-api/businessPartner';
import ourClientsRouter from './assets-api/ourClients';
import directorBoardRouter from './assets-api/directorBoard';
import eventsRouter from './assets-api/events';

const router = express.Router();

router.use('/media-slider', mediaSliderRouter);
router.use('/our-services', ourServicesRouter);
router.use('/business-partner', businessPartnerRouter);
router.use('/our-clients', ourClientsRouter);
router.use('/director-board', directorBoardRouter);
router.use('/events', eventsRouter);

export default router;
