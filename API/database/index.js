var mysql = require('mysql');
var fs = require('fs');

const configFiledir = __dirname + "/config.json";

var config = JSON.parse(fs.readFileSync(configFiledir, 'utf8'));

var connection = mysql.createConnection({
    host: config.dbAddres,
    user: config.userName,
    password: config.password,
    port: config.dbPort,
    database: config.database
});

connection.connect(function (err) {
    if (err) {
        console.log("Connection failed " + err.stack);
        return;
    }
    console.log("Connection Succesful " + connection.threadId);
});

