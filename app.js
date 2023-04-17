require('./config.db');

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', require('./routes/authorizations.routes'));
app.use('/api', require('./routes/applications.routes'));
app.use('/api', require('./routes/logs.routes'));

module.exports = app;
