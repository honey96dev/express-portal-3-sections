/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./bin/start-webapp.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var http_errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! http-errors */ \"http-errors\");\n/* harmony import */ var http_errors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(http_errors__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! morgan */ \"morgan\");\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var express_jwt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! express-jwt */ \"express-jwt\");\n/* harmony import */ var express_jwt__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(express_jwt__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! compression */ \"compression\");\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var express_fileupload__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! express-fileupload */ \"express-fileupload\");\n/* harmony import */ var express_fileupload__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(express_fileupload__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _core_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/config */ \"./core/config.js\");\n/* harmony import */ var _routes_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./routes/api */ \"./routes/api.js\");\n/* harmony import */ var _routes_assets_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./routes/assets-api */ \"./routes/assets-api.js\");\n\n\n\n\n\n\n\n\n // import Payments from \"node-payments\";\n\n\n\n\nconst app = express__WEBPACK_IMPORTED_MODULE_1___default()(); // // ========================================================\n// // inject and reuse a existing express\n// const paymentConfig = {\n//   express: app,\n//   paymentStore: new Payments.RedisHashStore()\n// };\n// const pymts = new Payments(paymentConfig);\n// // the event fired for a succesfull provider payment\n// pymts.on( \"approved\", function( res, payment ){\n//   // use the express response object to generate the page after retuning from the providers page\n//   res.send( \"Thank you!\" );\n// });\n//\n// // the event fired for a canceld provider payment\n// pymts.on( \"cancel\", function( res, payment ){\n//   // use the express response object to generate the page after a canceld payments by/within the providers page\n//   res.send( \"What a pity!\" );\n// });\n//\n// // the event fired for a successfull verify by a message service ( e.g. PayPal-IPN or ClickandBuy-MMS ).\n// pymts.on( \"verfied\", function( payment ){\n//   console.log( \"PAYMENT VERIFIED\\\"n\", payment.valueOf() );\n// });\n//\n// // the event on every change of a payment\n// pymts.on( \"payment\", function( type, payment ){\n//   console.log( \"PAYMENT ACTION: \" + type + \"\\n\", payment.valueOf() );\n// });\n//\n// // listen for pay requests ( e.g. \"www.mysite.com/pay/paypal\"\n// app.get( \"/pay/:provider/:cid\", function( req, res ){\n//   // Get thh service provider\n//   pymts.provider( req.params.provider, function( err, provider ){\n//     if( err ){\n//       console.log( err );\n//       res.send( \"ERROR\", 500 );\n//     }\n//\n//     // create a payment instance\n//     var payment = provider.create();\n//\n//     // set some parameters\n//     payment.set({\n//       amount: 41.99,\n//       curreny: \"EUR\",\n//       desc: \"Imperial Star Destroyer\",\n//       // you can define your own attributes\n//       my_custom_id: req.params.cid\n//     });\n//\n//     payment.execute( function( err, link ){\n//       if( err ){\n//         console.log( err );\n//         res.send( \"ERROR\", 500 );\n//       }\n//       // redirect to the providers login page\n//       res.redirect( link );\n//     });\n//   });\n// });\n// // ========================================================\n\nconst cwd = process.cwd(); // view engine setup\n\napp.set('views', path__WEBPACK_IMPORTED_MODULE_2___default.a.join(cwd, 'views'));\napp.set('view engine', 'pug');\napp.use(morgan__WEBPACK_IMPORTED_MODULE_4___default()('dev'));\napp.use(express__WEBPACK_IMPORTED_MODULE_1___default.a.json());\napp.use(express__WEBPACK_IMPORTED_MODULE_1___default.a.urlencoded({\n  extended: false\n}));\napp.use(cookie_parser__WEBPACK_IMPORTED_MODULE_3___default()());\napp.use(cors__WEBPACK_IMPORTED_MODULE_6___default()());\napp.use(compression__WEBPACK_IMPORTED_MODULE_7___default()());\napp.use(express_fileupload__WEBPACK_IMPORTED_MODULE_8___default()({\n  limits: {\n    fileSize: 50 * 1024 * 1024\n  }\n})); // app.use('/api', expressJwt({secret: session.secret})\n//   .unless({\n//     path: [\n//       '/api/auth/sign-in',\n//       '/api/auth/sign-up',\n//       /\\/api\\/admin\\/*/,\n//     ]\n//   }));\n\napp.use('/api/admin', express_jwt__WEBPACK_IMPORTED_MODULE_5___default()({\n  secret: _core_config__WEBPACK_IMPORTED_MODULE_9__[\"session\"].secretAdmin\n}).unless({\n  path: ['/api/admin/auth/sign-in']\n}));\napp.use('/api', _routes_api__WEBPACK_IMPORTED_MODULE_10__[\"default\"]);\napp.use('/assets-api', _routes_assets_api__WEBPACK_IMPORTED_MODULE_11__[\"default\"]);\napp.use('/admin', express__WEBPACK_IMPORTED_MODULE_1___default.a.static(path__WEBPACK_IMPORTED_MODULE_2___default.a.join(cwd, 'admin-frontend')));\napp.get('/admin/*', function (req, res) {\n  res.sendFile(path__WEBPACK_IMPORTED_MODULE_2___default.a.join(cwd, 'admin-frontend/index.html'));\n});\napp.use('/assets', express__WEBPACK_IMPORTED_MODULE_1___default.a.static(path__WEBPACK_IMPORTED_MODULE_2___default.a.join(cwd, 'public')));\napp.use(express__WEBPACK_IMPORTED_MODULE_1___default.a.static(path__WEBPACK_IMPORTED_MODULE_2___default.a.join(cwd, 'frontend')));\napp.get('*', function (req, res) {\n  res.sendFile(path__WEBPACK_IMPORTED_MODULE_2___default.a.join(cwd, 'frontend/index.html'));\n}); // catch 404 and forward to error handler\n\napp.use(function (req, res, next) {\n  next(http_errors__WEBPACK_IMPORTED_MODULE_0___default()(404));\n}); // error handler\n\napp.use(function (err, req, res, next) {\n  // set locals, only providing error in development\n  res.locals.message = err.message;\n  res.locals.error = req.app.get('env') === 'development' ? err : {}; // render the error page\n\n  res.status(err.status || 500);\n  res.render('error');\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (app);\n\n//# sourceURL=webpack:///./app.js?");

/***/ }),

/***/ "./bin/start-webapp.js":
/*!*****************************!*\
  !*** ./bin/start-webapp.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app */ \"./app.js\");\n/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! debug */ \"debug\");\n/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! http */ \"http\");\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var cluster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cluster */ \"cluster\");\n/* harmony import */ var cluster__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cluster__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _core_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/config */ \"./core/config.js\");\n\ndotenv__WEBPACK_IMPORTED_MODULE_0___default.a.config();\n\n\n\n\n\nlet debug;\nlet port;\nlet httpServer;\n\nif (cluster__WEBPACK_IMPORTED_MODULE_4___default.a.isMaster) {\n  cluster__WEBPACK_IMPORTED_MODULE_4___default.a.fork();\n  cluster__WEBPACK_IMPORTED_MODULE_4___default.a.on('exit', function (worker, code, signal) {\n    cluster__WEBPACK_IMPORTED_MODULE_4___default.a.fork();\n  });\n}\n\nif (cluster__WEBPACK_IMPORTED_MODULE_4___default.a.isWorker) {\n  debug = new debug__WEBPACK_IMPORTED_MODULE_2___default.a('express:server');\n  port = normalizePort(_core_config__WEBPACK_IMPORTED_MODULE_5__[\"server\"].port);\n  _app__WEBPACK_IMPORTED_MODULE_1__[\"default\"].set('port', port);\n  httpServer = http__WEBPACK_IMPORTED_MODULE_3___default.a.createServer(_app__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n  httpServer.listen(port);\n  httpServer.on('error', onError);\n  httpServer.on('listening', onListening);\n}\n\nfunction normalizePort(val) {\n  const port = parseInt(val, 10);\n\n  if (isNaN(port)) {\n    // named pipe\n    return val;\n  }\n\n  if (port >= 0) {\n    // port number\n    return port;\n  }\n\n  return false;\n}\n\nfunction onError(error) {\n  if (error.syscall !== 'listen') {\n    throw error;\n  }\n\n  const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port; // handle specific listen errors with friendly messages\n\n  switch (error.code) {\n    case 'EACCES':\n      console.error(bind + ' requires elevated privileges');\n      process.exit(1);\n      break;\n\n    case 'EADDRINUSE':\n      console.error(bind + ' is already in use');\n      process.exit(1);\n      break;\n\n    default:\n      throw error;\n  }\n}\n\nfunction onListening() {\n  const addr = httpServer.address();\n  const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;\n  debug('Listening on ' + bind);\n  console.log('Listening on ' + bind);\n}\n\n//# sourceURL=webpack:///./bin/start-webapp.js?");

/***/ }),

/***/ "./core/_config.js":
/*!*************************!*\
  !*** ./core/_config.js ***!
  \*************************/
/*! exports provided: server, mysql */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"server\", function() { return server; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mysql\", function() { return mysql; });\nconst server = {\n  port: 8080,\n  baseUrl: 'http://127.0.0.1:8080/'\n};\nconst mysql = {\n  connectionLimit: 10,\n  host: '127.0.0.1',\n  user: 'root',\n  password: '',\n  database: 'portal3sections',\n  port: 3306,\n  connectTimeout: 15000\n};\n\n\n//# sourceURL=webpack:///./core/_config.js?");

/***/ }),

/***/ "./core/_config.prod.js":
/*!******************************!*\
  !*** ./core/_config.prod.js ***!
  \******************************/
/*! exports provided: server, mysql */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"server\", function() { return server; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mysql\", function() { return mysql; });\nconst server = {\n  port: 80,\n  baseUrl: 'http://108.160.135.63/'\n};\nconst mysql = {\n  connectionLimit: 10,\n  host: '127.0.0.1',\n  user: 'root',\n  password: '',\n  database: 'portal3sections',\n  port: 3306,\n  connectTimeout: 15000\n};\n\n\n//# sourceURL=webpack:///./core/_config.prod.js?");

/***/ }),

/***/ "./core/config.js":
/*!************************!*\
  !*** ./core/config.js ***!
  \************************/
/*! exports provided: server, mysql, session, dbTblName, uploadPath, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"server\", function() { return server; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mysql\", function() { return mysql; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"session\", function() { return session; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dbTblName\", function() { return dbTblName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"uploadPath\", function() { return uploadPath; });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_config */ \"./core/_config.js\");\n/* harmony import */ var _config_prod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_config.prod */ \"./core/_config.prod.js\");\n\n\nlet partials = _config__WEBPACK_IMPORTED_MODULE_0__;\n\nif (false) {}\n\nconst server = {\n  isDev: false,\n  port: partials.server.port,\n  baseUrl: partials.server.baseUrl,\n  name: 'Portal - 3 sections',\n  description: 'Portal - 3 sections',\n  author: 'Zhenlong J.',\n  secret: 'portal3sections@@',\n  // sslKey: './sslcert/localhost.key',\n  // sslCert: './sslcert/localhost.cert',\n  // sslCA: './sslcert/alphasslrootcabundle.crt',\n  environment: \"development\"\n};\nconst mysql = partials.mysql;\nconst session = {\n  name: 'portal3sections',\n  key: 'portal3sections',\n  secret: 'portal3sections@@',\n  secretAdmin: 'portal3sections_admin@@'\n};\nconst dbTblName = {\n  users: 'users',\n  admins: 'admins',\n  mediaSlider: 'media_slider',\n  ourServices: 'our_services',\n  businessPartner: 'business_partner',\n  contactUs: 'contact_us',\n  ourClients: 'our_clients',\n  directorBoard: 'director_board',\n  events: 'events',\n  previousEvents: 'previous_events',\n  upcomingEvents: 'upcoming_events',\n  humanOurServices: 'human_our_services'\n};\nconst uploadPath = {\n  mediaSlider: '/uploads/media-slider',\n  ourServices: '/uploads/our-services',\n  businessPartner: '/uploads/business-partner',\n  ourClients: '/uploads/our-clients',\n  directorBoard: '/uploads/director-board',\n  previousEvents: '/uploads/previous-events',\n  upcomingEvents: '/uploads/upcoming-events'\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  server,\n  mysql,\n  session,\n  dbTblName,\n  uploadPath\n});\n\n//# sourceURL=webpack:///./core/config.js?");

/***/ }),

/***/ "./core/db.js":
/*!********************!*\
  !*** ./core/db.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dbConn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dbConn */ \"./core/dbConn.js\");\n\nconst db = {};\n\ndb.query = (q, data) => {\n  return new Promise((resolve, reject) => {\n    _dbConn__WEBPACK_IMPORTED_MODULE_0__[\"default\"].query(q, data, (err, res) => {\n      err ? reject(err) : resolve(res);\n    });\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (db);\n\n//# sourceURL=webpack:///./core/db.js?");

/***/ }),

/***/ "./core/dbConn.js":
/*!************************!*\
  !*** ./core/dbConn.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mysql2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql2 */ \"mysql2\");\n/* harmony import */ var mysql2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mysql2__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ \"./core/config.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (mysql2__WEBPACK_IMPORTED_MODULE_0___default.a.createPool(_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mysql));\n\n//# sourceURL=webpack:///./core/dbConn.js?");

/***/ }),

