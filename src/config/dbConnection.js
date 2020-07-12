const mysql = require('mysql');

module.exports = () => {
  return mysql.createConnection({
    host: '...',
    user: '',
    password: '',
    database: ''
  });
}
