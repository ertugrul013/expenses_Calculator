var fetch = require("fet")
var router = require("../router/router");

/// get the city's average cost and data of the city
router.get("/api/city/:cityname", (req, res, next) => {
    if (cityname == null) {
        res.status(200).json({ error: "no city name has been specified" });
    }

});

/// post a new city to the database
/// this will only happen if maneuly called or the city is not yet in the database
router.post("/api/city/:cityname", async (req, res, next) => {
    if (cityname == null) {
        res.status(200).json({ error: "" });
    }
    const { currency = "eur" } = req.header;

    const url = "dsd${dsdsd}dsd"

});