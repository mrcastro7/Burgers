var mysql = require("mysql");

connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "yourpassword",
    database: "burgers_db"
});
connection.connect(function(err){
    if (err){
        console.error("error connecting:" + err.stack);
        return;
    }
    console.log("connected as id" + connection.threadID);
});

module.exports = connection;