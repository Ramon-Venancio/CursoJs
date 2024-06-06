class Carrinho {
     constructor() {
          this.itens = [];
          this.quantidadeTotal = 0;
          this.valorTotal = 0;
     }

     adicionarItens(nome,valor) {
          this.itens.push([nome,valor]);
          this.quantidadeTotal += 1;
          this.valorTotal += valor;
     }

     removerItens(nome) {
          this.itens.forEach(item => {
               if (item[0] == nome) {
                    let i = this.itens.indexOf(item);
                    
                    this.quantidadeTotal -= 1;
                    this.valorTotal -= item[1] 
                    this.itens.splice(i,1);
               }
          });
     }
}

let c1 = new Carrinho();

console.log(...c1.itens);
console.log(c1.quantidadeTotal);
console.log(c1.valorTotal);

c1.adicionarItens("Nescau",20)
console.log(...c1.itens);

c1.adicionarItens("Leite",12)
console.log(...c1.itens);

c1.adicionarItens("max steel",25)
console.log(...c1.itens);

c1.removerItens("max steel")
console.log(...c1.itens);

console.log(c1.quantidadeTotal);
console.log(c1.valorTotal);