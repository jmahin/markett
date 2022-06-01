const addResRoutes = require('./add-res-routes');

const siteRoutes = require('./site-routes');

const express = require('express');

const router = express.Router();

router.use('/', siteRoutes);
router.use('/addaresource', addResRoutes);

module.exports = router;