// Crie um jogo da memória assíncrono utilizando JavaScript e HTML. O jogo deve carregar as imagens das cartas de forma assíncrona e revelar as cartas quando clicadas. Utilize setTimeout para simular o tempo de espera entre a revelação das cartas e async/await para gerenciar o fluxo assíncrono do jogo.

const tagImagens = document.querySelectorAll('img')
const botao = document.querySelector('button')
let caminhosFormados = []
let escolhas = {"primeira":"","segunda":""}
const niveis = {
     "facil":4,
     "medio":6,
     "dificil":8
}

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

async function gerarImages() {
     caminhosFormados.length = 0
     const todosCaminhoImagens = await pegarCaminhos()
     let caminhoImagens = []

     if (todosCaminhoImagens.length === 0) {
          console.error("Nenhum caminho de imagem foi carregado.")
          return;
     }
     const numerosAleatoriosCaminhos = gerarNumerosAleatorios(todosCaminhoImagens.length,4)

     numerosAleatoriosCaminhos.forEach((indexAleatorio,index) => {
          caminhoImagens[index] = todosCaminhoImagens[indexAleatorio]
     })
     
     caminhoImagens.forEach((caminho,index) => {
          if (index<4) {
               caminhoImagens.push(caminho)
          }
     })

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

botao.addEventListener('click',async () => {
     await gerarImages()
     console.log(caminhosFormados)
     setTimeout(() => {
          const tagImagens = document.querySelectorAll('img');

          for(imagen of tagImagens) {
               imagen.src = "images/carta_costas.png"
          }
     },2000)
})

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