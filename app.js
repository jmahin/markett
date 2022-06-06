// Requirements
const dotenv = require("dotenv");
require('dotenv').config();
const express = require('express');
const methodOverride = require('method-override');
const morgan = require('morgan');
const path = require('path');
const mongoose = require("mongoose");
const mongoDB = require("mongodb");
const app = express();
const PORT = 3000;
const router = express.Router();

// Routes
const indexRoutes = require('./routes/index-routes.js');
const siteRoutes = require('./routes/site-routes.js');
const addResRoutes = require('./routes/add-res-routes');

module.exports = router;

app.set('view engine', 'ejs');

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.json());

app.use('/', indexRoutes);
app.use(siteRoutes);
app.use(addResRoutes);

require('./config/connection');

app.use((request, response) => {
    response.status(404).render('404', { title: '404'});
});

app.listen(PORT, () => {
    console.log(`The local host URL is http://localhost:${PORT}`);
});

