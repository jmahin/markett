const express = require('express');
const app = express(); //
const router = express.Router();
const siteController = require('../controllers/site-ctrl');
const resModel = require("../models/resModel");

router.route('/')
    .get(siteController.loadHomepage);

router.route('/about')
    .get(siteController.loadAbout);

router.route('/contact')
    .get(siteController.loadContact);

module.exports = router;