/***/ "./core/i18n/ar.js":
/*!*************************!*\
  !*** ./core/i18n/ar.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  success: 'success',\n  error: 'error',\n  unknownServerError: 'خطأ غير معروف في الخادم',\n  emailAlreadyRegistered: 'عنوان البريد الإلكترونى هذا مسجل بالفعل',\n  usernameAlreadyRegistered: 'وسجلت بالفعل اسم المستخدم هذا',\n  // successfullyRegistered: 'Successfully registered. Please activate your account by validation email.',\n  successfullyRegistered: 'سجلت بنجاح. يرجى محاولة تسجيل الدخول',\n  emailIsIncorrect: 'البريد الالكتروني غير صحيح',\n  usernameIsIncorrect: 'اسم المستخدم غير صحيح',\n  passwordIsIncorrect: 'كلمة المرور غير صحيحة',\n  yourAccountIsNotAllowed: 'حسابك غير مسموح به. يرجى الاتصال المشرف',\n  successfullySignedIn: 'تم تسجيل الدخول بنجاح',\n  successfullySignedOut: 'تم تسجيل الخروج بنجاح',\n  error404: 'لم يتم العثور على',\n  error500: 'خطأ غير معروف في الخادم',\n  successfullySaved: 'حفظ بنجاح',\n  successfullyAdded: 'أضيف بنجاح',\n  successfullyEdited: 'تم التعديل بنجاح',\n  successfullyChanged: 'تغيرت بنجاح',\n  successfullyDeleted: 'تم الحذف بنجاح',\n  successfullyReset: 'إعادة تعيين بنجاح',\n  currentPasswordIncorrect: 'كلمة المرور الحالية غير صحيحة',\n  failedDueToUnknownServerError: 'فشل بسبب خطأ غير معروف في الخادم',\n  invalidParameters: 'معلمات غير صالحة',\n  notUploaded: 'لم يتم الرفع',\n  successfullyUploaded: 'تم الرفع بنجاح',\n  successfullyPosted: 'تم النشر بنجاح'\n});\n\n//# sourceURL=webpack:///./core/i18n/ar.js?");

/***/ }),

/***/ "./core/i18n/en.js":
/*!*************************!*\
  !*** ./core/i18n/en.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  success: 'success',\n  error: 'error',\n  unknownServerError: 'Unknown server error',\n  emailAlreadyRegistered: 'This email is already registered.',\n  usernameAlreadyRegistered: 'This username is already registered.',\n  // successfullyRegistered: 'Successfully registered. Please activate your account by validation email.',\n  successfullyRegistered: 'Successfully registered. Please try to sign in.',\n  emailIsIncorrect: 'Email is incorrect',\n  usernameIsIncorrect: 'Username is incorrect',\n  passwordIsIncorrect: 'Password is incorrect',\n  yourAccountIsNotAllowed: 'Your account is not allowed. Please contact admin',\n  successfullySignedIn: 'Successfully signed in',\n  successfullySignedOut: 'Successfully signed out',\n  error404: 'Not Fount',\n  error500: 'Unknown server error',\n  successfullySaved: 'Successfully saved',\n  successfullyAdded: 'Successfully added',\n  successfullyEdited: 'Successfully edited',\n  successfullyChanged: 'Successfully changed',\n  successfullyDeleted: 'Successfully Deleted',\n  successfullyReset: 'Successfully Reset',\n  currentPasswordIncorrect: 'Current password is incorrect',\n  failedDueToUnknownServerError: 'Failed due to unknown server error',\n  invalidParameters: 'Invalid Parameters',\n  notUploaded: 'Not uploaded',\n  successfullyUploaded: 'Successfully uploaded',\n  successfullyPosted: 'Successfully posted'\n});\n\n//# sourceURL=webpack:///./core/i18n/en.js?");

/***/ }),

/***/ "./core/myCrypto.js":
/*!**************************!*\
  !*** ./core/myCrypto.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ \"./core/config.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  hmacHex: plain => {\n    const cipher = crypto__WEBPACK_IMPORTED_MODULE_0___default.a.createHmac('sha256', _config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].server.secret).update(plain).digest('hex'); // console.log('signMessage', plain, cipher);\n\n    return cipher;\n  }\n});\n\n//# sourceURL=webpack:///./core/myCrypto.js?");

/***/ }),

/***/ "./core/strings.js":
/*!*************************!*\
  !*** ./core/strings.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _i18n_en__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./i18n/en */ \"./core/i18n/en.js\");\n/* harmony import */ var _i18n_ar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./i18n/ar */ \"./core/i18n/ar.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  en: _i18n_en__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  ar: _i18n_ar__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n});\n\n//# sourceURL=webpack:///./core/strings.js?");

/***/ }),

/***/ "./core/tracer.js":
/*!************************!*\
  !*** ./core/tracer.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var tracer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tracer */ \"tracer\");\n/* harmony import */ var tracer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tracer__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (tracer__WEBPACK_IMPORTED_MODULE_0___default.a.colorConsole());\n\n//# sourceURL=webpack:///./core/tracer.js?");

/***/ }),

/***/ "./routes/api.js":
/*!***********************!*\
  !*** ./routes/api.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api_admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/admin */ \"./routes/api/admin.js\");\n/* harmony import */ var _api_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/auth */ \"./routes/api/auth.js\");\n/* harmony import */ var _api_contactUs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api/contactUs */ \"./routes/api/contactUs.js\");\n\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\nrouter.use('/admin', _api_admin__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nrouter.use('/auth', _api_auth__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nrouter.use('/contact-us', _api_contactUs__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./routes/api.js?");

/***/ }),

/***/ "./routes/api/admin.js":
/*!*****************************!*\
  !*** ./routes/api/admin.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _admin_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin/common */ \"./routes/api/admin/common.js\");\n/* harmony import */ var _admin_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin/auth */ \"./routes/api/admin/auth.js\");\n/* harmony import */ var _admin_userMgmt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin/userMgmt */ \"./routes/api/admin/userMgmt.js\");\n/* harmony import */ var _admin_mediaSlider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin/mediaSlider */ \"./routes/api/admin/mediaSlider.js\");\n/* harmony import */ var _admin_contactUs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin/contactUs */ \"./routes/api/admin/contactUs.js\");\n/* harmony import */ var _admin_ourServices__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin/ourServices */ \"./routes/api/admin/ourServices.js\");\n/* harmony import */ var _admin_businessPartner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin/businessPartner */ \"./routes/api/admin/businessPartner.js\");\n/* harmony import */ var _admin_ourClients__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin/ourClients */ \"./routes/api/admin/ourClients.js\");\n/* harmony import */ var _admin_directorBoard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin/directorBoard */ \"./routes/api/admin/directorBoard.js\");\n/* harmony import */ var _admin_events__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin/events */ \"./routes/api/admin/events.js\");\n\n\n\n\n\n\n\n\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\nrouter.use('/common', _admin_common__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nrouter.use('/auth', _admin_auth__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nrouter.use('/user-mgmt', _admin_userMgmt__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\nrouter.use('/media-slider', _admin_mediaSlider__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\nrouter.use('/contact-us', _admin_contactUs__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\nrouter.use('/our-services', _admin_ourServices__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\nrouter.use('/business-partner', _admin_businessPartner__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\nrouter.use('/our-clients', _admin_ourClients__WEBPACK_IMPORTED_MODULE_8__[\"default\"]);\nrouter.use('/director-board', _admin_directorBoard__WEBPACK_IMPORTED_MODULE_9__[\"default\"]);\nrouter.use('/events', _admin_events__WEBPACK_IMPORTED_MODULE_10__[\"default\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./routes/api/admin.js?");

/***/ }),

/***/ "./routes/api/admin/auth.js":
/*!**********************************!*\
  !*** ./routes/api/admin/auth.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var sprintf_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sprintf-js */ \"sprintf-js\");\n/* harmony import */ var sprintf_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sprintf_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _core_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/config */ \"./core/config.js\");\n/* harmony import */ var _core_db__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/db */ \"./core/db.js\");\n/* harmony import */ var _core_myCrypto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/myCrypto */ \"./core/myCrypto.js\");\n/* harmony import */ var _core_strings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/strings */ \"./core/strings.js\");\n/* harmony import */ var _core_tracer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/tracer */ \"./core/tracer.js\");\n\n\n\n\n\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\n\nconst signInProc = async (req, res, next) => {\n  const params = req.body;\n  const language = req.get('language');\n  const langs = _core_strings__WEBPACK_IMPORTED_MODULE_6__[\"default\"][language];\n  const {\n    username,\n    password\n  } = params;\n  let sql = Object(sprintf_js__WEBPACK_IMPORTED_MODULE_2__[\"sprintf\"])(\"SELECT `email` FROM `%s` WHERE BINARY `username` = '%s';\", _core_config__WEBPACK_IMPORTED_MODULE_3__[\"dbTblName\"].admins, username); // dbConn.query(sql, null, (error, rows, fields) =>  {\n  //   if (error) {\n  //     tracer.error(JSON.stringify(error));\n  //     tracer.error(__filename);\n  //     res.status(200).send({\n  //       result: langs.error,\n  //       message: langs.unknownServerError,\n  //     });\n  //     return;\n  //   }\n  //   if (rows.length === 0) {\n  //     res.status(200).send({\n  //       result: langs.error,\n  //       message: langs.usernameIsIncorrect,\n  //     });\n  //     return;\n  //   }\n  //\n  //   const hash = myCrypto.hmacHex(password);\n  //   sql = sprintf(\"SELECT U.* FROM `%s` U WHERE BINARY U.username = '%s' AND BINARY U.hash = '%s';\", dbTblName.admins, username, hash);\n  //   // console.log(sql, hash);\n  //   dbConn.query(sql, null, (error, rows, fields) => {\n  //     if (error) {\n  //       tracer.error(JSON.stringify(error));\n  //       tracer.error(__filename);\n  //       res.status(200).send({\n  //         result: langs.error,\n  //         message: langs.unknownServerError,\n  //       });\n  //       return;\n  //     }\n  //\n  //     if (rows.length === 0) {\n  //       res.status(200).send({\n  //         result: langs.error,\n  //         message: langs.passwordIsIncorrect,\n  //       });\n  //       return;\n  //     }\n  //\n  //     let data = rows[0];\n  //     data['token'] = jwt.sign({sub: data['id'],}, session.secretAdmin);\n  //     res.status(200).send({\n  //       result: langs.success,\n  //       message: langs.successfullySignedIn,\n  //       data,\n  //     });\n  //   });\n  // });\n\n  try {\n    let rows = await _core_db__WEBPACK_IMPORTED_MODULE_4__[\"default\"].query(sql, null);\n\n    if (rows.length === 0) {\n      res.status(200).send({\n        result: langs.error,\n        message: langs.usernameIsIncorrect\n      });\n      return;\n    }\n\n    const hash = _core_myCrypto__WEBPACK_IMPORTED_MODULE_5__[\"default\"].hmacHex(password);\n    sql = Object(sprintf_js__WEBPACK_IMPORTED_MODULE_2__[\"sprintf\"])(\"SELECT U.* FROM `%s` U WHERE BINARY U.username = '%s' AND BINARY U.hash = '%s';\", _core_config__WEBPACK_IMPORTED_MODULE_3__[\"dbTblName\"].admins, username, hash); // console.log(sql, hash);\n\n    rows = await _core_db__WEBPACK_IMPORTED_MODULE_4__[\"default\"].query(sql, null);\n\n    if (rows.length === 0) {\n      res.status(200).send({\n        result: langs.error,\n        message: langs.passwordIsIncorrect\n      });\n      return;\n    }\n\n    let data = rows[0];\n    data['token'] = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default.a.sign({\n      sub: data['id']\n    }, _core_config__WEBPACK_IMPORTED_MODULE_3__[\"session\"].secretAdmin);\n    res.status(200).send({\n      result: langs.success,\n      message: langs.successfullySignedIn,\n      data\n    });\n  } catch (err) {\n    _core_tracer__WEBPACK_IMPORTED_MODULE_7__[\"default\"].error(JSON.stringify(err));\n    _core_tracer__WEBPACK_IMPORTED_MODULE_7__[\"default\"].error(__filename);\n    res.status(200).send({\n      result: langs.error,\n      message: langs.unknownServerError,\n      err\n    });\n  }\n};\n\nrouter.post('/sign-in', signInProc);\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./routes/api/admin/auth.js?");

/***/ }),

