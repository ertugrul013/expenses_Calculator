var sqlite3 = require('sqlite3').verbose();

const DBSOURCE = "db.sqlite";
let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        // Cannot open database
        console.error(err.message);
        throw err;
    } else {
        console.log('Connected to the SQLite database.');
        db.run(`CREATE TABLE city (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            country text UNIQUE,
            city text, 
            CONSTRAINT email_unique UNIQUE (email)
            )`,
            (err) => {
                if (err) {
                    console.log("Table already exist");
                }
            });
    }
});

module.exports = db;