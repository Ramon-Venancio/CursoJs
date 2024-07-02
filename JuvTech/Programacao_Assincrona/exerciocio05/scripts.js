// Crie um jogo da memória assíncrono utilizando JavaScript e HTML. O jogo deve carregar as imagens das cartas de forma assíncrona e revelar as cartas quando clicadas. Utilize setTimeout para simular o tempo de espera entre a revelação das cartas e async/await para gerenciar o fluxo assíncrono do jogo.

const tagImagens = document.querySelectorAll('img')
const botao = document.querySelector('button')
let caminhosFormados = []
let c = 0

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
     imagem.addEventListener('click',() => {
          c++
          img = document.querySelector(`#img0${c}`)
          console.log(img)
          caminho= img.src.split("/").pop()
          if(caminho="carta_costas.png" && caminhosFormados.length>0) {
               for(key in tagImagens) {
                    if (tagImagens[key].id==img.id) {
                         console.log(tagImagens[key])
                         img.src=caminhosFormados[key]
                    }
               }
          }
          console.log(c)
     })
}