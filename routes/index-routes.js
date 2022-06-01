const express = require('express');

const siteRoutes = require('./site-routes');
const addResRoutes = require('./add-res-routes');
const indexController = require('../controllers/index-ctrl');

const router = express.Router();

router.use('/', siteRoutes);
router.use('/addaresource', addResRoutes);


module.exports = router;