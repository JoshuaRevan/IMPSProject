const express = require('express');

//Inicilaizaciones 
const app = express();

// Ajustes del servidor 
app.set('port', process.env.PORT || 4000);

// Iniciar el Servidor 
app.listen(app.get('port'),() => {
    console.log('servidor iniciando en el puerto: ', app.get('port'));
});