/***/ "./routes/api/admin/businessPartner.js":
/*!*********************************************!*\
  !*** ./routes/api/admin/businessPartner.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var sprintf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sprintf-js */ \"sprintf-js\");\n/* harmony import */ var sprintf_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sprintf_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _core_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/config */ \"./core/config.js\");\n/* harmony import */ var _core_db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/db */ \"./core/db.js\");\n/* harmony import */ var _core_strings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/strings */ \"./core/strings.js\");\n/* harmony import */ var _core_tracer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/tracer */ \"./core/tracer.js\");\n\n\n\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\n\nconst _loadData = async (req, res, next) => {\n  const language = req.get('language');\n  const params = req.body;\n  const {\n    category\n  } = params;\n  const langs = _core_strings__WEBPACK_IMPORTED_MODULE_4__[\"default\"][language];\n  let sql = Object(sprintf_js__WEBPACK_IMPORTED_MODULE_1__[\"sprintf\"])(\"SELECT * FROM `%s` WHERE `category` = '%s';\", _core_config__WEBPACK_IMPORTED_MODULE_2__[\"dbTblName\"].businessPartner, category); // dbConn.query(sql, null, (error, rows, fields) => {\n  //   if (error) {\n  //     tracer.error(JSON.stringify(error));\n  //     tracer.error(__filename);\n  //     res.status(200).send({\n  //       result: langs.error,\n  //       message: langs.unknownServerError,\n  //     });\n  //     return;\n  //   }\n  //\n  //   res.status(200).send({\n  //     result: langs.success,\n  //     data: rows,\n  //   });\n  // });\n\n  try {\n    let rows = await _core_db__WEBPACK_IMPORTED_MODULE_3__[\"default\"].query(sql, null);\n    res.status(200).send({\n      result: langs.success,\n      data: rows\n    });\n  } catch (err) {\n    _core_tracer__WEBPACK_IMPORTED_MODULE_5__[\"default\"].error(JSON.stringify(err));\n    _core_tracer__WEBPACK_IMPORTED_MODULE_5__[\"default\"].error(__filename);\n    res.status(200).send({\n      result: langs.error,\n      message: langs.unknownServerError\n    });\n  }\n};\n\nconst _saveData = async (req, res, next, mode) => {\n  const language = req.get('language');\n  const params = req.body;\n  const {\n    id,\n    category,\n    nameEn,\n    nameAr,\n    titleEn,\n    titleAr,\n    descriptionEn,\n    descriptionAr,\n    media,\n    originMedia,\n    mediaSize,\n    note,\n    social1,\n    social2,\n    social3\n  } = params;\n  const langs = _core_strings__WEBPACK_IMPORTED_MODULE_4__[\"default\"][language];\n  const meidaPath = media.startsWith('/') ? media : `${_core_config__WEBPACK_IMPORTED_MODULE_2__[\"uploadPath\"].businessPartner}/${media}`;\n  const rows = [[id, category, nameEn, nameAr, titleEn, titleAr, descriptionEn, descriptionAr, meidaPath, originMedia, mediaSize, social1, social2, social3, note]];\n  let sql = Object(sprintf_js__WEBPACK_IMPORTED_MODULE_1__[\"sprintf\"])(\"INSERT INTO `%s` VALUES ? ON DUPLICATE KEY UPDATE `nameEn` = VALUES(`nameEn`), `nameAr` = VALUES(`nameAr`), `titleEn` = VALUES(`titleEn`), `titleAr` = VALUES(`titleAr`), `descriptionEn` = VALUES(`descriptionEn`), `descriptionAr` = VALUES(`descriptionAr`), `media` = VALUES(`media`), `originMedia` = VALUES(`originMedia`), `mediaSize` = VALUES(`mediaSize`), `social1` = VALUES(`social1`), `social2` = VALUES(`social2`), `social3` = VALUES(`social3`), `note` = VALUES(`note`);\", _core_config__WEBPACK_IMPORTED_MODULE_2__[\"dbTblName\"].businessPartner); // dbConn.query(sql, [rows], (error, result, fields) => {\n  //   if (error) {\n  //     tracer.error(JSON.stringify(error));\n  //     tracer.error(__filename);\n  //     res.status(200).send({\n  //       result: langs.error,\n  //       message: langs.unknownServerError,\n  //     });\n  //     return;\n  //   }\n  //   res.status(200).send({\n  //     result: langs.success,\n  //     message: !!id ? langs.successfullyEdited : langs.successfullyAdded,\n  //     data: {\n  //       insertId: !!id ? id : result['insertId'],\n  //     }\n  //   });\n  // });\n\n  try {\n    let result = await _core_db__WEBPACK_IMPORTED_MODULE_3__[\"default\"].query(sql, [rows]);\n    res.status(200).send({\n      result: langs.success,\n      message: !!id ? langs.successfullyEdited : langs.successfullyAdded,\n      data: {\n        insertId: !!id ? id : result['insertId']\n      }\n    });\n  } catch (err) {\n    _core_tracer__WEBPACK_IMPORTED_MODULE_5__[\"default\"].error(JSON.stringify(err));\n    _core_tracer__WEBPACK_IMPORTED_MODULE_5__[\"default\"].error(__filename);\n    res.status(200).send({\n      result: langs.error,\n      message: langs.unknownServerError\n    });\n  }\n};\n\nconst listProc = (req, res, next) => {\n  _loadData(req, res, next);\n};\n\nconst addProc = (req, res, next) => {\n  _saveData(req, res, next, 'add');\n};\n\nconst editProc = (req, res, next) => {\n  _saveData(req, res, next, 'edit');\n};\n\nconst deleteProc = async (req, res, next) => {\n  const language = req.get('language');\n  const params = req.body;\n  const {\n    id\n  } = params;\n  const langs = _core_strings__WEBPACK_IMPORTED_MODULE_4__[\"default\"][language];\n  let sql = Object(sprintf_js__WEBPACK_IMPORTED_MODULE_1__[\"sprintf\"])(\"DELETE FROM `%s` WHERE `id` = '%d';\", _core_config__WEBPACK_IMPORTED_MODULE_2__[\"dbTblName\"].businessPartner, id); // dbConn.query(sql, null, (error, result, fields) => {\n  //   if (error) {\n  //     tracer.error(JSON.stringify(error));\n  //     tracer.error(__filename);\n  //     res.status(200).send({\n  //       result: langs.error,\n  //       message: langs.unknownServerError,\n  //     });\n  //     return;\n  //   }\n  //\n  //   _loadData(req, res, next);\n  // });\n\n  try {\n    await _core_db__WEBPACK_IMPORTED_MODULE_3__[\"default\"].query(sql, null);\n\n    _loadData(req, res, next);\n  } catch (err) {\n    _core_tracer__WEBPACK_IMPORTED_MODULE_5__[\"default\"].error(JSON.stringify(err));\n    _core_tracer__WEBPACK_IMPORTED_MODULE_5__[\"default\"].error(__filename);\n    res.status(200).send({\n      result: langs.error,\n      message: langs.unknownServerError\n    });\n  }\n};\n\nrouter.post('/list', listProc); // router.post('/add', addProc);\n\nrouter.post('/edit', editProc);\nrouter.post('/delete', deleteProc);\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./routes/api/admin/businessPartner.js?");

/***/ }),

/***/ "./routes/api/admin/common.js":
/*!************************************!*\
  !*** ./routes/api/admin/common.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var sprintf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sprintf-js */ \"sprintf-js\");\n/* harmony import */ var sprintf_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sprintf_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ \"uuid\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var mkdirp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mkdirp */ \"mkdirp\");\n/* harmony import */ var mkdirp__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mkdirp__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _core_strings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/strings */ \"./core/strings.js\");\n/* harmony import */ var _core_tracer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/tracer */ \"./core/tracer.js\");\n\n\n\n\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\n\nconst uploadProc = (req, res, next) => {\n  const params = req.params;\n  const {\n    dir\n  } = params;\n  const language = req.get('language');\n  const langs = _core_strings__WEBPACK_IMPORTED_MODULE_5__[\"default\"][language];\n  const {\n    files\n  } = req;\n\n  if (Object.keys(files).length == 0) {\n    _core_tracer__WEBPACK_IMPORTED_MODULE_6__[\"default\"].error(JSON.stringify(error));\n    _core_tracer__WEBPACK_IMPORTED_MODULE_6__[\"default\"].error(__filename);\n    return res.status(200).send({\n      result: langs.error,\n      message: langs.notUploaded\n    });\n  }\n\n  const file = files.file;\n  const extension = path__WEBPACK_IMPORTED_MODULE_3___default.a.extname(file.name);\n  const appDir = process.cwd(); // const appDir = path.dirname(require.main.filename);\n\n  const fileName = Object(sprintf_js__WEBPACK_IMPORTED_MODULE_1__[\"sprintf\"])('%s%s', uuid__WEBPACK_IMPORTED_MODULE_2___default()(), extension);\n  const fileDir = Object(sprintf_js__WEBPACK_IMPORTED_MODULE_1__[\"sprintf\"])('%s/public/uploads/%s', appDir, dir);\n  const filePath = Object(sprintf_js__WEBPACK_IMPORTED_MODULE_1__[\"sprintf\"])('%s/%s', fileDir, fileName);\n  mkdirp__WEBPACK_IMPORTED_MODULE_4___default()(fileDir, () => {\n    file.mv(filePath, function (err) {\n      if (err) {\n        _core_tracer__WEBPACK_IMPORTED_MODULE_6__[\"default\"].error(JSON.stringify(err));\n        _core_tracer__WEBPACK_IMPORTED_MODULE_6__[\"default\"].error(__filename);\n        return res.status(200).send({\n          result: langs.error,\n          message: langs.notUploaded\n        });\n      }\n\n      return res.status(200).send({\n        result: langs.success,\n        message: langs.successfullyUploaded,\n        filename: fileName,\n        oldFilename: file.name\n      });\n    });\n  });\n};\n\nrouter.post('/upload/:dir', uploadProc);\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./routes/api/admin/common.js?");

/***/ }),

/***/ "./routes/api/admin/contactUs.js":
/*!***************************************!*\
  !*** ./routes/api/admin/contactUs.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var sprintf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sprintf-js */ \"sprintf-js\");\n/* harmony import */ var sprintf_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sprintf_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _core_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/config */ \"./core/config.js\");\n/* harmony import */ var _core_strings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/strings */ \"./core/strings.js\");\n/* harmony import */ var _core_tracer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/tracer */ \"./core/tracer.js\");\n/* harmony import */ var _core_db__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/db */ \"./core/db.js\");\n\n\n\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\n\nconst _loadData = async (req, res, next) => {\n  const language = req.get('language');\n  const params = req.body;\n  const {\n    category\n  } = params;\n  const langs = _core_strings__WEBPACK_IMPORTED_MODULE_3__[\"default\"][language];\n  let sql = Object(sprintf_js__WEBPACK_IMPORTED_MODULE_1__[\"sprintf\"])(\"SELECT * FROM `%s` WHERE `category` = '%s' ORDER BY `timestamp` DESC;\", _core_config__WEBPACK_IMPORTED_MODULE_2__[\"dbTblName\"].contactUs, category); // dbConn.query(sql, null, (error, rows, fields) => {\n  //   if (error) {\n  //     tracer.error(JSON.stringify(error));\n  //     tracer.error(__filename);\n  //     res.status(200).send({\n  //       result: langs.error,\n  //       message: langs.unknownServerError,\n  //     });\n  //     return;\n  //   }\n  //\n  //   res.status(200).send({\n  //     result: langs.success,\n  //     data: rows,\n  //   });\n  // });\n\n  try {\n    let rows = await _core_db__WEBPACK_IMPORTED_MODULE_5__[\"default\"].query(sql, null);\n    res.status(200).send({\n      result: langs.success,\n      data: rows\n    });\n  } catch (err) {\n    _core_tracer__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(JSON.stringify(err));\n    _core_tracer__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(__filename);\n    res.status(200).send({\n      result: langs.error,\n      message: langs.unknownServerError\n    });\n  }\n};\n\nconst listProc = (req, res, next) => {\n  _loadData(req, res, next);\n};\n\nconst deleteProc = async (req, res, next) => {\n  const language = req.get('language');\n  const params = req.body;\n  const {\n    id\n  } = params;\n  const langs = _core_strings__WEBPACK_IMPORTED_MODULE_3__[\"default\"][language];\n  let sql = Object(sprintf_js__WEBPACK_IMPORTED_MODULE_1__[\"sprintf\"])(\"DELETE FROM `%s` WHERE `id` = '%d';\", _core_config__WEBPACK_IMPORTED_MODULE_2__[\"dbTblName\"].contactUs, id); // dbConn.query(sql, null, (error, result, fields) => {\n  //   if (error) {\n  //     tracer.error(JSON.stringify(error));\n  //     tracer.error(__filename);\n  //     res.status(200).send({\n  //       result: langs.error,\n  //       message: langs.unknownServerError,\n  //     });\n  //     return;\n  //   }\n  //\n  //   _loadData(req, res, next);\n  // });\n\n  try {\n    await _core_db__WEBPACK_IMPORTED_MODULE_5__[\"default\"].query(sql, null);\n\n    _loadData(req, res, next);\n  } catch (err) {\n    _core_tracer__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(JSON.stringify(err));\n    _core_tracer__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(__filename);\n    res.status(200).send({\n      result: langs.error,\n      message: langs.unknownServerError\n    });\n  }\n};\n\nrouter.post('/list', listProc);\nrouter.post('/delete', deleteProc);\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./routes/api/admin/contactUs.js?");

/***/ }),

