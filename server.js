
const mysql = require('mysql');
// const connection = mysql.createConnection({
//     host: '35.242.141.56',
//     port: 3306,
//     user: 'demouser',
//     password: 'demopassword',
//     database: 'demodb'
// });
const connection = mysql.createConnection('mysql://demouser:demopassword@35.242.141.56/demodb');

connection.ping(function (err) {
    if (err) throw err;
    console.log('Server responded to ping');
});

connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + connection.threadId);
});

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
});

connection.end();