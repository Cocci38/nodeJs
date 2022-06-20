let mysql = require('mysql');

console.log('Get connection ...');

var connection = mysql.createConnection({
    database: "testnodejs",
    host: "localhost",
    user: "root",
    password: "root"
});

connection.connect(function(err){
    if (err) throw err;
    console.log("Connected!");


// var sql1 = "DROP TABLE IF EXISTS Employes";

// connection.query(sql1, function(err, results) {
//     if (err) throw err;
//     console.log("Table Employes dropped");
//     });

// var sql2 = "CREATE TABLE Employes(id INT AUTO_INCREMENT PRIMARY KEY, firstName VARCHAR(255), lastName VARCHAR(255), hire_date DATE)";

//     connection.query(sql2, function(err, results) {
//         if (err) throw err;
//         console.log("Table Employés créée");
//     });

    var firstNames = ["John", "Jack", "Paul"];
    var fullNames = ["Hikes", "Smith", "Gates"];
    var hireDates = ["22/10/2001", "11/11/2000", "12/12/1990"];

    for (let index = 0; index < firstNames.length; index++) {
        var sql3 = "INSERT INTO employes (firstName, lastName, hire_date) VALUES ('"+
            firstNames[index]  +"'  ,'" + fullNames[index]+"', STR_TO_DATE('" + hireDates[index]+"', '%d/%m/%Y'))"

        connection.query(sql3, function(err, results){
            if (err ) throw err;
            console.log("Insert a record");
        })
        
    }
});