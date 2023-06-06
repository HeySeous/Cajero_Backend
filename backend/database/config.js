const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user:'root',
    password:'',
    database: 'grillstore'
})

connection.connect((err) => {
    if (err) throw err;

    console.log('Base de datos conectada');
})

module.exports = connection;