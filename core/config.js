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
  sslKey: './sslcert/server.key',
  sslCert: './sslcert/fa1df3893c62f745.crt',
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
  courseJoin: 'course_join',
  prevSponsors: 'prev_sponsors',
  aboutUs: 'about_us',
  eventPhotos: 'event_photos',
  resetPasswordTokens: 'reset_password_tokens',
};

const uploadPath = {
  mediaSlider: '/uploads/media-slider',
  ourServices: '/uploads/our-services',
  businessPartner: '/uploads/business-partner',
  ourClients: '/uploads/our-clients',
  directorBoard: '/uploads/director-board',
  previousEvents: '/uploads/previous-events',
  upcomingEvents: '/uploads/upcoming-events',
  eventPhotos: '/uploads/event-photos',
  courses: '/uploads/courses',
  courseInstructors: '/uploads/course-instructors',
  prevSponsors: '/uploads/prev-sponsors',
  aboutUs: '/uploads/about-us',
};

// const smtp = {
//   service: 'gmail',
//     host: 'smtp.gmail.com',
//     port: 465,
//     // secure: true,
//     user: 'honey96dev@gmail.com',
//     pass: 'skdmlEmail@123456',
// };

const smtp = {
  // service: 'gmail',
  host: 'smtp.office365.com',
  secureConnection: true,
  port: 587,
  // secure: true,
  user: 'pm@eliteresources.co',
  pass: 'Theelite6*',
};

export {
  server,
  mysql,
  session,
  dbTblName,
  uploadPath,
  smtp,
}

export default {
  server,
  mysql,
  session,
  dbTblName,
  uploadPath,
  smtp,
}
