import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import expressJwt from 'express-jwt';
import cors from 'cors';
import compression from 'compression';
import fileUpload from 'express-fileupload';
// import Payments from "node-payments";

import {server, session} from './core/config';
import apiRouter from './routes/api';
import assetsApiRouter from './routes/assets-api';

const app = express();

// // ========================================================
// // inject and reuse a existing express
// const paymentConfig = {
//   express: app,
//   paymentStore: new Payments.RedisHashStore()
// };
// const pymts = new Payments(paymentConfig);
// // the event fired for a succesfull provider payment
// pymts.on( "approved", function( res, payment ){
//   // use the express response object to generate the page after retuning from the providers page
//   res.send( "Thank you!" );
// });
//
// // the event fired for a canceld provider payment
// pymts.on( "cancel", function( res, payment ){
//   // use the express response object to generate the page after a canceld payments by/within the providers page
//   res.send( "What a pity!" );
// });
//
// // the event fired for a successfull verify by a message service ( e.g. PayPal-IPN or ClickandBuy-MMS ).
// pymts.on( "verfied", function( payment ){
//   console.log( "PAYMENT VERIFIED\"n", payment.valueOf() );
// });
//
// // the event on every change of a payment
// pymts.on( "payment", function( type, payment ){
//   console.log( "PAYMENT ACTION: " + type + "\n", payment.valueOf() );
// });
//
// // listen for pay requests ( e.g. "www.mysite.com/pay/paypal"
// app.get( "/pay/:provider/:cid", function( req, res ){
//   // Get thh service provider
//   pymts.provider( req.params.provider, function( err, provider ){
//     if( err ){
//       console.log( err );
//       res.send( "ERROR", 500 );
//     }
//
//     // create a payment instance
//     var payment = provider.create();
//
//     // set some parameters
//     payment.set({
//       amount: 41.99,
//       curreny: "EUR",
//       desc: "Imperial Star Destroyer",
//       // you can define your own attributes
//       my_custom_id: req.params.cid
//     });
//
//     payment.execute( function( err, link ){
//       if( err ){
//         console.log( err );
//         res.send( "ERROR", 500 );
//       }
//       // redirect to the providers login page
//       res.redirect( link );
//     });
//   });
// });
// // ========================================================

const cwd = process.cwd();
const whitelist = ['http://www.eliteresources.co', 'https://www.eliteresources.co', 'http://www.eliteresources.co', 'http://www.eliteresources.co', 'http://localhost:5000'];
const corsOptions = {
  origin: function(origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
};

// view engine setup
app.set('views', path.join(cwd, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
if (process.env.NODE_ENV !== 'production') {
  app.use(cors());
  // app.use(cors(corsOptions));
} else {
  // app.use(cors());
  // app.use(cors(corsOptions));
}
app.use(compression());

app.use(function (req, res, next) {
  if (req.secure || process.env.NODE_ENV !== 'production') {
    // request was via https, so do no special handling
    next();
  } else {
    // request was via http, so redirect to https
    res.redirect('https://' + req.headers.host + req.url);
  }
});

app.use(fileUpload({
  limits: {fileSize: 50 * 1024 * 1024},
}));

// app.use('/api', expressJwt({secret: session.secret})
//   .unless({
//     path: [
//       '/api/auth/sign-in',
//       '/api/auth/sign-up',
//       /\/api\/admin\/*/,
//     ]
//   }));

app.use('/api/admin', expressJwt({secret: session.secretAdmin})
  .unless({
    path: [
      '/api/admin/auth/sign-in',
    ]
  }));

app.use('/api/contact-us', expressJwt({secret: session.secret}));
app.use('/api/event/join', expressJwt({secret: session.secret}));
app.use('/api/courses/join', expressJwt({secret: session.secret}));

app.use('/api', apiRouter);
app.use('/assets-api', assetsApiRouter);

app.use('/admin', express.static(path.join(cwd, 'admin-frontend')));
app.get('/admin/*', function (req, res) {
  res.sendFile(path.join(cwd, 'admin-frontend/index.html'));
});

app.use('/assets', express.static(path.join(cwd, 'public')));

app.use(express.static(path.join(cwd, 'frontend')));
app.get('*', function (req, res) {
  res.sendFile(path.join(cwd, 'frontend/index.html'));
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;
