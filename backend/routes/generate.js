/**
 * GERADOR DE PÁGINA — NEON TECH
 * Backend — routes/generate.js
 */

'use strict';

const express = require('express');
const router = express.Router();
const { generatePage } = require('../controllers/generateController');

/**
 * POST /api/generate
 * Body: { "tema": "string" }
 * Response: { "html": "...", "css": "...", "js": "...", "completo": "..." }
 */
router.post('/generate', generatePage);

module.exports = router;
