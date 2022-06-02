const express = require('express');
const siteController = require('../controllers/site-ctrl');
const router = express.Router();

// Site routes
router.route('/')
    .get(siteController.loadHomepage);

router.route('/about')
    .get(siteController.loadAbout);

router.route('/contact')
    .get(siteController.loadContact);

router.route('/addaresource')
    .get(siteController.loadAddRes);
    .post(siteController.addResPost);

module.exports = router;