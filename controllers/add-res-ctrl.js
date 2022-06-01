const data = require('../data/data');
const ResModel = require('../models/resModel');

module.exports = {
    addNewRes: (request, response) => {
        const {resName, resAddress, hoursOpen, season, resWeb} = request.body;
        const newRes = new Res ({
            resName: resName,
            resAddress: resAddress,
            hoursOpen: hoursOpen,
            season: season,
            resWeb: resWeb
        });
        newRes.save();
        response.redirect("/resadded");
    }
    }
