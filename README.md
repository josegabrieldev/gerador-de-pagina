# 🚀 Gerador de Página — Neon Tech AI

> Crie sites completos com inteligência artificial em segundos. Digite um tema e receba HTML, CSS e JavaScript prontos para usar, com design moderno Neon Tech.

---

## 📸 Preview

```
┌─────────────────────────────────────────┐
│  ⬡ Gerador.AI              [🌙 Tema]   │
├─────────────────────────────────────────┤
│                                         │
│    Gere páginas completas               │
│    com inteligência artificial          │
│                                         │
│  [ Digite o tema da página... ]         │
│                                         │
│        [ ⚡ GERAR PÁGINA ]             │
│                                         │
│  Populares: 🍽️ 💪 🎨 🦷 👗           │
└─────────────────────────────────────────┘
```

---

## ✨ Funcionalidades

- 🤖 **Geração com IA** — Usa Claude (Anthropic) para criar páginas completas
- 👁️ **Preview interativo** — Visualize o resultado em iframe responsivo
- 📱 **Modos de visualização** — Desktop, Tablet e Mobile
- 🎨 **Syntax Highlight** — Código com destaque de sintaxe
- 📋 **Copiar código** — Um clique para copiar HTML, CSS ou JS
- ⬇️ **Download** — Baixe a página gerada como arquivo `.html`
- 🌙 **Tema claro/escuro** — Toggle animado com persistência
- ✨ **Partículas animadas** — Background interativo com canvas
- ⚡ **Tags populares** — Atalhos para temas comuns
- ♿ **Acessível** — ARIA labels, navegação por teclado, alto contraste

---

## 🗂️ Estrutura do Projeto

```
gerador-de-pagina/
│
├── frontend/
│   ├── index.html          # HTML principal com estrutura completa
│   ├── style.css           # CSS com tema Neon Tech (claro/escuro)
│   ├── script.js           # JavaScript puro (sem frameworks)
│   └── assets/
│       └── icons.svg       # Ícones SVG inline
│
├── backend/
│   ├── server.js           # Entry point Express
│   ├── .env.example        # Template de variáveis de ambiente
│   ├── package.json        # Dependências Node.js
│   ├── routes/
│   │   └── generate.js     # Rota POST /api/generate
│   ├── controllers/
│   │   └── generateController.js  # Validação e controle de fluxo
│   └── services/
│       └── iaService.js    # Integração com a API da Anthropic
│
└── README.md               # Este arquivo
```

---

## 🛠️ Instalação e Configuração

### Pré-requisitos

