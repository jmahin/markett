const ResModel = require('../models/resModel');

module.exports = {
    loadHomepage: (request, response) => {
        response.render('pages/index', {
            // resName: data.resName,
            // resAddress: data.resAddress,
            // hoursOpen: data.hoursOpen,
            // season: data.season,
            // resWeb: data.resWeb
        });
    },
    loadAbout: (request, response) => {
        response.render('pages/about');
    },
    loadContact: (request, response) => {
        response.render('pages/contact');
    },
    loadAddRes: (request, response) => {
        response.render('pages/addaresource');
    }

};