/***/ "./routes/api/admin/directorBoard.js":
/*!*******************************************!*\
  !*** ./routes/api/admin/directorBoard.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var sprintf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sprintf-js */ \"sprintf-js\");\n/* harmony import */ var sprintf_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sprintf_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _core_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/config */ \"./core/config.js\");\n/* harmony import */ var _core_strings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/strings */ \"./core/strings.js\");\n/* harmony import */ var _core_tracer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/tracer */ \"./core/tracer.js\");\n/* harmony import */ var _core_db__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/db */ \"./core/db.js\");\n\n\n\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\n\nconst _loadData = async (req, res, next) => {\n  const language = req.get('language');\n  const params = req.body;\n  const {\n    category\n  } = params;\n  const langs = _core_strings__WEBPACK_IMPORTED_MODULE_3__[\"default\"][language];\n  let sql = Object(sprintf_js__WEBPACK_IMPORTED_MODULE_1__[\"sprintf\"])(\"SELECT * FROM `%s`;\", _core_config__WEBPACK_IMPORTED_MODULE_2__[\"dbTblName\"].directorBoard); // let sql = sprintf(\"SELECT * FROM `%s` WHERE `category` = '%s';\", dbTblName.directorBoard, category);\n  // dbConn.query(sql, null, (error, rows, fields) => {\n  //   if (error) {\n  //     tracer.error(JSON.stringify(error));\n  //     tracer.error(__filename);\n  //     res.status(200).send({\n  //       result: langs.error,\n  //       message: langs.unknownServerError,\n  //     });\n  //     return;\n  //   }\n  //\n  //   res.status(200).send({\n  //     result: langs.success,\n  //     data: rows,\n  //   });\n  // });\n\n  try {\n    let rows = await _core_db__WEBPACK_IMPORTED_MODULE_5__[\"default\"].query(sql, null);\n    res.status(200).send({\n      result: langs.success,\n      data: rows\n    });\n  } catch (err) {\n    _core_tracer__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(JSON.stringify(err));\n    _core_tracer__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(__filename);\n    res.status(200).send({\n      result: langs.error,\n      message: langs.unknownServerError\n    });\n  }\n};\n\nconst _saveData = async (req, res, next, mode) => {\n  const language = req.get('language');\n  const params = req.body;\n  const {\n    id,\n    category,\n    nameEn,\n    nameAr,\n    titleEn,\n    titleAr,\n    descriptionEn,\n    descriptionAr,\n    media,\n    originMedia,\n    mediaSize,\n    note\n  } = params;\n  const langs = _core_strings__WEBPACK_IMPORTED_MODULE_3__[\"default\"][language];\n  const meidaPath = media.startsWith('/') ? media : `${_core_config__WEBPACK_IMPORTED_MODULE_2__[\"uploadPath\"].directorBoard}/${media}`;\n  const rows = [[id, category, nameEn, nameAr, titleEn, titleAr, descriptionEn, descriptionAr, meidaPath, originMedia, mediaSize, note]];\n  let sql = Object(sprintf_js__WEBPACK_IMPORTED_MODULE_1__[\"sprintf\"])(\"INSERT INTO `%s` VALUES ? ON DUPLICATE KEY UPDATE `nameEn` = VALUES(`nameEn`), `nameAr` = VALUES(`nameAr`), `titleEn` = VALUES(`titleEn`), `titleAr` = VALUES(`titleAr`), `descriptionEn` = VALUES(`descriptionEn`), `descriptionAr` = VALUES(`descriptionAr`), `media` = VALUES(`media`), `originMedia` = VALUES(`originMedia`), `mediaSize` = VALUES(`mediaSize`), `note` = VALUES(`note`);\", _core_config__WEBPACK_IMPORTED_MODULE_2__[\"dbTblName\"].directorBoard); // dbConn.query(sql, [rows], (error, result, fields) => {\n  //   if (error) {\n  //     tracer.error(JSON.stringify(error));\n  //     tracer.error(__filename);\n  //     res.status(200).send({\n  //       result: langs.error,\n  //       message: langs.unknownServerError,\n  //     });\n  //     return;\n  //   }\n  //   res.status(200).send({\n  //     result: langs.success,\n  //     message: !!id ? langs.successfullyEdited : langs.successfullyAdded,\n  //     data: {\n  //       insertId: !!id ? id : result['insertId'],\n  //     }\n  //   });\n  // });\n\n  try {\n    let result = await _core_db__WEBPACK_IMPORTED_MODULE_5__[\"default\"].query(sql, [rows]);\n    res.status(200).send({\n      result: langs.success,\n      message: !!id ? langs.successfullyEdited : langs.successfullyAdded,\n      data: {\n        insertId: !!id ? id : result['insertId']\n      }\n    });\n  } catch (err) {\n    _core_tracer__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(JSON.stringify(err));\n    _core_tracer__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(__filename);\n    res.status(200).send({\n      result: langs.error,\n      message: langs.unknownServerError\n    });\n  }\n};\n\nconst listProc = (req, res, next) => {\n  _loadData(req, res, next);\n};\n\nconst addProc = (req, res, next) => {\n  _saveData(req, res, next, 'add');\n};\n\nconst editProc = (req, res, next) => {\n  _saveData(req, res, next, 'edit');\n};\n\nconst deleteProc = async (req, res, next) => {\n  const language = req.get('language');\n  const params = req.body;\n  const {\n    id\n  } = params;\n  const langs = _core_strings__WEBPACK_IMPORTED_MODULE_3__[\"default\"][language];\n  let sql = Object(sprintf_js__WEBPACK_IMPORTED_MODULE_1__[\"sprintf\"])(\"DELETE FROM `%s` WHERE `id` = '%d';\", _core_config__WEBPACK_IMPORTED_MODULE_2__[\"dbTblName\"].directorBoard, id); // dbConn.query(sql, null, (error, result, fields) => {\n  //   if (error) {\n  //     tracer.error(JSON.stringify(error));\n  //     tracer.error(__filename);\n  //     res.status(200).send({\n  //       result: langs.error,\n  //       message: langs.unknownServerError,\n  //     });\n  //     return;\n  //   }\n  //\n  //   _loadData(req, res, next);\n  // });\n\n  try {\n    await _core_db__WEBPACK_IMPORTED_MODULE_5__[\"default\"].query(sql, null);\n\n    _loadData(req, res, next);\n  } catch (err) {\n    _core_tracer__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(JSON.stringify(err));\n    _core_tracer__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(__filename);\n    res.status(200).send({\n      result: langs.error,\n      message: langs.unknownServerError\n    });\n  }\n};\n\nrouter.post('/list', listProc); // router.post('/add', addProc);\n\nrouter.post('/edit', editProc);\nrouter.post('/delete', deleteProc);\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./routes/api/admin/directorBoard.js?");

/***/ }),

/***/ "./routes/api/admin/events.js":
/*!************************************!*\
  !*** ./routes/api/admin/events.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var sprintf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sprintf-js */ \"sprintf-js\");\n/* harmony import */ var sprintf_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sprintf_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _core_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/config */ \"./core/config.js\");\n/* harmony import */ var _core_strings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/strings */ \"./core/strings.js\");\n/* harmony import */ var _core_tracer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/tracer */ \"./core/tracer.js\");\n/* harmony import */ var _core_db__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/db */ \"./core/db.js\");\n\n\n\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\n\nconst _loadData = async (req, res, next) => {\n  const language = req.get('language');\n  const params = req.body;\n  const {\n    scope,\n    category,\n    limit\n  } = params;\n  const langs = _core_strings__WEBPACK_IMPORTED_MODULE_3__[\"default\"][language];\n  let sql = Object(sprintf_js__WEBPACK_IMPORTED_MODULE_1__[\"sprintf\"])(\"SELECT * FROM `%s_%s` WHERE `category` = '%s' ORDER BY `timestamp` %s;\", scope, _core_config__WEBPACK_IMPORTED_MODULE_2__[\"dbTblName\"].events, category, scope === 'previous' ? 'DESC' : 'ASC'); // dbConn.query(sql, null, (error, rows, fields) => {\n  //   if (error) {\n  //     tracer.error(JSON.stringify(error));\n  //     tracer.error(__filename);\n  //     res.status(200).send({\n  //       result: langs.error,\n  //       message: langs.unknownServerError,\n  //     });\n  //     return;\n  //   }\n  //\n  //   res.status(200).send({\n  //     result: langs.success,\n  //     data: rows,\n  //   });\n  // });\n\n  try {\n    let rows = await _core_db__WEBPACK_IMPORTED_MODULE_5__[\"default\"].query(sql, null);\n    res.status(200).send({\n      result: langs.success,\n      data: rows\n    });\n  } catch (err) {\n    _core_tracer__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(JSON.stringify(err));\n    _core_tracer__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(__filename);\n    res.status(200).send({\n      result: langs.error,\n      message: langs.unknownServerError\n    });\n  }\n};\n\nconst _saveData = async (req, res, next, mode) => {\n  const language = req.get('language');\n  const params = req.body;\n  const {\n    scope,\n    id,\n    category,\n    typeEn,\n    typeAr,\n    nameEn,\n    nameAr,\n    timestamp,\n    titleEn,\n    titleAr,\n    descriptionEn,\n    descriptionAr,\n    media,\n    originMedia,\n    mediaSize,\n    note\n  } = params;\n  const langs = _core_strings__WEBPACK_IMPORTED_MODULE_3__[\"default\"][language];\n  const meidaPath = media.startsWith('/') ? media : `${_core_config__WEBPACK_IMPORTED_MODULE_2__[\"uploadPath\"].previousEvents}/${media}`;\n  const rows = [[id, category, typeEn, typeAr, nameEn, nameAr, timestamp, titleEn, titleAr, descriptionEn, descriptionAr, meidaPath, originMedia, mediaSize, note]];\n  let sql = Object(sprintf_js__WEBPACK_IMPORTED_MODULE_1__[\"sprintf\"])(\"INSERT INTO `%s_%s` VALUES ? ON DUPLICATE KEY UPDATE `typeEn` = VALUES(`typeEn`), `typeAr` = VALUES(`typeAr`), `nameEn` = VALUES(`nameEn`), `nameAr` = VALUES(`nameAr`), `timestamp` = VALUES(`timestamp`), `titleEn` = VALUES(`titleEn`), `titleAr` = VALUES(`titleAr`), `descriptionEn` = VALUES(`descriptionEn`), `descriptionAr` = VALUES(`descriptionAr`), `media` = VALUES(`media`), `originMedia` = VALUES(`originMedia`), `mediaSize` = VALUES(`mediaSize`), `note` = VALUES(`note`);\", scope, _core_config__WEBPACK_IMPORTED_MODULE_2__[\"dbTblName\"].events); // dbConn.query(sql, [rows], (error, result, fields) => {\n  //   if (error) {\n  //     tracer.error(JSON.stringify(error));\n  //     tracer.error(__filename);\n  //     res.status(200).send({\n  //       result: langs.error,\n  //       message: langs.unknownServerError,\n  //     });\n  //     return;\n  //   }\n  //   res.status(200).send({\n  //     result: langs.success,\n  //     message: !!id ? langs.successfullyEdited : langs.successfullyAdded,\n  //     data: {\n  //       insertId: !!id ? id : result['insertId'],\n  //     }\n  //   });\n  // });\n\n  try {\n    let result = await _core_db__WEBPACK_IMPORTED_MODULE_5__[\"default\"].query(sql, [rows]);\n    res.status(200).send({\n      result: langs.success,\n      message: !!id ? langs.successfullyEdited : langs.successfullyAdded,\n      data: {\n        insertId: !!id ? id : result['insertId']\n      }\n    });\n  } catch (err) {\n    _core_tracer__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(JSON.stringify(err));\n    _core_tracer__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(__filename);\n    res.status(200).send({\n      result: langs.error,\n      message: langs.unknownServerError\n    });\n  }\n};\n\nconst listProc = (req, res, next) => {\n  _loadData(req, res, next);\n};\n\nconst addProc = (req, res, next) => {\n  _saveData(req, res, next, 'add');\n};\n\nconst editProc = (req, res, next) => {\n  _saveData(req, res, next, 'edit');\n};\n\nconst deleteProc = async (req, res, next) => {\n  const language = req.get('language');\n  const params = req.body;\n  const {\n    scope,\n    id\n  } = params;\n  const langs = _core_strings__WEBPACK_IMPORTED_MODULE_3__[\"default\"][language];\n  let sql = Object(sprintf_js__WEBPACK_IMPORTED_MODULE_1__[\"sprintf\"])(\"DELETE FROM `%s_%s` WHERE `id` = '%d';\", scope, _core_config__WEBPACK_IMPORTED_MODULE_2__[\"dbTblName\"].events, id); // dbConn.query(sql, null, (error, result, fields) => {\n  //   if (error) {\n  //     tracer.error(JSON.stringify(error));\n  //     tracer.error(__filename);\n  //     res.status(200).send({\n  //       result: langs.error,\n  //       message: langs.unknownServerError,\n  //     });\n  //     return;\n  //   }\n  //\n  //   _loadData(req, res, next);\n  // });\n\n  try {\n    await _core_db__WEBPACK_IMPORTED_MODULE_5__[\"default\"].query(sql, null);\n\n    _loadData(req, res, next);\n  } catch (err) {\n    _core_tracer__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(JSON.stringify(err));\n    _core_tracer__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(__filename);\n    res.status(200).send({\n      result: langs.error,\n      message: langs.unknownServerError\n    });\n  }\n};\n\nrouter.post('/list', listProc); // router.post('/add', addProc);\n\nrouter.post('/edit', editProc);\nrouter.post('/delete', deleteProc);\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./routes/api/admin/events.js?");

/***/ }),

