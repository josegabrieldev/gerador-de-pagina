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


const PromptSistemaIA = `Você é um designer web premiado e Programador.
Crie uma landing page COMPLETA e VISUALMENTE IMPRESSIONANTE para o negócio descrito.

                    Regras de resposta:
                    - Responda SOMENTE com HTML e CSS puros
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

Todo o conteúdo em português, criativo e específico para o negócio.`;

const TextArea = document.querySelector("#promptUsuario");
const botaoGerarPagina = document.querySelector("#btnGerarPagina");
const blocoCodigo = document.querySelector("#blocoCodigo");
const blocoSite = document.querySelector("#blocoSite");

botaoGerarPagina.addEventListener("click", gerarPagina);

 async function gerarPagina(){
    const promptUsuario = TextArea.value;
    
    const respostaDaIA = await fetch(GROQ_ENDERECO, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
            "Authorization": `Bearer ${GROQ_CHAVE}`
        },
        body: JSON.stringify({
            "model": "llama-3.3-70b-versatile",
            "messages": [
           {
             "role": "user",
             "content": promptUsuario
           },
           {
             "role": "system",
             "content": PromptSistemaIA
           }
         ],
        })
    })

    const dadosDaResposta = await respostaDaIA.json();
    const codigocompleto = dadosDaResposta.choices[0].message.content
    
    blocoCodigo.textContent = codigocompleto;
    blocoSite.srcdoc = codigocompleto;

    TextArea.value = "";
};