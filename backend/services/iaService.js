/**
 * GERADOR DE PÁGINA — NEON TECH
 * Backend — services/iaService.js
 *
 * Responsável por:
 *  1. Montar o prompt para a IA
 *  2. Chamar a API da Groq
 *  3. Parsear e retornar o HTML/CSS/JS separados
 */

'use strict';

const Groq = require('groq-sdk');

// Inicializa o cliente apenas uma vez (Singleton)
let client = null;

function getClient() {
  if (!client) {
    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      throw new Error(
        'GROQ_API_KEY não configurada. Adicione ao arquivo .env:\nGROQ_API_KEY=gsk_...'
      );
    }
    // O SDK da Groq já aponta para https://api.groq.com automaticamente
    client = new Groq({ apiKey });
  }
  return client;
}

/**
 * Monta o prompt enviado para a IA
 */
function buildPrompt(tema) {
  return `Você é um desenvolvedor web expert. Crie uma página web COMPLETA, MODERNA e BONITA para o tema: "${tema}".

REQUISITOS OBRIGATÓRIOS:
- Design: Neon Tech (cores escuras com efeitos neon)
- Responsivo: Mobile-first
- Moderno e visualmente impressionante
- Conteúdo realista e profissional para o tema
- Inclua: header, hero section, seção de serviços/produtos, sobre, contato e footer
- Animações suaves com CSS
- Fontes do Google Fonts (carregue via link no HTML)

RETORNE EXATAMENTE neste formato JSON (sem explicações, apenas o JSON):
{
  "html": "<!-- Apenas o conteúdo DENTRO do body, sem <html>, <head>, <body> tags -->",
  "css": "/* CSS completo incluindo variáveis, reset, animações e todo estilo */",
  "js": "// JavaScript completo com funcionalidades interativas",
  "completo": "<!DOCTYPE html>... (página HTML completa e autossuficiente com tudo embutido)"
}

IMPORTANTE:
- O campo "completo" deve ser uma página 100% funcional que funciona sozinha
- O HTML no "html" deve ser apenas o corpo (sem <html>, <head>, <body>)
- O CSS deve ser extenso e detalhado, com variáveis CSS e animações
- O JS deve adicionar interatividade (menu mobile, scroll suave, animações, etc.)
- Use emojis estrategicamente no conteúdo
- Retorne SOMENTE o JSON, sem markdown, sem \`\`\`, sem explicações`;
}

/**
 * Chama a API da Groq e parseia a resposta
 */
async function callIA(tema) {
  const ai = getClient();
  const prompt = buildPrompt(tema);

  console.log(`[iaService] Chamando Groq API para tema: "${tema}"`);

  const response = await ai.chat.completions.create({
    model: process.env.GROQ_MODEL || 'llama-3.3-70b-versatile',
    max_tokens: 8192,
    temperature: 0.7,       // 0 = mais previsível, 1 = mais criativo
    messages: [
      {
        role: 'system',
        content: 'Você é um desenvolvedor web expert. Sempre retorne APENAS JSON válido, sem texto extra, sem markdown, sem explicações.',
      },
      {
        role: 'user',
        content: prompt,
      },
    ],
  });

  // Na API da Groq (padrão OpenAI) o texto vem em choices[0].message.content
  const rawText = response.choices[0]?.message?.content || '';

  console.log(`[iaService] Resposta recebida (${rawText.length} chars). Parseando...`);

  // Parseia o JSON retornado
  const parsed = parseIAResponse(rawText);
  return parsed;
}

/**
 * Extrai JSON da resposta da IA com tratamento robusto de erros
 */
function parseIAResponse(rawText) {
  // Remove possíveis blocos de markdown
  let clean = rawText.trim();
  clean = clean.replace(/^```(?:json)?\n?/i, '').replace(/\n?```$/i, '').trim();

  // Tenta parse direto
  try {
    const parsed = JSON.parse(clean);
    return validateAndNormalize(parsed);
  } catch (e) {
    console.warn('[iaService] Parse direto falhou, tentando extrair JSON...');
  }

  // Tenta extrair o JSON do texto (busca pelo primeiro { até o último })
  const jsonMatch = clean.match(/\{[\s\S]*\}/);
  if (jsonMatch) {
    try {
      const parsed = JSON.parse(jsonMatch[0]);
      return validateAndNormalize(parsed);
    } catch (e) {
      console.warn('[iaService] Extração de JSON também falhou.');
    }
  }

  // Fallback: retorna como código completo bruto
  console.warn('[iaService] Usando fallback — retornando texto bruto como completo');
  return {
    html: '<!-- Não foi possível separar o HTML -->',
    css: '/* Não foi possível separar o CSS */',
    js: '// Não foi possível separar o JavaScript',
    completo: clean,
  };
}

/**
 * Valida e normaliza o objeto retornado pela IA
 */
function validateAndNormalize(obj) {
  if (typeof obj !== 'object' || obj === null) {
    throw new Error('Resposta da IA não é um objeto válido');
  }

  const html = String(obj.html || '').trim();
  const css = String(obj.css || '').trim();
  const js = String(obj.js || '').trim();

  // Constrói o completo se não foi fornecido
  let completo = String(obj.completo || '').trim();
  if (!completo || completo.length < 100) {
    completo = buildCompleto(html, css, js);
  }

  return { html, css, js, completo };
}

/**
 * Monta a página completa a partir dos partes separados
 */
function buildCompleto(html, css, js) {
  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Página Gerada — Neon Tech</title>
  <style>
${css}
  </style>
</head>
<body>
${html}
  <script>
${js}
  <\/script>
</body>
</html>`;
}

module.exports = { callIA };
