class Carrinho {
     constructor() {
          this.itens = [];
          this.quantidadeTotal = 0;
          this.valorTotal = 0;
     }

     adicionarItens(nome,quantidade=1,valor=0) {
          let encontrouItem = false;
          for (let item of this.itens) {
               if (item.nome == nome) {
                    item.quantidade += quantidade;
                    this.quantidadeTotal+=quantidade;
                    this.valorTotal += quantidade*item.valor
                    encontrouItem = true;
               }
          }
          if (!encontrouItem) {
               this.itens.push({nome,quantidade,valor});
               this.quantidadeTotal += quantidade;
               this.valorTotal += quantidade*valor;
          }
     }

     removerItens(nome) {
          this.itens.forEach(item => {
               if (item.nome == nome) {
                    let i = this.itens.indexOf(item);

                    item.quantidade -= 1
                    this.quantidadeTotal -= 1;
                    this.valorTotal -= item.valor

                    if (item.quantidade == 0 ) {
                         this.itens.splice(i,1);
                    }
               }
          });
     }
}

let c1 = new Carrinho();

console.log(...c1.itens);
console.log(c1.quantidadeTotal);
console.log(c1.valorTotal);

c1.adicionarItens("Nescau",1,20)
console.log(...c1.itens);

c1.adicionarItens("Leite",1,12)
console.log(...c1.itens);

c1.adicionarItens("max steel",1,25)
console.log(...c1.itens);

c1.removerItens("max steel")
console.log(...c1.itens);

console.log(c1.quantidadeTotal);
console.log(c1.valorTotal);