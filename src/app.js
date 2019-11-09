var express = require('express');
var { json } = require('express');
var morgan = require('morgan');

var userRoutes = require('./routes/user');
var eventoRoutes = require('./routes/evento');
var eventoUserRoutes = require('./routes/eventoUser');


var app = express();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
});

//middleware 
app.use(morgan('dev'));//para ver las peticiones que llegan al servidor
app.use(json());//para procesar los datos en formato JSON

//routes
app.use('/api/user', userRoutes);
app.use('/api/evento', eventoRoutes);
app.use('/api/eventoUser', eventoUserRoutes)

module.exports = app; //exportamos la variable app