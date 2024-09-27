// Crie um jogo da memória assíncrono utilizando JavaScript e HTML. O jogo deve carregar as imagens das cartas de forma assíncrona e revelar as cartas quando clicadas. Utilize setTimeout para simular o tempo de espera entre a revelação das cartas e async/await para gerenciar o fluxo assíncrono do jogo.

/* Variaveis */
let tagImagens = document.querySelectorAll('img')
const botao = document.querySelector('button')
const nivelInputs = document.querySelectorAll('input[name="nivel"]')
let caminhosFormados = []
let escolhas = {"primeira":"","segunda":""}
const niveis = {
     "facil":4,
     "medio":6,
     "dificil":8
}
let jogoProgresso = false;
let paresEncontrados = 0;

/* Função para resetar o jogo */
function resetarJogo() {
     jogoProgresso = false;
     escolhas = {"primeira":"", "segunda":""}
     caminhosFormados = []
     tagImagens.forEach(imagem => {
          imagem.src = "images/carta_costas.png"
     })
}

/* Definir o input rádio 'facil' como clicado e checado */
document.addEventListener('DOMContentLoaded', () => {
     const facilRadio = document.getElementById('facil');
     facilRadio.checked = true;
     facilRadio.click();
});

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
     const numerosAleatoriosCaminhos = gerarNumerosAleatorios(todosCaminhoImagens.length,(tagImagens.length/2))

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
     input.addEventListener('click', (event) => {
          inputClicado = event.target
          tagImagens = document.querySelectorAll('img')

          if (inputClicado.checked) {
               if (tagImagens.length) {
                    tagImagens.forEach(imagem => {
                         imagem.remove();
                    })
               }
               
               const nivel = input.value
               let pai = document.querySelector('.tabuleiro')
     
               console.log(nivel)
               
               for (let i=0;i<niveis[nivel]*2;i++) {
                    let imagemCriada = document.createElement("img");
                    imagemCriada.src = "images/carta_costas.png";
                    imagemCriada.id = `img${i}`
                    imagemCriada.className = "images"
     
                    pai.appendChild(imagemCriada)
               }
          }
     })
})

/* Ação caso o botão começar seja clicado*/
botao.addEventListener('click', async () => {
     if (jogoProgresso) return;

     tagImagens = document.querySelectorAll('img')
     await gerarImages()

     console.log(caminhosFormados)

     setTimeout(() => {
          tagImagens = document.querySelectorAll('img');

          for(imagem of tagImagens) {
               imagem.src = "images/carta_costas.png"
          }

          jogoProgresso = true;
          clicarImagens();
     },2000)
})

/* Ação caso uma carta seja clicada*/
function clicarImagens() {
     tagImagens.forEach(imagem => {
          imagem.addEventListener('click', (event) => {
               if (!jogoProgresso) return;

               let imagemClicada = event.target;
               const num = parseInt(imagemClicada.id.split("img").pop());
               const nomeImagem = imagemClicada.src.split("/").pop();

               if (nomeImagem=="carta_costas.png" && caminhosFormados.length > 0) {
                    imagemClicada.src = caminhosFormados[num];

                    if (escolhas.primeira) {
                         escolhas.segunda = imagemClicada;

                         if (escolhas.primeira.src==escolhas.segunda.src) {
                              setTimeout(()=>{
                                   alert("ingual");
                                   escolhas.primeira = "";
                                   escolhas.segunda = "";
                                   paresEncontrados++;

                                   if (paresEncontrados === tagImagens.length / 2) {
                                        alert("Você completou o jogo!")
                                        resetarJogo();
                                   }
                              },100)
                         }
                         else {
                              jogoProgresso = false;
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
                                   jogoProgresso = true;
                              },100)
                         }
                         
                    }
                    else {
                         escolhas.primeira = imagemClicada;
                    }
               }
          });   
     })
}