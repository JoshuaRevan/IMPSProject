// Este archivo sera utilizado para configurar todas las rutas principales del sistema
const express = require('express');
const router = express.Router();
const estudianteRepository = require('../repositories/EstudianteRepository');
const { isLoggedIn } = require('../lib/auth');
// Configuracion de ruta inicial de la aplicacion
router.get('/', (req, res) => {
    res.send('Hello, world!');
});

module.exports = router;