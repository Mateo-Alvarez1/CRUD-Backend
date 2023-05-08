//! CONFIGURACION EXPRESS
//Importar express
const express = require('express');
const { dbConnection } = require('./database/config');
const cors = require('cors')
require('dotenv').config()  //? Funcion utilizada para cargar las variables de entorno definidas en un archivo '.env' 
                            //? Config() es una funcion que se encuentra en el modulo 'dotenv' -> Que debe ser instalado
                            //? a traves de NPM y lo que hace es leer el archivo '.env'


// crear el servidor de express 
const app = express()

//Base de datos 
dbConnection();

//CORS
app.use(cors())

//Directorio Publico 
//? El 'use' en express es utilizado como un midlleware -> Funcion que se ejecuta cuando el usuario hace una peticion 
//? El 'static' en express es utilizado como middleware para servir automaticamente archivos estaticos que se encuentren en un directorio especificado 
app.use( express.static( 'public' ) ) ;

//Lectura y Paseo del body 
app.use(express.json());


//Rutas 
app.use('/api/auth' , require('./routes/auth'))
app.use('/api/events' , require('./routes/events'))


//TODO: CRUD : Eventos 

//Escuchar Peticiones 
//* BackendServer creado  
app.listen( process.env.PORT , () => {
    console.log(`Servidor corriendo en puerto ${ 4000 }`)
} )