/***/ "./routes/api/admin/mediaSlider.js":
/*!*****************************************!*\
  !*** ./routes/api/admin/mediaSlider.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var sprintf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sprintf-js */ \"sprintf-js\");\n/* harmony import */ var sprintf_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sprintf_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _core_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/config */ \"./core/config.js\");\n/* harmony import */ var _core_db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/db */ \"./core/db.js\");\n/* harmony import */ var _core_strings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/strings */ \"./core/strings.js\");\n/* harmony import */ var _core_tracer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/tracer */ \"./core/tracer.js\");\n\n\n\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\n\nconst _loadData = async (req, res, next) => {\n  const language = req.get('language');\n  const params = req.body;\n  const {\n    category\n  } = params;\n  const langs = _core_strings__WEBPACK_IMPORTED_MODULE_4__[\"default\"][language];\n  let sql = Object(sprintf_js__WEBPACK_IMPORTED_MODULE_1__[\"sprintf\"])(\"SELECT * FROM `%s` WHERE `category` = '%s';\", _core_config__WEBPACK_IMPORTED_MODULE_2__[\"dbTblName\"].mediaSlider, category); // dbConn.query(sql, null, (error, rows, fields) => {\n  //   if (error) {\n  //     tracer.error(JSON.stringify(error));\n  //     tracer.error(__filename);\n  //     res.status(200).send({\n  //       result: langs.error,\n  //       message: langs.unknownServerError,\n  //     });\n  //     return;\n  //   }\n  //\n  //   res.status(200).send({\n  //     result: langs.success,\n  //     data: rows,\n  //   });\n  // });\n\n  try {\n    let rows = await _core_db__WEBPACK_IMPORTED_MODULE_3__[\"default\"].query(sql, null);\n    res.status(200).send({\n      result: langs.success,\n      data: rows\n    });\n  } catch (err) {\n    _core_tracer__WEBPACK_IMPORTED_MODULE_5__[\"default\"].error(JSON.stringify(err));\n    _core_tracer__WEBPACK_IMPORTED_MODULE_5__[\"default\"].error(__filename);\n    res.status(200).send({\n      result: langs.error,\n      message: langs.unknownServerError\n    });\n  }\n};\n\nconst _saveData = async (req, res, next, mode) => {\n  const language = req.get('language');\n  const params = req.body;\n  const {\n    id,\n    category,\n    nameEn,\n    nameAr,\n    titleEn,\n    titleAr,\n    descriptionEn,\n    descriptionAr,\n    media,\n    originMedia,\n    mediaSize,\n    note\n  } = params;\n  const langs = _core_strings__WEBPACK_IMPORTED_MODULE_4__[\"default\"][language];\n  const meidaPath = media.startsWith('/') ? media : `${_core_config__WEBPACK_IMPORTED_MODULE_2__[\"uploadPath\"].mediaSlider}/${media}`;\n  const rows = [[id, category, nameEn, nameAr, titleEn, titleAr, descriptionEn, descriptionAr, meidaPath, originMedia, mediaSize, note]];\n  let sql = Object(sprintf_js__WEBPACK_IMPORTED_MODULE_1__[\"sprintf\"])(\"INSERT INTO `%s` VALUES ? ON DUPLICATE KEY UPDATE `nameEn` = VALUES(`nameEn`), `nameAr` = VALUES(`nameAr`), `titleEn` = VALUES(`titleEn`), `titleAr` = VALUES(`titleAr`), `descriptionEn` = VALUES(`descriptionEn`), `descriptionAr` = VALUES(`descriptionAr`), `media` = VALUES(`media`), `originMedia` = VALUES(`originMedia`), `mediaSize` = VALUES(`mediaSize`), `note` = VALUES(`note`);\", _core_config__WEBPACK_IMPORTED_MODULE_2__[\"dbTblName\"].mediaSlider); // dbConn.query(sql, [rows], (error, result, fields) => {\n  //   if (error) {\n  //     tracer.error(JSON.stringify(error));\n  //     tracer.error(__filename);\n  //     res.status(200).send({\n  //       result: langs.error,\n  //       message: langs.unknownServerError,\n  //     });\n  //     return;\n  //   }\n  //   res.status(200).send({\n  //     result: langs.success,\n  //     message: !!id ? langs.successfullyEdited : langs.successfullyAdded,\n  //     data: {\n  //       insertId: !!id ? id : result['insertId'],\n  //     }\n  //   });\n  // });\n\n  try {\n    let result = await _core_db__WEBPACK_IMPORTED_MODULE_3__[\"default\"].query(sql, [rows]);\n    res.status(200).send({\n      result: langs.success,\n      message: !!id ? langs.successfullyEdited : langs.successfullyAdded,\n      data: {\n        insertId: !!id ? id : result['insertId']\n      }\n    });\n  } catch (err) {\n    _core_tracer__WEBPACK_IMPORTED_MODULE_5__[\"default\"].error(JSON.stringify(err));\n    _core_tracer__WEBPACK_IMPORTED_MODULE_5__[\"default\"].error(__filename);\n    res.status(200).send({\n      result: langs.error,\n      message: langs.unknownServerError\n    });\n  }\n};\n\nconst listProc = (req, res, next) => {\n  _loadData(req, res, next);\n};\n\nconst addProc = (req, res, next) => {\n  _saveData(req, res, next, 'add');\n};\n\nconst editProc = (req, res, next) => {\n  _saveData(req, res, next, 'edit');\n};\n\nconst deleteProc = async (req, res, next) => {\n  const language = req.get('language');\n  const params = req.body;\n  const {\n    id\n  } = params;\n  const langs = _core_strings__WEBPACK_IMPORTED_MODULE_4__[\"default\"][language];\n  let sql = Object(sprintf_js__WEBPACK_IMPORTED_MODULE_1__[\"sprintf\"])(\"DELETE FROM `%s` WHERE `id` = '%d';\", _core_config__WEBPACK_IMPORTED_MODULE_2__[\"dbTblName\"].mediaSlider, id); // dbConn.query(sql, null, (error, result, fields) => {\n  //   if (error) {\n  //     tracer.error(JSON.stringify(error));\n  //     tracer.error(__filename);\n  //     res.status(200).send({\n  //       result: langs.error,\n  //       message: langs.unknownServerError,\n  //     });\n  //     return;\n  //   }\n  //\n  //   _loadData(req, res, next);\n  // });\n\n  try {\n    await _core_db__WEBPACK_IMPORTED_MODULE_3__[\"default\"].query(sql, null);\n\n    _loadData(req, res, next);\n  } catch (err) {\n    _core_tracer__WEBPACK_IMPORTED_MODULE_5__[\"default\"].error(JSON.stringify(err));\n    _core_tracer__WEBPACK_IMPORTED_MODULE_5__[\"default\"].error(__filename);\n    res.status(200).send({\n      result: langs.error,\n      message: langs.unknownServerError\n    });\n  }\n};\n\nrouter.post('/list', listProc); // router.post('/add', addProc);\n\nrouter.post('/edit', editProc);\nrouter.post('/delete', deleteProc);\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./routes/api/admin/mediaSlider.js?");

/***/ }),

/***/ "./routes/api/admin/ourClients.js":
/*!****************************************!*\
  !*** ./routes/api/admin/ourClients.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var sprintf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sprintf-js */ \"sprintf-js\");\n/* harmony import */ var sprintf_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sprintf_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _core_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/config */ \"./core/config.js\");\n/* harmony import */ var _core_strings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/strings */ \"./core/strings.js\");\n/* harmony import */ var _core_tracer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/tracer */ \"./core/tracer.js\");\n/* harmony import */ var _core_db__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/db */ \"./core/db.js\");\n\n\n\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\n\nconst _loadData = async (req, res, next) => {\n  const language = req.get('language');\n  const params = req.body;\n  const {\n    category\n  } = params;\n  const langs = _core_strings__WEBPACK_IMPORTED_MODULE_3__[\"default\"][language];\n  let sql = Object(sprintf_js__WEBPACK_IMPORTED_MODULE_1__[\"sprintf\"])(\"SELECT * FROM `%s` WHERE `category` = '%s';\", _core_config__WEBPACK_IMPORTED_MODULE_2__[\"dbTblName\"].ourClients, category); // dbConn.query(sql, null, (error, rows, fields) => {\n  //   if (error) {\n  //     tracer.error(JSON.stringify(error));\n  //     tracer.error(__filename);\n  //     res.status(200).send({\n  //       result: langs.error,\n  //       message: langs.unknownServerError,\n  //     });\n  //     return;\n  //   }\n  //\n  //   res.status(200).send({\n  //     result: langs.success,\n  //     data: rows,\n  //   });\n  // });\n\n  try {\n    let rows = await _core_db__WEBPACK_IMPORTED_MODULE_5__[\"default\"].query(sql, null);\n    res.status(200).send({\n      result: langs.success,\n      data: rows\n    });\n  } catch (err) {\n    _core_tracer__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(JSON.stringify(err));\n    _core_tracer__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(__filename);\n    res.status(200).send({\n      result: langs.error,\n      message: langs.unknownServerError\n    });\n  }\n};\n\nconst _saveData = async (req, res, next, mode) => {\n  const language = req.get('language');\n  const params = req.body;\n  const {\n    id,\n    category,\n    timestamp,\n    nameEn,\n    nameAr,\n    photo,\n    photoOriginMedia,\n    photoMediaSize,\n    stars,\n    title,\n    feedbackEn,\n    feedbackAr,\n    files,\n    filesOriginMedia,\n    filesMediaSize,\n    note\n  } = params;\n  const langs = _core_strings__WEBPACK_IMPORTED_MODULE_3__[\"default\"][language];\n  const photoMediaPath = photo.startsWith('/') ? photo : `${_core_config__WEBPACK_IMPORTED_MODULE_2__[\"uploadPath\"].ourClients}/${photo}`;\n  const rows = [[id, category, timestamp, nameEn, nameAr, photoMediaPath, photoOriginMedia, photoMediaSize, stars, title, feedbackEn, feedbackAr, files, filesOriginMedia, filesMediaSize, note]];\n  let sql = Object(sprintf_js__WEBPACK_IMPORTED_MODULE_1__[\"sprintf\"])(\"INSERT INTO `%s` VALUES ? ON DUPLICATE KEY UPDATE `timestamp` = VALUES(`timestamp`), `nameEn` = VALUES(`nameEn`), `nameAr` = VALUES(`nameAr`), `photo` = VALUES(`photo`), `photoOriginMedia` = VALUES(`photoOriginMedia`), `photoMediaSize` = VALUES(`photoMediaSize`), `stars` = VALUES(`stars`), `title` = VALUES(`title`), `feedbackEn` = VALUES(`feedbackEn`), `feedbackAr` = VALUES(`feedbackAr`), `files` = VALUES(`files`), `filesOriginMedia` = VALUES(`filesOriginMedia`), `filesMediaSize` = VALUES(`filesMediaSize`), `note` = VALUES(`note`);\", _core_config__WEBPACK_IMPORTED_MODULE_2__[\"dbTblName\"].ourClients); // dbConn.query(sql, [rows], (error, result, fields) => {\n  //   if (error) {\n  //     tracer.error(JSON.stringify(error));\n  //     tracer.error(__filename);\n  //     res.status(200).send({\n  //       result: langs.error,\n  //       message: langs.unknownServerError,\n  //     });\n  //     return;\n  //   }\n  //   res.status(200).send({\n  //     result: langs.success,\n  //     message: !!id ? langs.successfullyEdited : langs.successfullyAdded,\n  //     data: {\n  //       insertId: !!id ? id : result['insertId'],\n  //     }\n  //   });\n  // });\n\n  try {\n    let result = await _core_db__WEBPACK_IMPORTED_MODULE_5__[\"default\"].query(sql, [rows]);\n    res.status(200).send({\n      result: langs.success,\n      message: !!id ? langs.successfullyEdited : langs.successfullyAdded,\n      data: {\n        insertId: !!id ? id : result['insertId']\n      }\n    });\n  } catch (err) {\n    _core_tracer__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(JSON.stringify(err));\n    _core_tracer__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(__filename);\n    res.status(200).send({\n      result: langs.error,\n      message: langs.unknownServerError\n    });\n  }\n};\n\nconst listProc = (req, res, next) => {\n  _loadData(req, res, next);\n};\n\nconst addProc = (req, res, next) => {\n  _saveData(req, res, next, 'add');\n};\n\nconst editProc = (req, res, next) => {\n  _saveData(req, res, next, 'edit');\n};\n\nconst deleteProc = async (req, res, next) => {\n  const language = req.get('language');\n  const params = req.body;\n  const {\n    id\n  } = params;\n  const langs = _core_strings__WEBPACK_IMPORTED_MODULE_3__[\"default\"][language];\n  let sql = Object(sprintf_js__WEBPACK_IMPORTED_MODULE_1__[\"sprintf\"])(\"DELETE FROM `%s` WHERE `id` = '%d';\", _core_config__WEBPACK_IMPORTED_MODULE_2__[\"dbTblName\"].ourClients, id); // dbConn.query(sql, null, (error, result, fields) => {\n  //   if (error) {\n  //     tracer.error(JSON.stringify(error));\n  //     tracer.error(__filename);\n  //     res.status(200).send({\n  //       result: langs.error,\n  //       message: langs.unknownServerError,\n  //     });\n  //     return;\n  //   }\n  //\n  //   _loadData(req, res, next);\n  // });\n\n  try {\n    await _core_db__WEBPACK_IMPORTED_MODULE_5__[\"default\"].query(sql, null);\n\n    _loadData(req, res, next);\n  } catch (err) {\n    _core_tracer__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(JSON.stringify(err));\n    _core_tracer__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(__filename);\n    res.status(200).send({\n      result: langs.error,\n      message: langs.unknownServerError\n    });\n  }\n};\n\nrouter.post('/list', listProc); // router.post('/add', addProc);\n\nrouter.post('/edit', editProc);\nrouter.post('/delete', deleteProc);\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./routes/api/admin/ourClients.js?");

/***/ }),

