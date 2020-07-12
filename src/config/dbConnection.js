const mysql = require('mysql');

module.exports = () => {
  return mysql.createConnection({
    host: '13.66.39.224',
    user: 'root',
    password: 'Base12345',
    database: 'Prueba_Spotify'
  });
}
