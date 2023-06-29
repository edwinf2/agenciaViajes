// const express = require('express'); //Forma actigua
import express from "express"; //Nueva version
import router from "./routes/index.js";
import db from "./config/db.js";
import dotenv from "dotenv/config";

// console.log(process.env.DB_HOST)

const app = express();

//Conectar la BBDD
db.authenticate()
    .then( () => console.log('Base de datos conectada'))
    .catch( error => console.log(error) );



//Definir puerto //Variables de entorno
const port = process.env.PORT || 4000;

//Habilitar PUG
app.set('view engine', 'pug');

//Middelware propio //Obtener el año actual
app.use( (request, response, next) => {
    const year = new Date();
    response.locals.actualYear = year.getFullYear();
    response.locals.nombreSitio = "Agencia de Viajes";
    
    return next();
});

//Agregar body parser para leer los datos del formulario
app.use(express.urlencoded({extended: true}));

//Definir la carpeta publica
app.use(express.static('public'));

//Agregar router
app.use('/', router);

app.listen( port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`)
});