/***/ "./routes/api/admin/ourServices.js":
/*!*****************************************!*\
  !*** ./routes/api/admin/ourServices.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var sprintf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sprintf-js */ \"sprintf-js\");\n/* harmony import */ var sprintf_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sprintf_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _core_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/config */ \"./core/config.js\");\n/* harmony import */ var _core_strings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/strings */ \"./core/strings.js\");\n/* harmony import */ var _core_tracer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/tracer */ \"./core/tracer.js\");\n/* harmony import */ var _core_db__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/db */ \"./core/db.js\");\n\n\n\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\n\nconst _loadData = async (req, res, next) => {\n  const language = req.get('language');\n  const params = req.body;\n  const {\n    category\n  } = params;\n  const langs = _core_strings__WEBPACK_IMPORTED_MODULE_3__[\"default\"][language];\n  let sql = Object(sprintf_js__WEBPACK_IMPORTED_MODULE_1__[\"sprintf\"])(\"SELECT * FROM `%s` WHERE `category` = '%s';\", _core_config__WEBPACK_IMPORTED_MODULE_2__[\"dbTblName\"].ourServices, category); // dbConn.query(sql, null, (error, rows, fields) => {\n  //   if (error) {\n  //     tracer.error(JSON.stringify(error));\n  //     tracer.error(__filename);\n  //     res.status(200).send({\n  //       result: langs.error,\n  //       message: langs.unknownServerError,\n  //     });\n  //     return;\n  //   }\n  //\n  //   res.status(200).send({\n  //     result: langs.success,\n  //     data: rows,\n  //   });\n  // });\n\n  try {\n    let rows = await _core_db__WEBPACK_IMPORTED_MODULE_5__[\"default\"].query(sql, null);\n    res.status(200).send({\n      result: langs.success,\n      data: rows\n    });\n  } catch (err) {\n    _core_tracer__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(JSON.stringify(err));\n    _core_tracer__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(__filename);\n    res.status(200).send({\n      result: langs.error,\n      message: langs.unknownServerError\n    });\n  }\n};\n\nconst _saveData = async (req, res, next, mode) => {\n  const language = req.get('language');\n  const params = req.body;\n  const {\n    id,\n    category,\n    nameEn,\n    nameAr,\n    titleEn,\n    titleAr,\n    descriptionEn,\n    descriptionAr,\n    media,\n    originMedia,\n    mediaSize,\n    note\n  } = params;\n  const langs = _core_strings__WEBPACK_IMPORTED_MODULE_3__[\"default\"][language];\n  const meidaPath = media.startsWith('/') ? media : `${_core_config__WEBPACK_IMPORTED_MODULE_2__[\"uploadPath\"].ourServices}/${media}`;\n  const rows = [[id, category, nameEn, nameAr, titleEn, titleAr, descriptionEn, descriptionAr, meidaPath, originMedia, mediaSize, note]];\n  let sql = Object(sprintf_js__WEBPACK_IMPORTED_MODULE_1__[\"sprintf\"])(\"INSERT INTO `%s` VALUES ? ON DUPLICATE KEY UPDATE `nameEn` = VALUES(`nameEn`), `nameAr` = VALUES(`nameAr`), `titleEn` = VALUES(`titleEn`), `titleAr` = VALUES(`titleAr`), `descriptionEn` = VALUES(`descriptionEn`), `descriptionAr` = VALUES(`descriptionAr`), `media` = VALUES(`media`), `originMedia` = VALUES(`originMedia`), `mediaSize` = VALUES(`mediaSize`), `note` = VALUES(`note`);\", _core_config__WEBPACK_IMPORTED_MODULE_2__[\"dbTblName\"].ourServices); // dbConn.query(sql, [rows], (error, result, fields) => {\n  //   if (error) {\n  //     tracer.error(JSON.stringify(error));\n  //     tracer.error(__filename);\n  //     res.status(200).send({\n  //       result: langs.error,\n  //       message: langs.unknownServerError,\n  //     });\n  //     return;\n  //   }\n  //   res.status(200).send({\n  //     result: langs.success,\n  //     message: !!id ? langs.successfullyEdited : langs.successfullyAdded,\n  //     data: {\n  //       insertId: !!id ? id : result['insertId'],\n  //     }\n  //   });\n  // });\n\n  try {\n    let result = await _core_db__WEBPACK_IMPORTED_MODULE_5__[\"default\"].query(sql, [rows]);\n    res.status(200).send({\n      result: langs.success,\n      message: !!id ? langs.successfullyEdited : langs.successfullyAdded,\n      data: {\n        insertId: !!id ? id : result['insertId']\n      }\n    });\n  } catch (err) {\n    _core_tracer__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(JSON.stringify(err));\n    _core_tracer__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(__filename);\n    res.status(200).send({\n      result: langs.error,\n      message: langs.unknownServerError\n    });\n  }\n};\n\nconst listProc = (req, res, next) => {\n  _loadData(req, res, next);\n};\n\nconst addProc = (req, res, next) => {\n  _saveData(req, res, next, 'add');\n};\n\nconst editProc = (req, res, next) => {\n  _saveData(req, res, next, 'edit');\n};\n\nconst deleteProc = async (req, res, next) => {\n  const language = req.get('language');\n  const params = req.body;\n  const {\n    id\n  } = params;\n  const langs = _core_strings__WEBPACK_IMPORTED_MODULE_3__[\"default\"][language];\n  let sql = Object(sprintf_js__WEBPACK_IMPORTED_MODULE_1__[\"sprintf\"])(\"DELETE FROM `%s` WHERE `id` = '%d';\", _core_config__WEBPACK_IMPORTED_MODULE_2__[\"dbTblName\"].ourServices, id); // dbConn.query(sql, null, (error, result, fields) => {\n  //   if (error) {\n  //     tracer.error(JSON.stringify(error));\n  //     tracer.error(__filename);\n  //     res.status(200).send({\n  //       result: langs.error,\n  //       message: langs.unknownServerError,\n  //     });\n  //     return;\n  //   }\n  //\n  //   _loadData(req, res, next);\n  // });\n\n  try {\n    await _core_db__WEBPACK_IMPORTED_MODULE_5__[\"default\"].query(sql, null);\n\n    _loadData(req, res, next);\n  } catch (err) {\n    _core_tracer__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(JSON.stringify(err));\n    _core_tracer__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(__filename);\n    res.status(200).send({\n      result: langs.error,\n      message: langs.unknownServerError\n    });\n  }\n};\n\nrouter.post('/list', listProc); // router.post('/add', addProc);\n\nrouter.post('/edit', editProc);\nrouter.post('/delete', deleteProc);\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./routes/api/admin/ourServices.js?");

/***/ }),

/***/ "./routes/api/admin/userMgmt.js":
/*!**************************************!*\
  !*** ./routes/api/admin/userMgmt.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var sprintf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sprintf-js */ \"sprintf-js\");\n/* harmony import */ var sprintf_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sprintf_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _core_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/config */ \"./core/config.js\");\n/* harmony import */ var _core_db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/db */ \"./core/db.js\");\n/* harmony import */ var _core_strings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/strings */ \"./core/strings.js\");\n/* harmony import */ var _core_tracer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/tracer */ \"./core/tracer.js\");\n/* harmony import */ var _core_myCrypto__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/myCrypto */ \"./core/myCrypto.js\");\n\n\n\n\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\n\nconst _loadData = async (req, res, next) => {\n  const language = req.get('language');\n  const params = req.body;\n  const langs = _core_strings__WEBPACK_IMPORTED_MODULE_4__[\"default\"][language];\n  let sql = Object(sprintf_js__WEBPACK_IMPORTED_MODULE_1__[\"sprintf\"])(\"SELECT * FROM `%s`;\", _core_config__WEBPACK_IMPORTED_MODULE_2__[\"dbTblName\"].users);\n\n  try {\n    let rows = await _core_db__WEBPACK_IMPORTED_MODULE_3__[\"default\"].query(sql, null);\n    res.status(200).send({\n      result: langs.success,\n      data: rows\n    });\n  } catch (err) {\n    _core_tracer__WEBPACK_IMPORTED_MODULE_5__[\"default\"].error(JSON.stringify(err));\n    _core_tracer__WEBPACK_IMPORTED_MODULE_5__[\"default\"].error(__filename);\n    res.status(200).send({\n      result: langs.error,\n      message: langs.unknownServerError\n    });\n  }\n};\n\nconst _saveData = async (req, res, next, mode) => {\n  const language = req.get('language');\n  const langs = _core_strings__WEBPACK_IMPORTED_MODULE_4__[\"default\"][language];\n  const params = req.body;\n  const {\n    id,\n    email,\n    firstName,\n    lastName,\n    password,\n    position,\n    country,\n    city,\n    phone,\n    allow\n  } = params;\n  const hash = _core_myCrypto__WEBPACK_IMPORTED_MODULE_6__[\"default\"].hmacHex(password ? password : '');\n  const rows = [[id, email, firstName, lastName, hash, position, country, city, phone, allow]];\n  let sql = Object(sprintf_js__WEBPACK_IMPORTED_MODULE_1__[\"sprintf\"])(\"INSERT INTO `%s` VALUES ? ON DUPLICATE KEY UPDATE `email` = VALUES(`email`), `firstName` = VALUES(`firstName`), `lastName` = VALUES(`lastName`), `position` = VALUES(`position`), `country` = VALUES(`country`), `phone` = VALUES(`phone`);\", _core_config__WEBPACK_IMPORTED_MODULE_2__[\"dbTblName\"].users);\n\n  try {\n    let result = await _core_db__WEBPACK_IMPORTED_MODULE_3__[\"default\"].query(sql, [rows]);\n    res.status(200).send({\n      result: langs.success,\n      message: !!id ? langs.successfullyEdited : langs.successfullyAdded,\n      data: {\n        insertId: !!id ? id : result['insertId']\n      }\n    });\n  } catch (err) {\n    _core_tracer__WEBPACK_IMPORTED_MODULE_5__[\"default\"].error(JSON.stringify(err));\n    _core_tracer__WEBPACK_IMPORTED_MODULE_5__[\"default\"].error(__filename);\n    res.status(200).send({\n      result: langs.error,\n      message: langs.unknownServerError\n    });\n  }\n};\n\nconst listProc = (req, res, next) => {\n  _loadData(req, res, next);\n};\n\nconst addProc = (req, res, next) => {\n  _saveData(req, res, next, 'add');\n};\n\nconst editProc = (req, res, next) => {\n  _saveData(req, res, next, 'edit');\n};\n\nconst deleteProc = async (req, res, next) => {\n  const language = req.get('language');\n  const params = req.body;\n  const {\n    id\n  } = params;\n  const langs = _core_strings__WEBPACK_IMPORTED_MODULE_4__[\"default\"][language];\n  let sql = Object(sprintf_js__WEBPACK_IMPORTED_MODULE_1__[\"sprintf\"])(\"DELETE FROM `%s` WHERE `id` = '%d';\", _core_config__WEBPACK_IMPORTED_MODULE_2__[\"dbTblName\"].users, id);\n\n  try {\n    await _core_db__WEBPACK_IMPORTED_MODULE_3__[\"default\"].query(sql, null);\n\n    _loadData(req, res, next);\n  } catch (err) {\n    _core_tracer__WEBPACK_IMPORTED_MODULE_5__[\"default\"].error(JSON.stringify(err));\n    _core_tracer__WEBPACK_IMPORTED_MODULE_5__[\"default\"].error(__filename);\n    res.status(200).send({\n      result: langs.error,\n      message: langs.unknownServerError\n    });\n  }\n};\n\nconst allowProc = async (req, res, next) => {\n  const language = req.get('language');\n  const langs = _core_strings__WEBPACK_IMPORTED_MODULE_4__[\"default\"][language];\n  const {\n    body: {\n      id,\n      newAllow\n    }\n  } = req;\n  let sql = Object(sprintf_js__WEBPACK_IMPORTED_MODULE_1__[\"sprintf\"])(\"UPDATE `%s` SET `allow` = '%d' WHERE `id` = '%d';\", _core_config__WEBPACK_IMPORTED_MODULE_2__[\"dbTblName\"].users, newAllow, id);\n\n  try {\n    await _core_db__WEBPACK_IMPORTED_MODULE_3__[\"default\"].query(sql, null);\n\n    _loadData(req, res, next);\n  } catch (err) {\n    _core_tracer__WEBPACK_IMPORTED_MODULE_5__[\"default\"].error(JSON.stringify(err));\n    _core_tracer__WEBPACK_IMPORTED_MODULE_5__[\"default\"].error(__filename);\n    res.status(200).send({\n      result: langs.error,\n      message: langs.unknownServerError\n    });\n  }\n};\n\nconst resetPasswordProc = async (req, res, next) => {\n  const language = req.get('language');\n  const langs = _core_strings__WEBPACK_IMPORTED_MODULE_4__[\"default\"][language];\n  const {\n    body: {\n      id\n    }\n  } = req;\n  const newPassword = '1234567890';\n  const hash = _core_myCrypto__WEBPACK_IMPORTED_MODULE_6__[\"default\"].hmacHex(newPassword);\n  let sql = Object(sprintf_js__WEBPACK_IMPORTED_MODULE_1__[\"sprintf\"])(\"UPDATE `%s` SET `hash` = '%s' WHERE `id` = '%d';\", _core_config__WEBPACK_IMPORTED_MODULE_2__[\"dbTblName\"].users, hash, id);\n\n  try {\n    await _core_db__WEBPACK_IMPORTED_MODULE_3__[\"default\"].query(sql, null);\n    res.status(200).send({\n      result: langs.success,\n      message: langs.successfullyReset\n    });\n  } catch (err) {\n    _core_tracer__WEBPACK_IMPORTED_MODULE_5__[\"default\"].error(JSON.stringify(err));\n    _core_tracer__WEBPACK_IMPORTED_MODULE_5__[\"default\"].error(__filename);\n    res.status(200).send({\n      result: langs.error,\n      message: langs.unknownServerError\n    });\n  }\n};\n\nrouter.post('/list', listProc); // router.post('/add', addProc);\n\nrouter.post('/edit', editProc);\nrouter.post('/delete', deleteProc);\nrouter.post('/allow', allowProc);\nrouter.post('/reset-password', resetPasswordProc);\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./routes/api/admin/userMgmt.js?");

/***/ }),

