import parser from "../Parser/Parser";

var appRouter = function (app) {
    app.get("/ping", (req, res) => {
        res.statusCode = 200;
        res.json({ "status": "200" });
    });

    app.get("/api/cost", async (req, res) => {

        const city = req.query.city;
        const currency = req.query.currency;
        const type = req.query.type;


        parser(city, currency, res);

        // console.log(city, currency, type);

        // res.json({
        //     "city": city,
        //     "currency": currency,
        //     "type": type
        // });
    });
}

export default appRouter;