const express = require('express');
const app = express(); //
const router = express.Router();
const addResController = require('../controllers/add-res-ctrl');
const resModel = require("../models/resModel");

router.route('/addaresource')
    .get(addResController.loadAddRes);
    .post(addResController.addNewRes);
    