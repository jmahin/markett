const express = require('express');
const siteController = require('../controllers/site-ctrl');
const router = express.Router();

// Site routes
router.route('/')
    .get(siteController.loadHomepage);
    // have to pull info from db into homepage

router.route('/about')
    .get(siteController.loadAbout);

router.route('/contact')
    .get(siteController.loadContact);

router.route('/addaresource')
    .get(siteController.loadAddRes);

module.exports = router;