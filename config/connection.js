const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "bootcamp",
  database: "burgers_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("MySql Database connected as id " + connection.threadId + "\n");
});

module.exports = connection;