/***/ "./routes/api/auth.js":
/*!****************************!*\
  !*** ./routes/api/auth.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var sprintf_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sprintf-js */ \"sprintf-js\");\n/* harmony import */ var sprintf_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sprintf_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _core_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/config */ \"./core/config.js\");\n/* harmony import */ var _core_db__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/db */ \"./core/db.js\");\n/* harmony import */ var _core_myCrypto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/myCrypto */ \"./core/myCrypto.js\");\n/* harmony import */ var _core_strings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/strings */ \"./core/strings.js\");\n/* harmony import */ var _core_tracer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/tracer */ \"./core/tracer.js\");\n\n\n\n\n\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\n\nconst signInProc = async (req, res, next) => {\n  const params = req.body;\n  const language = req.get('language');\n  const langs = _core_strings__WEBPACK_IMPORTED_MODULE_6__[\"default\"][language];\n  const {\n    email,\n    password\n  } = params;\n  let sql = Object(sprintf_js__WEBPACK_IMPORTED_MODULE_2__[\"sprintf\"])(\"SELECT `email` FROM `%s` WHERE BINARY `email` = '%s';\", _core_config__WEBPACK_IMPORTED_MODULE_3__[\"dbTblName\"].users, email); // dbConn.query(sql, null, (error, rows, fields) => {\n  //   if (error) {\n  //     tracer.error(JSON.stringify(error));\n  //     tracer.error(__filename);\n  //     res.status(200).send({\n  //       result: langs.error,\n  //       message: langs.unknownServerError,\n  //     });\n  //     return;\n  //   }\n  //   if (rows.length === 0) {\n  //     res.status(200).send({\n  //       result: langs.error,\n  //       message: langs.emailIsIncorrect,\n  //     });\n  //     return;\n  //   }\n  //\n  //   const hash = myCrypto.hmacHex(password);\n  //   sql = sprintf(\"SELECT U.* FROM `%s` U WHERE BINARY U.email = '%s' AND BINARY U.hash = '%s';\", dbTblName.users, email, hash);\n  //   // console.log(sql, hash);\n  //   dbConn.query(sql, null, (error, rows, fields) => {\n  //     if (error) {\n  //       tracer.error(JSON.stringify(error));\n  //       tracer.error(__filename);\n  //       res.status(200).send({\n  //         result: langs.error,\n  //         message: langs.unknownServerError,\n  //       });\n  //       return;\n  //     }\n  //\n  //     if (rows.length === 0) {\n  //       res.status(200).send({\n  //         result: langs.error,\n  //         message: langs.passwordIsIncorrect,\n  //       });\n  //       return;\n  //     }\n  //\n  //     let data = rows[0];\n  //     if (data['allow'] === 0) {\n  //       res.status(200).send({\n  //         result: langs.error,\n  //         message: langs.yourAccountIsNotAllowed,\n  //       });\n  //       return;\n  //     }\n  //     data['token'] = jwt.sign(\n  //       {\n  //         id: data['id'],\n  //         email: data['email'],\n  //         firstName: data['firstName'],\n  //         lastName: data['lastName'],\n  //       },\n  //       session.secret\n  //     );\n  //     res.status(200).send({\n  //       result: langs.success,\n  //       message: langs.successfullySignedIn,\n  //       data,\n  //     });\n  //   });\n  // });\n\n  try {\n    let rows = await _core_db__WEBPACK_IMPORTED_MODULE_4__[\"default\"].query(sql, null);\n\n    if (rows.length === 0) {\n      res.status(200).send({\n        result: langs.error,\n        message: langs.emailIsIncorrect\n      });\n      return;\n    }\n\n    const hash = _core_myCrypto__WEBPACK_IMPORTED_MODULE_5__[\"default\"].hmacHex(password);\n    sql = Object(sprintf_js__WEBPACK_IMPORTED_MODULE_2__[\"sprintf\"])(\"SELECT U.* FROM `%s` U WHERE BINARY U.email = '%s' AND BINARY U.hash = '%s';\", _core_config__WEBPACK_IMPORTED_MODULE_3__[\"dbTblName\"].users, email, hash); // console.log(sql, hash);\n\n    rows = await _core_db__WEBPACK_IMPORTED_MODULE_4__[\"default\"].query(sql, null);\n\n    if (rows.length === 0) {\n      res.status(200).send({\n        result: langs.error,\n        message: langs.passwordIsIncorrect\n      });\n      return;\n    }\n\n    let data = rows[0];\n\n    if (data['allow'] === 0) {\n      res.status(200).send({\n        result: langs.error,\n        message: langs.yourAccountIsNotAllowed\n      });\n      return;\n    }\n\n    data['token'] = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default.a.sign({\n      id: data['id'],\n      email: data['email'],\n      firstName: data['firstName'],\n      lastName: data['lastName']\n    }, _core_config__WEBPACK_IMPORTED_MODULE_3__[\"session\"].secret);\n    res.status(200).send({\n      result: langs.success,\n      message: langs.successfullySignedIn,\n      data\n    });\n  } catch (err) {\n    _core_tracer__WEBPACK_IMPORTED_MODULE_7__[\"default\"].error(JSON.stringify(err));\n    _core_tracer__WEBPACK_IMPORTED_MODULE_7__[\"default\"].error(__filename);\n    res.status(200).send({\n      result: langs.error,\n      message: langs.unknownServerError,\n      err\n    });\n  }\n};\n\nconst signUpProc = async (req, res, next) => {\n  const params = req.body;\n  const language = req.get('language');\n  const langs = _core_strings__WEBPACK_IMPORTED_MODULE_6__[\"default\"][language];\n  const {\n    email,\n    firstName,\n    lastName,\n    password,\n    position,\n    country,\n    city,\n    phone\n  } = params;\n  const hash = _core_myCrypto__WEBPACK_IMPORTED_MODULE_5__[\"default\"].hmacHex(password);\n  let sql = Object(sprintf_js__WEBPACK_IMPORTED_MODULE_2__[\"sprintf\"])(\"SELECT `email` FROM `%s` WHERE BINARY `email` = '%s';\", _core_config__WEBPACK_IMPORTED_MODULE_3__[\"dbTblName\"].users, email); // dbConn.query(sql, null, (error, rows, fields) => {\n  //   if (error) {\n  //     tracer.error('auth/sign-in', JSON.stringify(error));\n  //     res.status(200).send({\n  //       result: langs.error,\n  //       message: langs.unknownServerError,\n  //     });\n  //     return;\n  //   }\n  //   if (rows.length > 0) {\n  //     res.status(200).send({\n  //       result: langs.error,\n  //       message: langs.emailAlreadyRegistered,\n  //     });\n  //     return;\n  //   }\n  //\n  //   const newRows = [\n  //     [null, email, firstName, lastName, hash, position, JSON.stringify(country), city, phone, 0],\n  //   ];\n  //   sql = sprintf(\"INSERT INTO `%s` VALUES ?;\", dbTblName.users, dbTblName.users);\n  //   dbConn.query(sql, [newRows], (error, rows, fields) => {\n  //     if (error) {\n  //       tracer.error(JSON.stringify(error));\n  //       tracer.error(__filename);\n  //       res.status(200).send({\n  //         result: langs.error,\n  //         message: langs.unknownServerError,\n  //       });\n  //       return;\n  //     }\n  //\n  //     // sendVerificationEmail(email);\n  //\n  //     res.status(200).send({\n  //       result: langs.success,\n  //       message: langs.successfullyRegistered,\n  //     });\n  //   });\n  // });\n\n  try {\n    let rows = await _core_db__WEBPACK_IMPORTED_MODULE_4__[\"default\"].query(sql, null);\n\n    if (rows.length > 0) {\n      res.status(200).send({\n        result: langs.error,\n        message: langs.emailAlreadyRegistered\n      });\n      return;\n    }\n\n    const newRows = [[null, email, firstName, lastName, hash, position, country, city, phone, 0]];\n    sql = Object(sprintf_js__WEBPACK_IMPORTED_MODULE_2__[\"sprintf\"])(\"INSERT INTO `%s` VALUES ?;\", _core_config__WEBPACK_IMPORTED_MODULE_3__[\"dbTblName\"].users, _core_config__WEBPACK_IMPORTED_MODULE_3__[\"dbTblName\"].users);\n    await _core_db__WEBPACK_IMPORTED_MODULE_4__[\"default\"].query(sql, [newRows]); // sendVerificationEmail(email);\n\n    res.status(200).send({\n      result: langs.success,\n      message: langs.successfullyRegistered\n    });\n  } catch (err) {\n    _core_tracer__WEBPACK_IMPORTED_MODULE_7__[\"default\"].error(JSON.stringify(err));\n    _core_tracer__WEBPACK_IMPORTED_MODULE_7__[\"default\"].error(__filename);\n    res.status(200).send({\n      result: langs.error,\n      message: langs.unknownServerError,\n      err\n    });\n  }\n};\n\nrouter.post('/sign-in', signInProc);\nrouter.post('/sign-up', signUpProc);\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./routes/api/auth.js?");

/***/ }),

/***/ "./routes/api/contactUs.js":
/*!*********************************!*\
  !*** ./routes/api/contactUs.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var sprintf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sprintf-js */ \"sprintf-js\");\n/* harmony import */ var sprintf_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sprintf_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _core_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/db */ \"./core/db.js\");\n/* harmony import */ var _core_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/config */ \"./core/config.js\");\n/* harmony import */ var _core_tracer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/tracer */ \"./core/tracer.js\");\n/* harmony import */ var _core_strings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/strings */ \"./core/strings.js\");\n\n\n\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\n\nconst postProc = async (req, res, next) => {\n  const {\n    category,\n    name,\n    email,\n    subject,\n    message\n  } = req.body;\n  const language = req.get('language');\n  const langs = _core_strings__WEBPACK_IMPORTED_MODULE_5__[\"default\"][language];\n  const timestamp = new Date().toISOString();\n  const rows = [[null, category, timestamp, name, email, subject, message]];\n  let sql = Object(sprintf_js__WEBPACK_IMPORTED_MODULE_1__[\"sprintf\"])(\"INSERT INTO `%s` VALUES ? ON DUPLICATE KEY UPDATE `name` = VALUES(`name`), `email` = VALUES(`email`), `subject` = VALUES(`subject`), `message` = VALUES(`message`);\", _core_config__WEBPACK_IMPORTED_MODULE_3__[\"dbTblName\"].contactUs); // dbConn.query(sql, [rows], (error, result, fields) => {\n  //   if (error) {\n  //     tracer.error(JSON.stringify(error));\n  //     tracer.error(__filename);\n  //     res.status(200).send({\n  //       result: langs.success,\n  //       message: langs.unknownServerError,\n  //     });\n  //     return;\n  //   }\n  //   res.status(200).send({\n  //     result: langs.success,\n  //     message: langs.successfullyPosted,\n  //   })\n  // });\n\n  try {\n    await _core_db__WEBPACK_IMPORTED_MODULE_2__[\"default\"].query(sql, [rows]);\n    res.status(200).send({\n      result: langs.success,\n      message: langs.successfullyPosted\n    });\n  } catch (err) {\n    _core_tracer__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(JSON.stringify(err));\n    _core_tracer__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(__filename);\n    res.status(200).send({\n      result: langs.error,\n      message: langs.unknownServerError,\n      err\n    });\n  }\n};\n\nrouter.post('/post', postProc);\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./routes/api/contactUs.js?");

/***/ }),

/***/ "./routes/assets-api.js":
/*!******************************!*\
  !*** ./routes/assets-api.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_api_mediaSlider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets-api/mediaSlider */ \"./routes/assets-api/mediaSlider.js\");\n/* harmony import */ var _assets_api_ourServices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets-api/ourServices */ \"./routes/assets-api/ourServices.js\");\n/* harmony import */ var _assets_api_businessPartner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets-api/businessPartner */ \"./routes/assets-api/businessPartner.js\");\n/* harmony import */ var _assets_api_ourClients__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets-api/ourClients */ \"./routes/assets-api/ourClients.js\");\n/* harmony import */ var _assets_api_directorBoard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets-api/directorBoard */ \"./routes/assets-api/directorBoard.js\");\n/* harmony import */ var _assets_api_events__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets-api/events */ \"./routes/assets-api/events.js\");\n\n\n\n\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\nrouter.use('/media-slider', _assets_api_mediaSlider__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nrouter.use('/our-services', _assets_api_ourServices__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nrouter.use('/business-partner', _assets_api_businessPartner__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\nrouter.use('/our-clients', _assets_api_ourClients__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\nrouter.use('/director-board', _assets_api_directorBoard__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\nrouter.use('/events', _assets_api_events__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./routes/assets-api.js?");

/***/ }),

/***/ "./routes/assets-api/businessPartner.js":
/*!**********************************************!*\
  !*** ./routes/assets-api/businessPartner.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var sprintf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sprintf-js */ \"sprintf-js\");\n/* harmony import */ var sprintf_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sprintf_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _core_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/config */ \"./core/config.js\");\n/* harmony import */ var _core_strings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/strings */ \"./core/strings.js\");\n/* harmony import */ var _core_tracer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/tracer */ \"./core/tracer.js\");\n/* harmony import */ var _core_db__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/db */ \"./core/db.js\");\n\n\n\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\n\nconst _loadData = async (req, res, next) => {\n  const language = req.get('language');\n  const params = req.body;\n  const {\n    category\n  } = params;\n  const langs = _core_strings__WEBPACK_IMPORTED_MODULE_3__[\"default\"][language];\n  let sql = Object(sprintf_js__WEBPACK_IMPORTED_MODULE_1__[\"sprintf\"])(\"SELECT * FROM `%s` WHERE `category` = '%s';\", _core_config__WEBPACK_IMPORTED_MODULE_2__[\"dbTblName\"].businessPartner, category); // dbConn.query(sql, null, (error, rows, fields) => {\n  //   if (error) {\n  //     tracer.error(JSON.stringify(error));\n  //     tracer.error(__filename);\n  //     res.status(200).send({\n  //       result: langs.error,\n  //       message: langs.unknownServerError,\n  //     });\n  //     return;\n  //   }\n  //\n  //   res.status(200).send({\n  //     result: langs.success,\n  //     data: rows,\n  //   });\n  // });\n\n  try {\n    let rows = await _core_db__WEBPACK_IMPORTED_MODULE_5__[\"default\"].query(sql, null);\n    res.status(200).send({\n      result: langs.success,\n      data: rows\n    });\n  } catch (err) {\n    _core_tracer__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(JSON.stringify(err));\n    _core_tracer__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(__filename);\n    res.status(200).send({\n      result: langs.error,\n      message: langs.unknownServerError,\n      err\n    });\n  }\n};\n\nconst listProc = (req, res, next) => {\n  _loadData(req, res, next);\n};\n\nrouter.post('/list', listProc);\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./routes/assets-api/businessPartner.js?");

/***/ }),

/***/ "./routes/assets-api/directorBoard.js":
/*!********************************************!*\
  !*** ./routes/assets-api/directorBoard.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var sprintf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sprintf-js */ \"sprintf-js\");\n/* harmony import */ var sprintf_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sprintf_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _core_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/config */ \"./core/config.js\");\n/* harmony import */ var _core_strings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/strings */ \"./core/strings.js\");\n/* harmony import */ var _core_tracer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/tracer */ \"./core/tracer.js\");\n/* harmony import */ var _core_db__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/db */ \"./core/db.js\");\n\n\n\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\n\nconst _loadData = async (req, res, next) => {\n  const language = req.get('language');\n  const params = req.body;\n  const {\n    category\n  } = params;\n  const langs = _core_strings__WEBPACK_IMPORTED_MODULE_3__[\"default\"][language];\n  let sql = Object(sprintf_js__WEBPACK_IMPORTED_MODULE_1__[\"sprintf\"])(\"SELECT * FROM `%s`;\", _core_config__WEBPACK_IMPORTED_MODULE_2__[\"dbTblName\"].directorBoard); // let sql = sprintf(\"SELECT * FROM `%s` WHERE `category` = '%s';\", dbTblName.directorBoard, category);\n  // dbConn.query(sql, null, (error, rows, fields) => {\n  //   if (error) {\n  //     tracer.error(JSON.stringify(error));\n  //     tracer.error(__filename);\n  //     res.status(200).send({\n  //       result: langs.error,\n  //       message: langs.unknownServerError,\n  //     });\n  //     return;\n  //   }\n  //\n  //   res.status(200).send({\n  //     result: langs.success,\n  //     data: rows,\n  //   });\n  // });\n\n  try {\n    let rows = await _core_db__WEBPACK_IMPORTED_MODULE_5__[\"default\"].query(sql, null);\n    res.status(200).send({\n      result: langs.success,\n      data: rows\n    });\n  } catch (err) {\n    _core_tracer__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(JSON.stringify(err));\n    _core_tracer__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(__filename);\n    res.status(200).send({\n      result: langs.error,\n      message: langs.unknownServerError,\n      err\n    });\n  }\n};\n\nconst listProc = (req, res, next) => {\n  _loadData(req, res, next);\n};\n\nrouter.post('/list', listProc);\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./routes/assets-api/directorBoard.js?");

