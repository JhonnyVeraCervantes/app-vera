const mysql = require('mysql');

module.exports = () => {
  return mysql.createConnection({
    host: '13.65.198.65',
    user: 'root',
    password: 'Base12345',
    database: 'Prueba_Spotify'
  });
}
