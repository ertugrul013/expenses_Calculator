var router = require("express").Router();

var database = require("../database/index.js");

router.use(function DateLog(req, res, next) {
    console.log('Date: ' + Date.now());

    res.status(404);

    if (req.accepts) {
        console.log('404 error has been sent back');
        res.json({
            error: 'Command not found 404'
        });
    }
    next();
});

//ping the server as a debug
router.get('/ping', function (req, res, next) {
    res.json({
        message: 'pong',
        status: '200 OK'
    });
    console.log('API pinged');
});

//get a certain city back 
router.get('/api/cities/:name', function (req, res, next) {
    if (name == null) {
        res.status(400).json({ error: 'No city of that name has been found' });
    }

    console.log("Information has been reqeusted for this city: " + name)
});

//add new data to the database
router.post('/api/city', function (req, res, next) {
    var errors = [];
    if (!req.body.cityname) {
        errors.push("No city name specified");
    }
    if (!req.body.citycost) {
        errors.push("No city cost specified");
    }
    if (!req.body.livability) {
        errors.push("No livability specified");
    }

    if (errors.length != 0) {
        res.status(400).json({ error: errors.join(",") });
        return;
    }

    var dataField = {
        cityName: req.body.cityname,
        cityCost: req.body.citycost,
        livability: req.body.livability
    };

    var insert = 'INSERT INTO cities (cityname , citycost, livability) VALUES(?,?,?)';
    //code for inserting contents to db
});

module.exports = router;