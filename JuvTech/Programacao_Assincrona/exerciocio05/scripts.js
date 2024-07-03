// Crie um jogo da memória assíncrono utilizando JavaScript e HTML. O jogo deve carregar as imagens das cartas de forma assíncrona e revelar as cartas quando clicadas. Utilize setTimeout para simular o tempo de espera entre a revelação das cartas e async/await para gerenciar o fluxo assíncrono do jogo.

const tagImagens = document.querySelectorAll('img')
const botao = document.querySelector('button')
let caminhosFormados = []
let escolhas = {
     "primeira":"",
     "segunda":""
}


function gerarNumerosAleatorios(max, quant) {
     let numerosPossiveis = []

     for (let i=0;i<max;i++) {
          numerosPossiveis.push(i)
     }

     let resultados = []
     while (resultados.length < quant) {
          indiceAleatorio = Math.floor(Math.random() * numerosPossiveis.length);
          numeroSorteado = numerosPossiveis[indiceAleatorio]
          resultados.push(numeroSorteado);
          numerosPossiveis.splice(indiceAleatorio,1);
     }

     return resultados
}

function gerarImages() {
     caminhosFormados.length = 0
     const caminhoImagens = ["images/devagar_pai.jpg","images/manoel_gomes(caneta_azul).jpeg","images/passaro_cara_de_mal.jpg","images/ticole.jpg"]
     const numerosAletarios = gerarNumerosAleatorios(8,8)
     let count = 0
     let index=0

     while(count!=2) {
          for(caminho of caminhoImagens) {
               const indexAleatorio = numerosAletarios[index]
               tagImagens[indexAleatorio].src=caminho
               index++
          }
          count++
     }

     for(imagem of tagImagens) {
          const nomeArquivo = imagem.src.split("/").pop()
          caminho = `images/${nomeArquivo}`
          caminhosFormados.push(caminho)
     }
}

botao.addEventListener('click',() => {
     gerarImages()
     setTimeout(() => {
          const tagImagens = document.querySelectorAll('img');

          for(imagen of tagImagens) {
               imagen.src = "images/carta_costas.png"
          }
     },2000)
})

for (imagem of tagImagens) {
     imagem.addEventListener('click', (event) => {
          let imagemClicada = event.target;
          const num = parseInt(imagemClicada.id.split("0").pop());
          nomeImagem = imagemClicada.src.split("/").pop();

          if (nomeImagem=="carta_costas.png" && caminhosFormados.length>0) {
               imagemClicada.src = caminhosFormados[num-1];

               if (escolhas.primeira) {
                    escolhas.segunda = imagemClicada;

                    if (escolhas.primeira.src==escolhas.segunda.src) {
                         alert("ingual")
                    }
                    else {
                         alert("Diferente")
                         imagemClicada.src = "images/carta_costas.png"
                         for (imagem of tagImagens) {
                              if (imagem.src==escolhas.segunda.src) {
                                   imagem.src = "images/carta_costas.png"
                              }
                         }
                         
                    }
                    escolhas.primeira = ""
                    escolhas.segunda = ""
               }
               else if (!escolhas.primeira) {
                    escolhas.primeira = imagemClicada;
               }
          }
          console.log(escolhas.primeira);
          console.log(escolhas.segunda);
     });   
} 