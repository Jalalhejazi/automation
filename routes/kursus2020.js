const express = require('express');
const router = express.Router();
const kursus = require('../lib/kursus')

/**
 * @swagger
 *
 * /api/v2/kursus:
 *   get:
 *     description: Kursus Info for year [2020, 2021]
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: kursus
 */
router.get('/', (req, res, next) => {
  const dato = req.query.dato
  kursus.getKursusFromJSON(dato, data => res.json(data))
});

module.exports = router;
