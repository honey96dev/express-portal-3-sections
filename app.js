import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import expressJwt from 'express-jwt';
import cors from 'cors';
import compression from 'compression';
import fileUpload from 'express-fileupload';

import {server, session} from './core/config';
import apiRouter from './routes/api';
import assetsApiRouter from './routes/assets-api';

const app = express();

const cwd = process.cwd();

// view engine setup
app.set('views', path.join(cwd, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(cors());
app.use(compression());

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