/***/ }),

/***/ "./routes/assets-api/events.js":
/*!*************************************!*\
  !*** ./routes/assets-api/events.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var sprintf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sprintf-js */ \"sprintf-js\");\n/* harmony import */ var sprintf_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sprintf_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _core_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/config */ \"./core/config.js\");\n/* harmony import */ var _core_strings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/strings */ \"./core/strings.js\");\n/* harmony import */ var _core_tracer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/tracer */ \"./core/tracer.js\");\n/* harmony import */ var _core_db__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/db */ \"./core/db.js\");\n\n\n\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\n\nconst _loadData = async (req, res, next) => {\n  const language = req.get('language');\n  const params = req.body;\n  const {\n    scope,\n    category,\n    limit\n  } = params;\n  const langs = _core_strings__WEBPACK_IMPORTED_MODULE_3__[\"default\"][language];\n  const today = new Date();\n  const todayStr = Object(sprintf_js__WEBPACK_IMPORTED_MODULE_1__[\"sprintf\"])('%04d-%02d-%02d', today.getFullYear(), today.getMonth() + 1, today.getDate());\n  let sql = Object(sprintf_js__WEBPACK_IMPORTED_MODULE_1__[\"sprintf\"])(\"SELECT * FROM `%s_%s` WHERE `category` = '%s' AND `timestamp` %s '%s' ORDER BY `timestamp` %s LIMIT %d;\", scope, _core_config__WEBPACK_IMPORTED_MODULE_2__[\"dbTblName\"].events, category, scope === 'previous' ? '<=' : '>=', todayStr, scope === 'previous' ? 'DESC' : 'ASC', limit); // dbConn.query(sql, null, (error, rows, fields) => {\n  //   if (error) {\n  //     tracer.error(JSON.stringify(error));\n  //     tracer.error(__filename);\n  //     res.status(200).send({\n  //       result: langs.error,\n  //       message: langs.unknownServerError,\n  //     });\n  //     return;\n  //   }\n  //\n  //   res.status(200).send({\n  //     result: langs.success,\n  //     data: rows,\n  //   });\n  // });\n\n  try {\n    let rows = await _core_db__WEBPACK_IMPORTED_MODULE_5__[\"default\"].query(sql, null);\n    res.status(200).send({\n      result: langs.success,\n      data: rows\n    });\n  } catch (err) {\n    _core_tracer__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(JSON.stringify(err));\n    _core_tracer__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(__filename);\n    res.status(200).send({\n      result: langs.error,\n      message: langs.unknownServerError,\n      err\n    });\n  }\n};\n\nconst listProc = (req, res, next) => {\n  _loadData(req, res, next);\n};\n\nrouter.post('/list', listProc);\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./routes/assets-api/events.js?");

/***/ }),

/***/ "./routes/assets-api/mediaSlider.js":
/*!******************************************!*\
  !*** ./routes/assets-api/mediaSlider.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var sprintf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sprintf-js */ \"sprintf-js\");\n/* harmony import */ var sprintf_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sprintf_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _core_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/config */ \"./core/config.js\");\n/* harmony import */ var _core_db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/db */ \"./core/db.js\");\n/* harmony import */ var _core_strings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/strings */ \"./core/strings.js\");\n/* harmony import */ var _core_tracer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/tracer */ \"./core/tracer.js\");\n\n\n\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\n\nconst _loadData = async (req, res, next) => {\n  const language = req.get('language');\n  const params = req.body;\n  const {\n    category\n  } = params;\n  const langs = _core_strings__WEBPACK_IMPORTED_MODULE_4__[\"default\"][language];\n  let sql = Object(sprintf_js__WEBPACK_IMPORTED_MODULE_1__[\"sprintf\"])(\"SELECT * FROM `%s` WHERE `category` = '%s';\", _core_config__WEBPACK_IMPORTED_MODULE_2__[\"dbTblName\"].mediaSlider, category); // dbConn.query(sql, null, (error, rows, fields) => {\n  //   if (error) {\n  //     tracer.error(JSON.stringify(error));\n  //     tracer.error(__filename);\n  //     res.status(200).send({\n  //       result: langs.error,\n  //       message: langs.unknownServerError,\n  //     });\n  //     return;\n  //   }\n  //\n  //   res.status(200).send({\n  //     result: langs.success,\n  //     data: rows,\n  //   });\n  // });\n\n  try {\n    let rows = await _core_db__WEBPACK_IMPORTED_MODULE_3__[\"default\"].query(sql, null);\n    res.status(200).send({\n      result: langs.success,\n      data: rows\n    });\n  } catch (err) {\n    _core_tracer__WEBPACK_IMPORTED_MODULE_5__[\"default\"].error(JSON.stringify(err));\n    _core_tracer__WEBPACK_IMPORTED_MODULE_5__[\"default\"].error(__filename);\n    res.status(200).send({\n      result: langs.error,\n      message: langs.unknownServerError,\n      err\n    });\n  } // db.query(sql, null).then(rows => {\n  //   res.status(200).send({\n  //     result: langs.success,\n  //     data: rows,\n  //   });\n  // }).catch(err => {\n  //   tracer.error(JSON.stringify(err));\n  //   tracer.error(__filename);\n  //   res.status(200).send({\n  //     result: langs.error,\n  //     message: langs.unknownServerError,\n  //     err,\n  //   });\n  // });\n\n};\n\nconst listProc = (req, res, next) => {\n  _loadData(req, res, next);\n};\n\nrouter.post('/list', listProc);\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./routes/assets-api/mediaSlider.js?");

/***/ }),

/***/ "./routes/assets-api/ourClients.js":
/*!*****************************************!*\
  !*** ./routes/assets-api/ourClients.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var sprintf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sprintf-js */ \"sprintf-js\");\n/* harmony import */ var sprintf_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sprintf_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _core_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/config */ \"./core/config.js\");\n/* harmony import */ var _core_strings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/strings */ \"./core/strings.js\");\n/* harmony import */ var _core_tracer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/tracer */ \"./core/tracer.js\");\n/* harmony import */ var _core_db__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/db */ \"./core/db.js\");\n\n\n\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\n\nconst _loadData = async (req, res, next) => {\n  const language = req.get('language');\n  const params = req.body;\n  const {\n    category\n  } = params;\n  const langs = _core_strings__WEBPACK_IMPORTED_MODULE_3__[\"default\"][language];\n  let sql = Object(sprintf_js__WEBPACK_IMPORTED_MODULE_1__[\"sprintf\"])(\"SELECT * FROM `%s` WHERE `category` = '%s' ORDER BY `timestamp` DESC LIMIT 20;\", _core_config__WEBPACK_IMPORTED_MODULE_2__[\"dbTblName\"].ourClients, category); // dbConn.query(sql, null, (error, rows, fields) => {\n  //   if (error) {\n  //     tracer.error(JSON.stringify(error));\n  //     tracer.error(__filename);\n  //     res.status(200).send({\n  //       result: langs.error,\n  //       message: langs.unknownServerError,\n  //     });\n  //     return;\n  //   }\n  //\n  //   const today = new Date();\n  //   let timestamp, diff;\n  //   let M, d, h, m;\n  //   for (let row of rows) {\n  //     timestamp = new Date(row.timestamp);\n  //     diff = Math.floor((today - timestamp) / (60 * 1000));\n  //\n  //     m = diff % 60;\n  //     diff = Math.floor(diff / 60);\n  //\n  //     h = diff % 24;\n  //     diff = Math.floor(diff / 24);\n  //\n  //     d = diff % 30;\n  //     diff = Math.floor(diff / 30);\n  //\n  //     M = diff;\n  //\n  //     row.timeDiff = {\n  //       M, d, h, m\n  //     };\n  //   }\n  //\n  //   res.status(200).send({\n  //     result: langs.success,\n  //     data: rows,\n  //   });\n  // });\n\n  try {\n    let rows = await _core_db__WEBPACK_IMPORTED_MODULE_5__[\"default\"].query(sql, null);\n    const today = new Date();\n    let timestamp, diff;\n    let M, d, h, m;\n\n    for (let row of rows) {\n      timestamp = new Date(row.timestamp);\n      diff = Math.floor((today - timestamp) / (60 * 1000));\n      m = diff % 60;\n      diff = Math.floor(diff / 60);\n      h = diff % 24;\n      diff = Math.floor(diff / 24);\n      d = diff % 30;\n      diff = Math.floor(diff / 30);\n      M = diff;\n      row.timeDiff = {\n        M,\n        d,\n        h,\n        m\n      };\n    }\n\n    res.status(200).send({\n      result: langs.success,\n      data: rows\n    });\n  } catch (err) {\n    _core_tracer__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(JSON.stringify(err));\n    _core_tracer__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(__filename);\n    res.status(200).send({\n      result: langs.error,\n      message: langs.unknownServerError,\n      err\n    });\n  }\n};\n\nconst listProc = (req, res, next) => {\n  _loadData(req, res, next);\n};\n\nrouter.post('/list', listProc);\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./routes/assets-api/ourClients.js?");

/***/ }),

/***/ "./routes/assets-api/ourServices.js":
/*!******************************************!*\
  !*** ./routes/assets-api/ourServices.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var sprintf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sprintf-js */ \"sprintf-js\");\n/* harmony import */ var sprintf_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sprintf_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _core_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/config */ \"./core/config.js\");\n/* harmony import */ var _core_strings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/strings */ \"./core/strings.js\");\n/* harmony import */ var _core_tracer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/tracer */ \"./core/tracer.js\");\n/* harmony import */ var _core_db__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/db */ \"./core/db.js\");\n\n\n\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\n\nconst _loadData = async (req, res, next) => {\n  const language = req.get('language');\n  const params = req.body;\n  const {\n    category\n  } = params;\n  const langs = _core_strings__WEBPACK_IMPORTED_MODULE_3__[\"default\"][language];\n  let sql = Object(sprintf_js__WEBPACK_IMPORTED_MODULE_1__[\"sprintf\"])(\"SELECT * FROM `%s` WHERE `category` = '%s';\", _core_config__WEBPACK_IMPORTED_MODULE_2__[\"dbTblName\"].ourServices, category); //\n  // dbConn.query(sql, null, (error, rows, fields) => {\n  //   if (error) {\n  //     tracer.error(JSON.stringify(error));\n  //     tracer.error(__filename);\n  //     res.status(200).send({\n  //       result: langs.error,\n  //       message: langs.unknownServerError,\n  //     });\n  //     return;\n  //   }\n  //\n  //   res.status(200).send({\n  //     result: langs.success,\n  //     data: rows,\n  //   });\n  // });\n\n  try {\n    let rows = await _core_db__WEBPACK_IMPORTED_MODULE_5__[\"default\"].query(sql, null);\n    res.status(200).send({\n      result: langs.success,\n      data: rows\n    });\n  } catch (err) {\n    _core_tracer__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(JSON.stringify(err));\n    _core_tracer__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(__filename);\n    res.status(200).send({\n      result: langs.error,\n      message: langs.unknownServerError,\n      err\n    });\n  }\n};\n\nconst listProc = (req, res, next) => {\n  _loadData(req, res, next);\n};\n\nrouter.post('/list', listProc);\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./routes/assets-api/ourServices.js?");

/***/ }),

/***/ "cluster":
/*!**************************!*\
  !*** external "cluster" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cluster\");\n\n//# sourceURL=webpack:///external_%22cluster%22?");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"compression\");\n\n//# sourceURL=webpack:///external_%22compression%22?");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie-parser\");\n\n//# sourceURL=webpack:///external_%22cookie-parser%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"crypto\");\n\n//# sourceURL=webpack:///external_%22crypto%22?");

/***/ }),

/***/ "debug":
/*!************************!*\
  !*** external "debug" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"debug\");\n\n//# sourceURL=webpack:///external_%22debug%22?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-fileupload":
/*!*************************************!*\
  !*** external "express-fileupload" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-fileupload\");\n\n//# sourceURL=webpack:///external_%22express-fileupload%22?");

/***/ }),

/***/ "express-jwt":
/*!******************************!*\
  !*** external "express-jwt" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-jwt\");\n\n//# sourceURL=webpack:///external_%22express-jwt%22?");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http\");\n\n//# sourceURL=webpack:///external_%22http%22?");

/***/ }),

/***/ "http-errors":
/*!******************************!*\
  !*** external "http-errors" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http-errors\");\n\n//# sourceURL=webpack:///external_%22http-errors%22?");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");\n\n//# sourceURL=webpack:///external_%22jsonwebtoken%22?");

/***/ }),

/***/ "mkdirp":
/*!*************************!*\
  !*** external "mkdirp" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mkdirp\");\n\n//# sourceURL=webpack:///external_%22mkdirp%22?");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"morgan\");\n\n//# sourceURL=webpack:///external_%22morgan%22?");

/***/ }),

/***/ "mysql2":
/*!*************************!*\
  !*** external "mysql2" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mysql2\");\n\n//# sourceURL=webpack:///external_%22mysql2%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "sprintf-js":
/*!*****************************!*\
  !*** external "sprintf-js" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"sprintf-js\");\n\n//# sourceURL=webpack:///external_%22sprintf-js%22?");

/***/ }),

/***/ "tracer":
/*!*************************!*\
  !*** external "tracer" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"tracer\");\n\n//# sourceURL=webpack:///external_%22tracer%22?");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"uuid\");\n\n//# sourceURL=webpack:///external_%22uuid%22?");

/***/ })

/******/ });