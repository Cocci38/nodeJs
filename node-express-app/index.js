const express = require('express');

// La constante app est l’instance de la classe Express. Elle contiendra le serveur et ses méthodes.
const app = express();
app.listen(5000, ()=> {
    console.log('Server is listening @5000');
});

let mysql = require('mysql');
console.log('Get connection ...');

var connection = mysql.createConnection({
    database: 'resto',
    host: "localhost",
    user: "root",
    password: "root"
});

connection.connect(function(err){
    if (err) throw err;
    console.log("Connected!");

// var sql1 = "DROP TABLE IF EXISTS restaurants";

// connection.query(sql1, function(err, results) {
//     if (err) throw err;
//     console.log("Table restaurants dropped");
//     });

// var sql2 = "CREATE TABLE restaurants(id_restaurants INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(100), city VARCHAR(100), nbcouverts INT(10), terrasse VARCHAR(3), parking VARCHAR(3))";

//     connection.query(sql2, function(err, results) {
//         if (err) throw err;
//         console.log("Table restaurants créée");
//     });

//     var sql1 = "DROP TABLE IF EXISTS employes";

// connection.query(sql1, function(err, results) {
//     if (err) throw err;
//     console.log("Table employes dropped");
//     });

// var sql2 = "CREATE TABLE employes (id_employes INT AUTO_INCREMENT PRIMARY KEY, first_name VARCHAR(100), last_name VARCHAR(100), hire_date DATE, restaurant_id INT)";

    // connection.query(sql2, function(err, results) {
    //     if (err) throw err;
    //     console.log("Table Employés créée");
    // });

    // Middleware
    app.use(express.json());

    app.post('/restaurant', (req, res) =>{
        let sql = "INSERT INTO restaurants (name, city, nbcouverts, terrasse, parking) " + "VALUES ('" + req.body.name + "', '"
                            + req.body.city + "', '"
                            + req.body.nbcouverts + "', '"
                            + req.body.terrasse + "', '"
                            + req.body.parking + "')";
        connection.query(sql, function(err, results){
            if (err) throw err;
            console.log("Insert a record !");
        });
        res.status(200);
    });

    app.get('/restaurants', (req, res) => {
        var sql_template = "Select * From ?? ";
        var replaces = ['restaurants'];

        sql = mysql.format(sql_template, replaces);

        connection.query(sql, function(err, rows){
            if (err) throw err;
            res.send(rows)
        });
        res.status(200);
    });

    app.get('/restaurants/:id',  (req, res) => {
        let id = parseInt(req.params.id);

        let sql_template = "Select * From ?? WHERE ?? = " + id;
        let replaces = ['restaurants', 'id_restaurants'];

        sql = mysql.format(sql_template, replaces);

        connection.query(sql, function(err, row, fields){
            if (err) throw err;
            res.send(row);
        });
        res.status(200);
    });

    app.put('/restaurants/:id', (req, res) => {
        let id = parseInt(req.params.id);

        let sql_template = "Update ?? Set name = '" + req.body.name + "', city = '"+ req.body.city +"', nbcouverts = '"+ req.body.nbcouverts+"', terrasse = '"+ req.body.terrasse + "', parking = '"+req.body.parking + "' WHERE ?? = "+id;
        let replaces = ['restaurants', 'id_restaurants'];

        sql = mysql.format(sql_template, replaces);
        connection.query(sql, function(err, row, fields){
            if (err) throw err;
            res.send(row);
        });

        res.status(200);
    });

    app.delete('/restaurants/:id', (req, res) => {
        let id = parseInt(req.params.id);

        let sql_template = "Delete From ??, ?? USING ?? INNER JOIN ?? WHERE ??.?? = "+id+" AND ??.?? = "+id;
        let replaces = ['restaurants', 'employes', 'restaurants', 'employes', 'restaurants', 'id_restaurants', 'employes', 'restaurant_id', 'id_restaurants'];

        sql = mysql.format(sql_template, replaces);
        connection.query(sql, function(err, row, fields){
            if (err) throw err;
            res.send(row);
        });
        res.status(200);
    });

    app.post('/restaurants/:id/employe', (req, res) => {
        let id = parseInt(req.params.id);

        let sql = "INSERT INTO employes (first_name, last_name, hire_date, restaurant_id) " + "VALUES ('" + req.body.first_name + "', '"
        + req.body.last_name + "', '"
        + req.body.hire_date + "', '"
        + id + "')";

        connection.query(sql, function(err, results){
            if (err) throw err;
            console.log("Insert a record !");
});

        res.status(200);
    });

    app.get('/restaurants/:id/employes', (req, res) => {
        let id = parseInt(req.params.id);
        var sql_template = "Select first_name, last_name, hire_date, name From ?? Join ?? ON ?? = ??.?? WHERE ?? = "+id;
        var replaces = ['employes', 'restaurants', 'restaurant_id', 'restaurants', 'id_restaurants', 'restaurant_id'];

        sql = mysql.format(sql_template, replaces);

        connection.query(sql, function(err, rows){
            if (err) throw err;
            res.send(rows)
        });
        res.status(200);
    });

    app.get('/restaurants/:id/employes/:idEmploye', (req, res) => {
        let id = parseInt(req.params.id);
        let idEmploye = parseInt(req.params.idEmploye);

        var sql_template = "Select first_name, last_name, hire_date, name From ?? Join ?? ON ?? = ??.?? WHERE ?? = "+id +" AND ?? = "+idEmploye;
        var replaces = ['employes', 'restaurants', 'restaurant_id', 'restaurants', 'id_restaurants', 'restaurant_id', 'id_employes'];

        sql = mysql.format(sql_template, replaces);

        connection.query(sql, function(err, rows){
            if (err) throw err;
            res.send(rows)
        });
        res.status(200);
    });

    app.put('/restaurants/:id/employes/:idEmploye', (req, res) => {
        let id = parseInt(req.params.id);
        let idEmploye = parseInt(req.params.idEmploye);

        let sql_template = "Update ?? Set first_name = '" + req.body.first_name + "', last_name = '"+ req.body.last_name +"', hire_date = '"+ req.body.hire_date+"' WHERE ?? = "+id +" AND ?? = "+idEmploye;
        let replaces = ['employes', 'restaurant_id', 'id_employes'];

        sql = mysql.format(sql_template, replaces);
        connection.query(sql, function(err, row, fields){
            if (err) throw err;
            res.send(row);
        });

        res.status(200);
    });

    app.delete('/restaurants/:id/employes/:idEmploye', function (req, res){
        let id = parseInt(req.params.id);
        let idEmploye = parseInt(req.params.idEmploye);

        let sql_template = "Delete From ?? WHERE ?? = "+id +" AND ?? = "+idEmploye;
        let replaces = ['employes', 'restaurant_id', 'id_employes'];

        sql = mysql.format(sql_template, replaces);
        connection.query(sql, function(err, row, fields){
            if (err) throw err;
            res.send(row);
        });
        res.status(200);
    });

    app.delete('/employe/:id', (req, res) => {
        let id = parseInt(req.params.id);
    
        let sql_template = "Delete From ?? WHERE ?? = "+id;
        let replaces = ['employes', 'id_employes'];
    
        sql = mysql.format(sql_template, replaces);
        connection.query(sql, function(err, row, fields){
            if (err) throw err;
            res.send(row);
        });
        res.status(200);
    });

});