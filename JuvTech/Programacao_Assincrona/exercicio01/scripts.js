// Crie uma função que recebe um array de URLs de imagens e as carrega em elementos HTML <img>. As imagens devem ser carregadas uma de cada vez, e à medida que cada uma for carregada, seu URL deve ser impresso no console. Utilize callbacks para lidar com o carregamento assíncrono das imagens.

// Array com todas as imagens:
let imagens = ["https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/09/11/1161338360-raposa-do-artico-pequena.jpg",
     "https://cdn.acritica.net/img/pc/920/600/dn_arquivo/2023/03/unnamed_2.jpg",
     "https://veganbusiness.com.br/wp-content/uploads/2019/01/santuarios-de-animais-700x467.jpg",
     "https://preview.redd.it/que-esp%C3%A9cie-%C3%A9-essa-v0-jkwkys2gw19c1.jpeg?width=1170&format=pjpg&auto=webp&s=13be2bc31e01f18577a79306a8306372350bbff4"];

// Função para trocar imagem
function gerarImagen(url,tempo) {
     // Troca a imagem depois de um tempo
     setTimeout(() => {
          imagem = document.querySelector("img");
          imagem.src = url;
          console.log(url);
     } ,1500*tempo);
};

// loop para interar as imagens do array
for (img of imagens) {
     tempo = imagens.indexOf(img) + 1 // Serve para uma imagem vim só depois da outra
     gerarImagen(img,tempo); // Chamando a função que troca as imagens
};
