'use strict';

// get the client

//  IF MYSQL IS USED FIRST ADD DEPENDENCY
// npm i mysql2
const mysql = require('mysql2/promise');
// const fs = require('fs');

// create the connection to database
const DB = mysql.createPool({
  host: process.env.MYSQLHOST,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASS,
  database: process.env.MYSQLDATABASE_API,
  connectionLimit: 20,
  // ssl: {
  //   ca: fs.readFileSync('./utils/SSL-CA-BUNDLE_LOCATION.pem')
  // },
  debug: false,
});

module.exports = {
  DB,
};
