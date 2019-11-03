import * as _config from './_config';
import * as _configProd from './_config.prod';

let partials = _config;
if (process.env.NODE_ENV === 'production') {
  partials = _configProd;
}

const server = {
  isDev: false,
  port: partials.server.port,
  sslPort: partials.server.sslPort,
  baseUrl: partials.server.baseUrl,
  name: 'Portal - 3 sections',
  description: 'Portal - 3 sections',
  author: 'Zhenlong J.',
  secret: 'portal3sections@@',
  sslKey: './sslcert/server1.key',
  sslCert: './sslcert/1e720c418ffe9875.crt',
  sslCA: './sslcert/gd_bundle-g2-g1.crt',
  environment: process.env.NODE_ENV,
};
const mysql = partials.mysql;
const session = {
  name: 'portal3sections',
  key: 'portal3sections',
  secret: 'portal3sections@@',
  secretAdmin: 'portal3sections_admin@@',
};
const dbTblName = {
  users: 'users',
  admins: 'admins',
  mediaSlider: 'media_slider',
  ourServices: 'our_services',
  businessPartner: 'business_partner',
  contactUs: 'contact_us',
  ourClients: 'our_clients',
  directorBoard: 'director_board',
  events: 'events',
  previousEvents: 'previous_events',
  upcomingEvents: 'upcoming_events',
  humanOurServices: 'human_our_services',
  eventJoin: 'event_join',
  trainingSetting: 'training_setting',
  courses: 'courses',
  courseInstructors: 'course_instructors',
};

const uploadPath = {
  mediaSlider: '/uploads/media-slider',
  ourServices: '/uploads/our-services',
  businessPartner: '/uploads/business-partner',
  ourClients: '/uploads/our-clients',
  directorBoard: '/uploads/director-board',
  previousEvents: '/uploads/previous-events',
  upcomingEvents: '/uploads/upcoming-events',
  courses: '/uploads/courses',
  courseInstructors: '/uploads/course-instructors',
};

export {
  server,
  mysql,
  session,
  dbTblName,
  uploadPath,
}

export default {
  server,
  mysql,
  session,
  dbTblName,
  uploadPath,
}
