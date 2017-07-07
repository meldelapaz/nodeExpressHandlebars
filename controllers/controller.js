var mysql = require("mysql");
var app = require("../server.js");
console.log("app", app);
//module.exports = {

    // Creating the connection to the mysql database
    // var connection = mysql.createConnection({
    //     host: 'localhost',
    //     user: 'root',
    //     password: '',
    //     database: 'SNL'
    // });

    // app.get("/", function (req, res) {
    //     connection.query("SELECT * FROM `season` JOIN `episode` WHERE `season`.`sid` = `episode`.`sid`;",
    //         function (err, data) {
    //             console.log(data);
    //             if (err) {
    //                 throw err;
    //             }
    //
    //             res.render("index", {cities: data, cost: data});
    //
    //         });
    // });
//}