// Require
const express = require('express');
const siteRoutes = require('./site-routes');
// const addResRoutes = require('./add-res-routes');

const router = express.Router();

router.use('/', siteRoutes);
// router.use('/addaresource', addResRoutes);

module.exports = router;
