/* eslint-disable no-console */
require('dotenv').config();
const express = require('express');

const createError = require('http-errors');
const path = require('path');
const hbs = require('express-handlebars');
const index = require('./routes/index');
const search = require('./routes/search');

const app = express();
const port = process.env.PORT || 3000;

// view engine setup
app.set('view engine', 'hbs');
app.engine(
  'hbs',
  hbs({
    extname: 'hbs',
    defaultView: 'default',
    layoutsDir: path.join(__dirname, '/views/layouts/'),
    partialsDir: path.join(__dirname, '/views/partials/'),
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use(index);
app.use(search);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(port, () => {
  if (process.env.NODE_ENV !== 'test') {
    console.log(`FT app listening on port ${port}!`);
  }
});

module.exports = app;
