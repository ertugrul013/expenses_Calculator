var mySql = require('mysql');

var connection = mySql.createConnection({
    host: process.env.RDS_HOSTNAME,
    user: process.env.USER,
    password: process.env.PASSWORD,
    port: process.env.PORT
});

connection.connect(function (err) {
    if (err) {
        console.log("Connection failed" + err.stack);
        return;
    }
    console.log("Connection Succesful");
});

