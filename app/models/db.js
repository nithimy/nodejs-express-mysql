const mysql = require("mysql");
const DBConnection = require("../configs/DBConnection.js");
const DBConnection = require("../configs/DBConnection.js");

var connection = mysql.createPool({
  host: DBConnection.HOST,
  user: DBConnection.USER,
  password: DBConnection.PASSWORD,
  database: DBConnection.DB
});

module.exports = connection;
