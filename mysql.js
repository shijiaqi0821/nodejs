var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : '192.168.62.132',
    user     : 'root',
    password : 'root',
    database : '1906'
});

connection.connect();

connection.query('SELECT * from p_users', function (error, results, fields) {
    if (error) throw error;
    console.log(results);
});

connection.end();