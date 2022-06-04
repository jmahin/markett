// Requirements
const express = require('express');
const morgan = require('morgan');
require('dotenv').config();
const dotenv = require("dotenv");
// const mongoose = require("mongoose");
const mongoDB = require("mongodb");
const methodOverride = require('method-override');
const path = require('path');
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

// mongoose.connect('mongodb://localhost:27017/markettproject');

// mongoose.connect(
//     `mongodb+srv://jmahin:7q2gWgue2am2FMfY@Cluster0.mongodb.net/markettproject?retryWrites=true&w=majority`
// );

// mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
// const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));

// const Schema = mongoose.Schema;

