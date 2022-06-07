// Requirements
// const dotenv = require("dotenv");
// require('dotenv').config();
const express = require('express');
const methodOverride = require('method-override');
const morgan = require('morgan');
const path = require('path');
// const mongoose = require("mongoose");
// const mongoDB = require("mongodb");
const app = express();
const PORT = 3000;
const router = express.Router();

// Route
const routes = require('./routes/index-routes');

module.exports = router;

app.set('view engine', 'ejs');

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
// app.use(express.json());

app.use(routes);
// require('./config/connection');

app.listen(PORT, () => {
    console.log(`The local host URL is http://localhost:${PORT}`);
});

