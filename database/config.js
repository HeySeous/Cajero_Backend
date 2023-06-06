const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'',
    database: 'grillstore',

})

connection.connect((err) => {
    if (err) {
        console.log(err);
    }

    console.log('Base de datos conectada');
})

module.exports = connection;