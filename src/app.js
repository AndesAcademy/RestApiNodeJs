var express =require('express');
var {json} =require('express');
var morgan =require('morgan');
 
var userRoutes = require('./routes/user');
var eventoRoutes = require('./routes/evento');
var eventoUserRoutes = require('./routes/eventoUser');

 
var app = express();
 
//middleware
 
app.use(morgan('dev'));//para ver las peticiones que llegan al servidor
app.use(json());//para procesar los datos en formato JSON

//routes
app.use('/api/user',userRoutes);
app.use('/api/evento',eventoRoutes);
app.use('/api/eventoUser',eventoUserRoutes)
 
module.exports=app; //exportamos la variable app