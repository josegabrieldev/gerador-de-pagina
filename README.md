# 🚀 Gerador de Página — Neon Tech AI
 
> Gere sites completos com inteligência artificial em segundos. Digite um tema e receba HTML, CSS e JavaScript prontos para usar — com design moderno, responsivo e estilizado no tema Neon Tech.
 
**Backend ao vivo:** [https://gerador-de-pagina-api.onrender.com](https://gerador-de-pagina-api.onrender.com)
 
---
 
## 📋 Índice
 
- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Preview](#preview)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Tecnologias](#tecnologias)
- [Pré-requisitos](#pré-requisitos)
- [Instalação e Configuração](#instalação-e-configuração)
- [Como Rodar Localmente](#como-rodar-localmente)
- [Servidor em Produção (Render)](#servidor-em-produção-render)
- [API — Documentação](#api--documentação)
- [Variáveis de Ambiente](#variáveis-de-ambiente)
- [Modelos de IA Disponíveis](#modelos-de-ia-disponíveis)
- [Aviso sobre o Plano Gratuito do Render](#aviso-sobre-o-plano-gratuito-do-render)
- [Licença](#licença)
---
 
## Sobre o Projeto
 
O **Gerador de Página** é uma aplicação web que usa IA (Groq + LLaMA) para criar sites completos automaticamente. O usuário digita um tema — como "padaria", "pizzaria" ou "clínica odontológica" — e a aplicação retorna uma página HTML responsiva, moderna e funcional em segundos.
 
O projeto é dividido em duas partes independentes:
 
- **Frontend** — interface em HTML, CSS e JavaScript puro, sem frameworks
- **Backend** — servidor Node.js com Express que se comunica com a API da Groq de forma segura, protegendo a chave de API do usuário final
---
 
## Funcionalidades
 
- **Geração com IA** — usa o modelo LLaMA 3.3 70B via Groq para criar páginas completas
- **Preview interativo** — visualiza o resultado em iframe com simulação de Desktop, Tablet e Mobile
- **Abas de código** — exibe HTML, CSS, JavaScript e código completo separadamente, com syntax highlight
- **Formatação automática** — o código gerado é indentado e formatado para facilitar a leitura
- **Copiar código** — botão para copiar qualquer seção com um clique
- **Download** — baixa a página gerada como arquivo `.html` pronto para usar
- **Temas claro e escuro** — toggle animado com persistência via localStorage
- **Partículas animadas** — background interativo feito com canvas
- **Atalhos de tema** — botões de acesso rápido para temas populares
- **Mensagens de erro específicas** — cada tipo de erro (400, 429, 500, 503, rede) exibe uma mensagem clara e amigável
- **Acessível** — ARIA labels, navegação por teclado e suporte a leitores de tela
- **Otimizado para desktop** — o preview interativo funciona melhor em telas maiores; no celular e tablet o download do `.html` gerado abre perfeitamente no navegador
---
 
## Preview
 
```
┌─────────────────────────────────────────────────────┐
│  ⬡ Gerador.AI                          [🌙 Tema]   │
├─────────────────────────────────────────────────────┤
│                                                     │
│         Gere páginas completas                      │
│         com inteligência artificial                 │
│                                                     │
│    [ 🔍 Digite o tema da página... ]               │
│                                                     │
│           [ ⚡ GERAR PÁGINA ]                      │
│                                                     │
│  Populares: 🍽️ Restaurante  💪 Academia            │
│             🎨 Portfólio    🦷 Clínica              │
└─────────────────────────────────────────────────────┘
```
 
---
 
## Estrutura de Pastas
 
```
gerador-de-pagina/
│
├── index.html          # Estrutura principal da aplicação
│
├── frontend/
│   ├── style.css           # Estilos com tema Neon Tech (claro/escuro)
│   ├── script.js           # Lógica da interface, preview e formatação de código
│   └── assets/
│       └── icons.svg       # Ícones SVG inline
│
├── backend/
│   ├── server.js                        # Entry point — Express, CORS, middlewares
│   ├── package.json                     # Dependências do projeto
│   ├── package-lock.json                # Versões exatas instaladas (não editar manualmente)
│   ├── .env                             # Modelo de variáveis de ambiente
│   ├── .gitignore                       # Arquivos ignorados pelo Git
│   ├── routes/
│   │   └── generate.js                  # Rota POST /api/generate
│   ├── controllers/
│   │   └── generateController.js        # Validação e controle de fluxo
│   └── services/
│       └── iaService.js                 # Integração com a API da Groq
│
├── .gitattributes      # Configurações de linha do Git
├── LICENSE
└── README.md
```
 
---
 
## Tecnologias
 
### Frontend
| Tecnologia | Versão | Uso |
|---|---|---|
| HTML5 | — | Estrutura semântica e acessível |
| CSS3 | — | Variáveis, animações, grid, flexbox, glassmorphism |
| JavaScript ES2020 | — | Fetch API, Canvas, DOM, Blob URL |
| Google Fonts | — | Orbitron, Rajdhani, JetBrains Mono |
 
### Backend
| Tecnologia | Versão | Uso |
|---|---|---|
| Node.js | ≥ 18.0.0 | Runtime |
| Express | ^4.19.2 | Framework HTTP |
| groq-sdk | ^0.7.0 | Cliente oficial da API Groq |
| cors | ^2.8.5 | Controle de origens permitidas |
| dotenv | ^16.4.5 | Variáveis de ambiente |
| nodemon | ^3.1.4 | Auto-reload em desenvolvimento |
 
---
 
## Pré-requisitos
 
Antes de começar, você precisa ter instalado:
 
- **Node.js v18+** — [nodejs.org](https://nodejs.org)
- **npm v8+** — incluído com o Node.js
- **Chave de API da Groq** — [console.groq.com](https://console.groq.com) (gratuita)
---
 
## Instalação e Configuração
 
### 1. Clone o repositório
 
```bash
git clone https://github.com/seu-usuario/gerador-de-pagina.git
cd gerador-de-pagina
```
 
### 2. Instale as dependências do backend
 
```bash
cd backend
npm install
```
 
### 3. Configure as variáveis de ambiente
 
Abra o arquivo `.env` e preencha com sua chave da Groq:
 
```env
GROQ_API_KEY=gsk_SUA_CHAVE_AQUI
GROQ_MODEL=llama-3.3-70b-versatile
PORT=3001
```
 
> ⚠️ **Nunca compartilhe seu `.env` nem faça commit dele no Git.** O arquivo já está listado no `.gitignore`.
 
---
 
## Como Rodar Localmente
 
### Iniciando o backend
 
```bash
# Dentro da pasta /backend
 
# Modo desenvolvimento (reinicia automaticamente ao salvar)
npm run dev
 
# Modo produção
npm start
```
 
Você verá no terminal:
 
```
🚀 Gerador de Página — Backend rodando!
📡 Servidor: http://localhost:3001
🔑 API Key configurada: ✅ Sim
🌐 CORS ativo para origens configuradas
```
 
### Abrindo o frontend
 
O frontend é HTML/CSS/JS puro — não precisa de servidor.
 
**Opção 1 — Abrir direto no navegador:**
```bash
# macOS
open index.html
 
# Windows
start index.html
 
# Linux
xdg-open index.html
```
 
**Opção 2 — Live Server (VS Code):**
1. Instale a extensão **Live Server**
2. Clique com botão direito em `index.html`
3. Selecione **"Open with Live Server"**
**Opção 3 — Python:**
```bash

python3 -m http.server 3000
# Acesse: http://localhost:3000
```
 
> O frontend aponta para `http://localhost:3001` por padrão enquanto rodando localmente.
 
---
 
## Servidor em Produção (Render)
 
O backend está hospedado no **Render**, acessível 24 horas por dia sem precisar do seu computador ligado.
 
**URL do servidor:** `https://gerador-de-pagina-api.onrender.com`
 
### Como fazer o deploy no Render
 
1. Crie uma conta em [render.com](https://render.com) (pode entrar com GitHub)
2. Clique em **New → Web Service**
3. Selecione o repositório do projeto no GitHub
4. Configure o serviço:
   - **Root Directory:** `backend`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Instance Type:** Free
5. Em **Environment Variables**, adicione:
   - `GROQ_API_KEY` → sua chave da Groq
   - `GROQ_MODEL` → `llama-3.3-70b-versatile`
6. Clique em **Create Web Service**
### Verificar se o servidor está no ar
 
Acesse no navegador:
 
```
https://gerador-de-pagina-api.onrender.com/health
```
 
Resposta esperada:
```json
{
  "status": "ok",
  "version": "1.0.0",
  "service": "Gerador de Página API"
}
```
 
---
 
## ⚠️ Aviso sobre o Plano Gratuito do Render
 
O plano gratuito do Render tem uma limitação importante: **o servidor entra em modo de hibernação após 15 minutos de inatividade**.
 
Quando o servidor está hibernando, a **primeira requisição demora entre 30 e 60 segundos** para responder — tempo necessário para o servidor "acordar". Após isso, todas as requisições seguintes respondem normalmente (2 a 3 segundos).
 
**O que o usuário vai ver:** ao gerar a primeira página após um período sem uso, o botão ficará no estado "Gerando..." por mais tempo que o normal. Isso não é um erro — é o servidor acordando.
 
**Como evitar:** planos pagos do Render mantêm o servidor sempre ativo. Outra opção é usar um serviço externo de "ping" (como o [UptimeRobot](https://uptimerobot.com)) para fazer requisições periódicas ao `/health` e manter o servidor acordado gratuitamente.
 
---
 
## API — Documentação
 
### `POST /api/generate`
 
Gera uma página web completa para o tema informado.
 
**Request:**
```http
POST https://gerador-de-pagina-api.onrender.com/api/generate
Content-Type: application/json
 
{
  "tema": "padaria artesanal"
}
```
 
**Resposta de sucesso (200):**
```json
{
  "success": true,
  "tema": "padaria artesanal",
  "html": "<header>...</header><main>...</main>...",
  "css": ":root { --primary: #... } body { ... }",
  "js": "// Menu mobile\ndocument.querySelector...",
  "completo": "<!DOCTYPE html><html>...</html>",
  "geradoEm": "2025-05-28T10:30:00.000Z"
}
```
 
**Respostas de erro:**
 
| Status | Significado | Mensagem ao usuário |
|---|---|---|
| 400 | Tema inválido ou muito curto | "O tema enviado é inválido. Digite um tema com pelo menos 2 caracteres." |
| 429 | Limite da API atingido | "Muitas requisições em pouco tempo. Aguarde alguns segundos e tente novamente." |
| 500 | Erro interno no servidor | "Erro interno no servidor. A IA pode estar sobrecarregada, tente novamente." |
| 503 | Servidor indisponível | "Servidor temporariamente indisponível. Tente novamente em alguns instantes." |
| Rede | Servidor offline | "Não foi possível conectar ao servidor. Verifique se o backend está rodando." |
 
---
 
### `GET /health`
 
Verifica se o servidor está online.
 
```http
GET https://gerador-de-pagina-api.onrender.com/health
```
 
```json
{
  "status": "ok",
  "version": "1.0.0",
  "timestamp": "2025-05-28T10:30:00.000Z",
  "service": "Gerador de Página API"
}
```
 
---
 
## Variáveis de Ambiente
 
Crie o arquivo `backend/.env` :
 
| Variável | Obrigatório | Padrão | Descrição |
|---|---|---|---|
| `GROQ_API_KEY` | ✅ Sim | — | Chave da API da Groq |
| `GROQ_MODEL` | Não | `llama-3.3-70b-versatile` | Modelo de IA a usar |
| `PORT` | Não | `3001` | Porta do servidor |
| `ALLOWED_ORIGINS` | Não | Lista padrão | Origens CORS permitidas (separadas por vírgula) |
 
---
 
## Modelos de IA Disponíveis
 
Configure o modelo pelo campo `GROQ_MODEL` no `.env`:
 
| Modelo | Velocidade | Qualidade | Recomendação |
|---|---|---|---|
| `llama-3.3-70b-versatile` | Rápido | ⭐⭐⭐⭐⭐ | **Padrão — melhor equilíbrio** |
| `llama-3.1-8b-instant` | Muito rápido | ⭐⭐⭐ | Testes e desenvolvimento |
| `mixtral-8x7b-32768` | Médio | ⭐⭐⭐⭐ | Contexto longo |
| `gemma2-9b-it` | Rápido | ⭐⭐⭐ | Alternativa leve |
 
---
 
## Solução de Problemas
 
**Backend não inicia:**
```bash
# Verifique a versão do Node
node --version  # Deve ser v18+
 
# Reinstale as dependências
cd backend && rm -rf node_modules && npm install
```
 
**"API Key não configurada":**
```bash
# Verifique se o .env existe e tem a chave preenchida
cat backend/.env
```
 
**Erro de CORS no frontend:**
Certifique-se de que a origem do frontend está na lista `ALLOWED_ORIGINS` do `.env`, ou abra o `index.html` diretamente no navegador.
 
**Preview não carrega:**
O iframe usa `sandbox` por segurança. Alguns scripts externos podem ser bloqueados — comportamento esperado do browser.
 
---
 
## .gitignore recomendado
 
```
backend/node_modules/
backend/.env
*.log
.DS_Store
Thumbs.db
```
 
---
 
## Licença
 
MIT License — livre para usar, modificar e distribuir.
 
---
 
<div align="center">
  Feito com ❤️ · <strong>Gerador.AI</strong> · Powered by Groq + LLaMA
</div>