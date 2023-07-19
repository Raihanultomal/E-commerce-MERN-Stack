const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const createError = require('http-errors');
const xssClean = require('xss-clean');
const rateLimit = require('express-rate-limit');
const userRouter = require('./routers/userRouter');
const seedRouter = require('./routers/seedRouter');
const { errorResponse } = require('./controllers/responseController');
// const { seedRouter } = require('./routers/seedRouter');

const app = express();

// rateLimit er maddhome minit e kotogulo req kora jabe seta thik kore dea jabe
// jemon kew jodi login korte chay 1 mint e 5 bar try korte parbe.
// er beshi vhul korle take r sujog dea hobe na

const rateLimiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 5,
  message: 'Too many request from this API, try later',
});
app.use(rateLimiter);
app.use(xssClean());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// amra shob routing er kaj router folder e korbo.
// er pore seguloke app.js e import korlei hoye jabe
app.use('/api/users', userRouter);
app.use('/api/seed', seedRouter);

// error handling
// jodi user vhul api dey tahole ki dekhabe seta amra thik kore dite pari
// client error handling
app.use((req, res, next) => {
  //   res.status(404).json({ message: 'route not found' });
  //   next();
  next(createError(404, 'route not found'));
});

// server error handling
app.use((err, req, res, next) => {
  // error contol kora hocce controllers folder er responseController.js e
  return errorResponse(res, {
    statusCode: err.status,
    message: err.message,
  });
});

module.exports = app;
