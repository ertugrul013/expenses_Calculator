var appRouter = function (app) {
    app.get("/ping", (req, res) => {
        res.statusCode = 200;
        res.json({ "status": "200" });
    });

    app.get("/api/:city/:currency/min", (req, res) => {
        res.statusCode = 501;
        res.json({ "message": "sending minified version", "status": "501" });
    });

    app.get("/api/:city/:currency/full", (req, res) => {
        res.statusCode = 501;
        res.json({ "message": "sending full version", "status": "501" });
    });

    app.get("/api/:city/:currency/average", (req, res) => {
        res.statusCode = 501;
        res.json({ "message": "sending average cost", "status": "501" });
    });
}

export default appRouter;