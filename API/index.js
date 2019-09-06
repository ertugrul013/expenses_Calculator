var express = require('express');
var app = express();

var db = require("./database/index.js");

var port = process.env.PORT || 8080;

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/ping', function (req, res, next) {
    res.json({
        message: "pong",
        status: "200"
    });
    console.log("API has been pinged");
});

app.get("/api/cities", (req, res, next) => {
    var sql = "select * from cities"
    var params = []
    db.all(sql, params, (err, rows) => {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.json({
            "message": "success",
            "data": rows
        });
    });
});

//GET user with ID handels SQL injection
app.get("/api/user/:id", (req, res, next) => {
    var sql = "select * from user where id = ?"
    var params = [req.params.id]
    db.get(sql, params, (err, row) => {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.json({
            "message": "success",
            "data": row
        });
    });
});

// POST new user to DB
app.post("/api/user/", (req, res, next) => {
    var errors = [];

    if (!req.body.password) {
        errors.push("No password specified");
    }
    if (!req.body.email) {
        errors.push("No email specified!");
    }
    if (errors.length) {
        res.status(400).json({ "error": errors.join(",") });
        return;
    }
    var data = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    };

    var sql = 'INSERT INTO user (name, email, password) VALUES(?,?,?)';
    var params = [data.name, data.email, data.password];

    db.run(sql, params, function (err, result) {
        if (err) {
            res.status(400).json({ "erro": err.message });
            return;
        }
        res.json({
            "message": "succes",
            "data": data,
            "id": this.lastID
        })
    });
});

((req, res, next) => {
    res.status(404);
})

app.listen(port, () => {
    console.log("you need to be on this port " + port);
});