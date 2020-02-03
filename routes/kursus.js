const express = require('express');
const router = express.Router();
const kursus = require('../lib/kursus')

/**
 * @swagger
 *
 * /api/v1/kursus:
 *   get:
 *     description: Kursus Info
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: kursus
 */
router.get('/', (req, res, next) => {
  const dato = req.query.dato
  kursus.getKursusByDate(dato, data => res.json(data))
});

module.exports = router;
