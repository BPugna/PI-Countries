const { Router } = require('express');
const rutaCountries = require('./countries');
const rutaActivity = require('./activity');

const router = Router();

router.use('/countries', rutaCountries);
router.use('/activity', rutaActivity);


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
