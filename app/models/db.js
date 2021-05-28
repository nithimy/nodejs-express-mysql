const mysql = require("mysql");
const DBconnection = require("../configs/DBconnection.js");

var connection = mysql.createPool({
  host: DBconnection.HOST,
  user: DBconnection.USER,
  password: DBconnection.PASSWORD,
  database: DBconnection.DB
});

module.exports = connection;
