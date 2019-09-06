var mySql = require('mysql');
var fs = require('fs');

const configFiledir = __dirname + "/config.json";

const configData = fs.readFile(configFiledir, (err, data) => {
    if (err) {
        console.log("error has been encouterd while open config file");
        throw err;
    }
    return JSON.parse(data);
});

var connection = mySql.createConnection({
    host: configData.dbAddres,
    user: configData.userName,
    password: configData.password,
    port: configData.dbPort
});

connection.connect(function (err) {
    if (err) {
        console.log("Connection failed" + err.stack);
        return;
    }
    console.log("Connection Succesful");
});

