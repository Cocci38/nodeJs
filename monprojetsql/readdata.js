let mysql = require('mysql');

console.log('Get connection...');

var connection = mysql.createConnection({
    database: 'testnodejs',
    host: "localhost",
    user: "root",
    password: "root"
});

connection.connect(function(err){
    if (err) throw err;
    console.log("Connected!");

    var sql_template = "Select * from ?? Where hire_date > STR_TO_DATE('20/11/1995', '%d/%m/%Y')";

    var replaces = ['Employes'];
    sql = mysql.format(sql_template, replaces);

    connection.query(sql, function(err, rows, fields){
        if (err) throw err;
        for (let index = 0; index < rows.length; index++) {
            console.log(rows[index]);
        }
    });
});