import * as _config from './_config';
import * as _configProd from './_config.prod';

let partials = _config;
if (process.env.NODE_ENV === 'production') {
  partials = _configProd;
}

const server = {
  isDev: false,
  port: partials.server.port,
  baseUrl: partials.server.baseUrl,
  name: 'Portal - 3 sections',
  description: 'Portal - 3 sections',
  author: 'Zhenlong J.',
  secret: 'portal3sections@@',
  // sslKey: './sslcert/localhost.key',
  // sslCert: './sslcert/localhost.cert',
  // sslCA: './sslcert/alphasslrootcabundle.crt',
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
  directorBoard: 'director_board',
  humanOurServices: 'human_our_services',
};

const uploadPath = {
  mediaSlider: '/uploads/media-slider',
  ourServices: '/uploads/our-services',
  businessPartner: '/uploads/business-partner',
  directorBoard: '/uploads/director-board',
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
