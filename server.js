// NPM REQUIRES
var express = require('express');
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var mysql = require("mysql");

// USE THIS PORT
var PORT = process.env.PORT || 8080;

// CREATING CONNECTION TO MYSQL DATABASE
var connection = mysql.createConnection({
    host    : 'localhost',
    user    : 'root',
    password: '',
    database: 'SNL'
});

// CONNECTING TO MYSQL DATABASE
connection.connect(function(error) {
    if (error) {
        throw error;
    }
    console.log('Connected to MySQL server, as ID = ', connection.threadId);
});

// EXPRESS NPM PACKAGE
var app = express();

// override with the X-HTTP-Method-Override header in the request
app.use(methodOverride('X-HTTP-Method-Override'));

// express-handlebars npm package
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// BODY-PARSER NPM PACKAGE
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

// USE STATIC FILES IN PUBLIC FOLDER
app.use(express.static('app/public'));

// LISTENING TO PORT
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
})