const mysql = require('mysql');

module.exports = () => {
  return mysql.createConnection({
    host: '2.2.2.2',
    user: '2',
    password: '2',
    database: '2'
  });
}
