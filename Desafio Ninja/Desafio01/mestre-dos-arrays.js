// Crie um programa que receba um array de objetos contendo produtos (nome, preço e quantidade). O programa deve calcular o total das compras e exibir um recibo formatado com o nome de cada produto, sua quantidade, preço unitário e valor total. Utilize funções, métodos de arrays e formatação de texto para criar um recibo profissional.
let produtos = []

class Produto {
     constructor(nome,preco,quantidade) {
          this.nome = nome
          this.preco = preco
          this.quantidade = quantidade
     }
}

const btn = document.querySelector('#btn');

btn.addEventListener('click',function(e) {
     e.preventDefault();

     let nome = document.querySelector('#nome').value;
     let preco = document.querySelector('#preco').value;
     let quantidade = document.querySelector('#quantidade').value;

     p1 = new Produto(nome,preco,quantidade);

     produtos.push(p1)
     console.log(produtos)
})

function gerar_recibo() {
     let total = 0;
     console.log("+"+"-".repeat(20)+"+")
     console.log("|"+"     SEU RECIBO     "+"|")
     console.log("+"+"-".repeat(20)+"+")
     for (let i=0;i<produtos.length;i++) {
          console.log("|"+" ".repeat(20)+"|")
     }
}