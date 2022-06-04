const express = require('express');
const addResController = require('../controllers/add-res-ctrl');
const resModel = require("../models/resModel");
const router = express.Router();

router.route('/addaresource')
    .post(addResController.addNewRes);
    // put in the future

module.exports = router;
    