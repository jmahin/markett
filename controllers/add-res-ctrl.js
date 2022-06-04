const ResModel = require('../models/resModel');

module.exports = { //duplicate of site-ctrl?
    addNewRes: (request, response) => {
        const {resName, resAddress, hoursOpen, season, resWeb} = request.body;
        const newRes = new ResPost ({
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
    