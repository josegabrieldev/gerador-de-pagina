const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/gerar-pagina", async (req, res) => {
  const { promptUsuario } = req.body;

  try {
    const resposta = await fetch(process.env.GROQ_ENDERECO, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.GROQ_CHAVE}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [
          {
            role: "system",
            content: `Você é um designer web premiado e Programador.
Crie uma landing page COMPLETA e VISUALMENTE IMPRESSIONANTE para o negócio descrito.

Regras de resposta:
- Responda SOMENTE com um documento HTML completo (incluindo <html>, <head>, <body>)
- Inclua o CSS dentro de <style> no <head>
- Inclua o JavaScript dentro de <script> antes do fechamento da tag </body>
- Não use crases, markdown ou explicações
- Não use tags <img>

Identidade visual (capriche e surpreenda):
- Invente uma paleta de cores única que combine com a essência do negócio
- Escolha uma Google Font marcante via @import
- Use emojis grandes no lugar de imagens
- Use CSS moderno: gradientes, sombras, animações sutis, layout generoso, tipografia forte

Estrutura da página:
- Header com nome do negócio e menu
- Hero impactante com título, subtítulo e botão CTA
- Seção de diferenciais com emojis
- Depoimento de cliente
- Footer com contato

Todo o conteúdo em português, criativo e específico para o negócio.`,
          },
          { role: "user", content: promptUsuario },
        ],
      }),
    });

    const data = await resposta.json();
    console.log(JSON.stringify(data, null, 2)); // loga a resposta completa

    // tenta pegar o conteúdo de forma segura
    const conteudo =
      data.choices?.[0]?.message?.content ||
      data.choices?.[0]?.messages?.[0]?.content ||
      data.choices?.[0]?.text ||
      "Erro: resposta inesperada";

    res.json({ html: conteudo });
  } catch (erro) {
    res
      .status(500)
      .json({ erro: "Erro ao gerar página.", details: erro.message });
  }
});

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
