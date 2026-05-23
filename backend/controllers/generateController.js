/**
 * GERADOR DE PÁGINA — NEON TECH
 * Backend — controllers/generateController.js
 */

'use strict';

const { callIA } = require('../services/iaService');

/**
 * POST /api/generate
 * Valida input, chama o serviço de IA e retorna o código estruturado.
 */
async function generatePage(req, res, next) {
  try {
    const { tema } = req.body;

    // ---- VALIDAÇÃO ----
    if (!tema || typeof tema !== 'string') {
      return res.status(400).json({
        error: true,
        message: 'O campo "tema" é obrigatório e deve ser uma string.',
      });
    }

    const temaClean = tema.trim().slice(0, 100);

    if (temaClean.length < 2) {
      return res.status(400).json({
        error: true,
        message: 'O tema deve ter pelo menos 2 caracteres.',
      });
    }

    console.log(`[generateController] Gerando página para tema: "${temaClean}"`);

    // ---- CHAMA A IA ----
    const result = await callIA(temaClean);

    // ---- RESPOSTA ----
    return res.status(200).json({
      success: true,
      tema: temaClean,
      html: result.html,
      css: result.css,
      js: result.js,
      completo: result.completo,
      geradoEm: new Date().toISOString(),
    });

  } catch (err) {
    console.error('[generateController] Erro:', err.message);
    next(err);
  }
}

module.exports = { generatePage };
