const express = require('express');
const path = require('path');
const morgan = require('morgan');
const hbs = require('hbs');

const routes = require('./routes');
const eachIndex = require('./helpers');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.set('view options', {layout: 'layouts/main'});

hbs.registerHelper('eachIndex', eachIndex);

app.use(morgan('dev'));
app.use('/', routes);

app.listen(9999);