- **Node.js** v18+ ([nodejs.org](https://nodejs.org))
- **npm** v8+ (incluso com Node.js)
- **Chave de API Anthropic** ([console.anthropic.com](https://console.anthropic.com))

---

### 1️⃣ Clone ou extraia o projeto

```bash
# Se via git:
git clone https://github.com/seu-usuario/gerador-de-pagina.git
cd gerador-de-pagina

# Ou extraia o .zip e entre na pasta:
cd gerador-de-pagina
```

---

### 2️⃣ Configure o Backend

```bash
# Entre na pasta do backend
cd backend

# Instale as dependências
npm install
```

---

### 3️⃣ Configure a API Key

```bash
# Copie o arquivo de exemplo
cp .env.example .env

# Abra o .env e adicione sua chave
# Use seu editor favorito:
nano .env
# ou
code .env
```

Edite o `.env`:
```env
ANTHROPIC_API_KEY=sk-ant-SUA_CHAVE_AQUI
PORT=3001
```

> 🔑 **Obtenha sua API Key em:** https://console.anthropic.com/
> 
> ⚠️ **NUNCA** compartilhe seu `.env` ou commite sua chave no Git!

---

### 4️⃣ Inicie o Backend

```bash
# Dentro da pasta /backend:

# Modo produção:
npm start

# Modo desenvolvimento (auto-reload):
npm run dev
```

Você verá:
```
🚀 Gerador de Página — Backend rodando!
📡 Servidor: http://localhost:3001
🔑 API Key configurada: ✅ Sim
🌐 CORS ativo para origens configuradas
```

---

### 5️⃣ Abra o Frontend

O frontend é HTML/CSS/JS puro — **não precisa de servidor**.

**Opção A — Abrir direto no navegador:**
```bash
# Navegue até a pasta frontend e abra o index.html
open frontend/index.html        # macOS
start frontend/index.html       # Windows
xdg-open frontend/index.html   # Linux
```

**Opção B — Live Server (VS Code):**
1. Instale a extensão **Live Server** no VS Code
2. Clique com botão direito em `index.html`
3. Selecione **"Open with Live Server"**

**Opção C — Python HTTP Server:**
```bash
cd frontend
python3 -m http.server 3000
# Acesse: http://localhost:3000
```

---

## 🔌 API — Documentação

### `POST /api/generate`

Gera uma página web completa para o tema informado.

**Request:**
```http
POST http://localhost:3001/api/generate
Content-Type: application/json

{
  "tema": "padaria artesanal"
}
```

**Response (200 OK):**
```json
{
  "success": true,
  "tema": "padaria artesanal",
  "html": "<header>...</header><main>...</main>...",
  "css": ":root { --primary: #... } body { ... }",
  "js": "// Menu mobile\ndocument.querySelector...",
  "completo": "<!DOCTYPE html><html>...</html>",
  "geradoEm": "2025-01-15T10:30:00.000Z"
}
```

**Response (400 Bad Request):**
```json
{
  "error": true,
  "message": "O campo \"tema\" é obrigatório e deve ser uma string."
}
```

### `GET /health`

Verifica se o servidor está online.

```json
{
  "status": "ok",
  "version": "1.0.0",
  "timestamp": "2025-01-15T10:30:00.000Z",
  "service": "Gerador de Página API"
}
```

---

## 🎨 Design System — Neon Tech

### Paleta de Cores

| Token | Hex (Dark) | Uso |
|-------|-----------|-----|
| `--neon-blue` | `#00D1FF` | Destaque primário, bordas ativas |
| `--neon-purple` | `#8B5CFF` | Gradientes, tabs ativos |
| `--neon-green` | `#00FFB7` | Sucesso, cópia, status |
| `--neon-pink` | `#FF2D78` | Erros, alertas |
| `--bg-primary` | `#0A0A0F` | Fundo principal |
| `--text-primary` | `#F0F0FF` | Texto principal |

### Tipografia

- **Orbitron** — Títulos, logo, badges (futurista)
- **Rajdhani** — Corpo, botões, labels (clean)
- **JetBrains Mono** — Código, URLs (monospace)

---

## 🧰 Tecnologias

### Frontend
| Tecnologia | Versão | Uso |
|-----------|--------|-----|
| HTML5 | — | Estrutura semântica |
| CSS3 | — | Variables, animations, grid, flexbox |
| JavaScript ES2020 | — | Fetch API, Canvas, DOM |
| Google Fonts | — | Orbitron, Rajdhani, JetBrains Mono |

### Backend
| Tecnologia | Versão | Uso |
|-----------|--------|-----|
| Node.js | ≥18 | Runtime |
| Express | ^4.19 | Framework HTTP |
| CORS | ^2.8 | Cross-Origin |
| dotenv | ^16.4 | Variáveis de ambiente |
| @anthropic-ai/sdk | ^0.32 | API da IA |
| nodemon | ^3.1 | Dev auto-reload |

---

## ⚠️ Troubleshooting

### Backend não inicia
```bash
# Verifique se o Node.js está instalado
node --version  # Deve ser v18+

# Verifique se as dependências foram instaladas
cd backend && npm install
```

### "API Key não configurada"
```bash
# Verifique se o .env existe
ls -la backend/.env

# Verifique o conteúdo (a chave não deve estar vazia)
cat backend/.env
```

### Erro de CORS no frontend
Certifique-se de que a origem do frontend está na lista `ALLOWED_ORIGINS` do `.env`, ou abra o `index.html` diretamente no navegador (sem servidor ou via Live Server).

### Preview não aparece
O iframe usa `sandbox` por segurança. Se o conteúdo gerado tiver scripts externos bloqueados, é comportamento esperado do sandbox do browser.

---

## 📁 .gitignore recomendado

```
backend/node_modules/
backend/.env
*.log
.DS_Store
Thumbs.db
```

---

## 📄 Licença

MIT License — Livre para usar, modificar e distribuir.

---

## 💡 Dicas de Uso

- **Seja específico:** "pizzaria napolitana italiana" gera resultados melhores que apenas "pizzaria"
- **Use o botão Regenerar** para variações diferentes do mesmo tema
- **Download:** O arquivo `.html` é 100% autossuficiente (sem dependências externas)
- **Código completo:** Use a aba "Completo" para copiar a página inteira de uma vez

---

<div align="center">
  Feito com ❤️ e IA · <strong>Gerador.AI</strong> · Powered by Claude (Anthropic)
</div>
