const express = require('express');
const path = require('path');
const morgan = require('morgan');
const hbs = require('hbs');
const session = require('express-session');
const MemoryStore = require('memorystore')(session);
const bodyParser = require('body-parser');

const routes = require('./routes');
const eachIndex = require('./helpers');
const app = express();

app.use(bodyParser.json());
app.use(
  session({
    cookie: {maxAge: 86400000},
    store: new MemoryStore({checkPeriod: 86400000}),
    secret: 'jquery-to-vue',
    resave: true,
    saveUninitialized: true,
  }),
);

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.set('view options', {layout: 'layouts/main'});

hbs.registerHelper('eachIndex', eachIndex);

app.use(morgan('dev'));
app.use('/', routes);

app.listen(9999);
