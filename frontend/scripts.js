/*
    LÓGICA DO GERADOR DE PÁGINAS
    ===Lógica de Programação===

    Pega endereço e Chave API da GROQ
    + Prompt pro sistema da IA
    (Todos guardados em variaveis)

    - Capturar TextArea e Botão de Gerar Página
    - Capturar Bloco Código e Bloco Site
    - Adicionar evento de clique ao botão de gerar página
    
    — Função de Gerar Página
        - Capturar valor do TextArea
        - Manda prompt do usúario pra IA e pegar resposta, em uma variavel (Transforma em texto antes de manda pra IA)
        - Pega resposta da IA e transformar em JSON
        - Capturar apenas o código recebido dos dados
        - Exibir código na variavel blocoCodigo (Como conteúdo)
        - Exibir Site na variavel blocoSite (Como endereço (src))
*/

const TextArea = document.querySelector("#promptUsuario");
const botaoGerarPagina = document.querySelector("#btnGerarPagina");
const blocoCodigo = document.querySelector("#blocoCodigo");
const blocoSite = document.querySelector("#blocoSite");

botaoGerarPagina.addEventListener("click", gerarPagina);

async function gerarPagina() {
  const promptUsuario = TextArea.value;

  const resposta = await fetch("http://localhost:3000/api/gerar-pagina", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ promptUsuario }),
  });

  const data = await resposta.json();
  console.log(data)

  blocoCodigo.textContent = data.html;
  blocoSite.srcdoc = data.html;

  TextArea.value = "";
}