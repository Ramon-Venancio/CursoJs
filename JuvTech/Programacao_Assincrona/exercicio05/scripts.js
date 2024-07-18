// Crie um jogo da memória assíncrono utilizando JavaScript e HTML. O jogo deve carregar as imagens das cartas de forma assíncrona e revelar as cartas quando clicadas. Utilize setTimeout para simular o tempo de espera entre a revelação das cartas e async/await para gerenciar o fluxo assíncrono do jogo.


/* Variaveis */
const tagImagens = document.querySelectorAll('img')
const botao = document.querySelector('button')
const nivelInputs = document.querySelectorAll('input[name="nivel"]')
let caminhosFormados = []
let escolhas = {"primeira":"","segunda":""}
const niveis = {
     "facil":4,
     "medio":6,
     "dificil":8
}

/* Função para pegar os caminhos no JSON */
async function pegarCaminhos() {
     try{
          const response = await fetch('filePaths.json')
          const filePaths = await response.json()

          return filePaths
     }
     catch (error) {
          console.error(`Erro ao carregar o JSON: ${error}`);

          return [];
     }
}

/* Função para gerar números aleátorios */
function gerarNumerosAleatorios(max, quant) {
     let numerosPossiveis = []

     for (let i=0;i<max;i++) {
          numerosPossiveis.push(i)
     }

     let resultados = []
     while (resultados.length < quant) {
          const indiceAleatorio = Math.floor(Math.random() * numerosPossiveis.length);
          resultados.push(numerosPossiveis.splice(indiceAleatorio,1)[0]);
     }

     return resultados;
}

/* Função para gerar imagens */
async function gerarImages() {
     caminhosFormados.length = 0
     const todosCaminhoImagens = await pegarCaminhos()
     let caminhoImagens = []
     const numerosAleatoriosCaminhos = gerarNumerosAleatorios(todosCaminhoImagens.length,4)

     /* Se o JSON estiver vazio ou a função pegarCaminhos() der erro */
     if (todosCaminhoImagens.length === 0) {
          console.error("Nenhum caminho de imagem foi carregado.")
          return;
     }

     for (let i=0;i<2;i++) {
          numerosAleatoriosCaminhos.forEach((indexAleatorio,index) => {
               caminhoImagens.push(todosCaminhoImagens[indexAleatorio])
          })
     }

     const numerosAleatoriosImagens = gerarNumerosAleatorios(tagImagens.length,caminhoImagens.length)
     
     numerosAleatoriosImagens.forEach((indexAleatorio, index) => {
          if (index < caminhoImagens.length && indexAleatorio < tagImagens.length) {
               tagImagens[indexAleatorio].src = caminhoImagens[index];
          } else {
               console.error('Índice fora do intervalo detectado');
          }
     })

     caminhosFormados = Array.from(tagImagens, img => `images/${img.src.split("/").pop()}`)
}

/* Ação caso um botão de nível seja alterado */
nivelInputs.forEach(input => {

     if (input.checked) {
          if (tagImagens.length) {
               tagImagens.forEach(imagem => {
                    console.log(imagem)
               })
          }
          
          const nivel = input.value
          let pai = document.querySelector('.tabuleiro')

          console.log(nivel)
          
          for (let i=0;i<niveis[nivel]*2;i++) {
               let imagemCriada = document.createElement("img");
               imagemCriada.src = "images/carta_costas.png";
               imagemCriada.id = `img0${i+1}`
               imagemCriada.className = "images"

               pai.appendChild(imagemCriada)
          }
     }
})



/* Ação caso o botão começar seja clicado*/
botao.addEventListener('click',async () => {

     await gerarImages()
     console.log(caminhosFormados)
     setTimeout(() => {
          const tagImagens = document.querySelectorAll('img');

          for(imagem of tagImagens) {
               imagem.src = "images/carta_costas.png"
          }
     },2000)
})

/* Ação caso uma carta seja clicada*/
tagImagens.forEach(imagem => {
     imagem.addEventListener('click', (event) => {
          let imagemClicada = event.target;
          const num = parseInt(imagemClicada.id.split("0").pop());
          nomeImagem = imagemClicada.src.split("/").pop();

          if (nomeImagem=="carta_costas.png" && caminhosFormados.length>0) {
               imagemClicada.src = caminhosFormados[num-1];

               if (escolhas.primeira) {
                    escolhas.segunda = imagemClicada;

                    if (escolhas.primeira.src==escolhas.segunda.src) {
                         setTimeout(()=>{
                              alert("ingual");
                              escolhas.primeira = "";
                              escolhas.segunda = "";
                         },100)
                    }
                    else {
                         setTimeout(() => {
                              imagemClicada.src = "images/carta_costas.png";
                              for (imagem of tagImagens) {
                                   if (imagem.src==escolhas.primeira.src) {
                                        imagem.src = "images/carta_costas.png";
                                   }
                              }
                              alert("Desingual");
                              escolhas.primeira = "";
                              escolhas.segunda = "";
                         },100)
                    }
                    
               }
               else {
                    escolhas.primeira = imagemClicada;
               }
          }
     });   
})