const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const dogsRouter = require ('./dogs')
const temperamentRouter = require ('./temperament')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/dogs', dogsRouter) // .../app/dogs/
router.use('/temperament', temperamentRouter) // .../app/temperament/

module.exports = router;
