var express = require('express');
var router = express.Router();
var vejret      = require('../lib/weather');

// https://github.com/Surnet/swagger-jsdoc/blob/master/docs/GETTING-STARTED.md

/**
 * @swagger
 *
 * /api/v1/weather:
 *   get:
 *     description: Weather Info
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: weather
 */
router.get('/', (req, res, next) => {
  vejret( data =>  res.json(data) )
});

module.exports = router;
