/**
 * GERADOR DE PÁGINA — NEON TECH
 * Backend — server.js
 */

'use strict';

require('dotenv').config();

const express = require('express');
const cors = require('cors');
const generateRoutes = require('./routes/generate');

const app = express();
const PORT = process.env.PORT || 3001;

// ---- MIDDLEWARE ----
app.use(cors({
  origin: process.env.ALLOWED_ORIGINS
    ? process.env.ALLOWED_ORIGINS.split(',')
    : ['http://localhost:3000', 'http://127.0.0.1:3000', 'http://localhost:5500', 'http://127.0.0.1:5500', 'null'],
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true }));

// ---- REQUEST LOGGER ----
app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.path}`);
  next();
});

// ---- HEALTH CHECK ----
app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
    service: 'Gerador de Página API',
  });
});

// ---- ROUTES ----
app.use('/api', generateRoutes);

// ---- 404 HANDLER ----
app.use((req, res) => {
  res.status(404).json({
    error: true,
    message: `Rota não encontrada: ${req.method} ${req.path}`,
  });
});

// ---- ERROR HANDLER ----
app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  console.error('[ERRO]', err.message || err);
  res.status(err.status || 500).json({
    error: true,
    message: err.message || 'Erro interno do servidor',
  });
});

// ---- START ----
app.listen(PORT, () => {
  console.log('\n🚀 Gerador de Página — Backend rodando!');
  console.log(`📡 Servidor: http://localhost:${PORT}`);
  console.log(`🔑 API Key configurada: ${process.env.GROQ_API_KEY ? '✅ Sim' : '❌ Não (configure no .env)'}`);
  console.log(`🌐 CORS ativo para origens configuradas`);
  console.log('────────────────────────────────────────\n');
});

module.exports = app;
