class Veiculo {
     constructor(marca,modelo) {
          this.marca = marca;
          this.modelo = modelo;
     }

     informacoes() {
          let resultado = "";
          for (let key in this) {
              resultado+=`${key}: ${this[key]}\n`
          }
          return resultado;
     }
}

class Carro extends Veiculo {
     constructor(marca,modelo,porta) {
          super(marca,modelo);
          this.porta = porta;
     }
}

class Moto extends Veiculo {
     constructor(marca,modelo,cilindrada) {
          super(marca,modelo);
          this.cilindrada = cilindrada;
     }
}

meuCarro = new Carro("Toyota","corolla",4);
minhaMoto = new Moto("honda","CBR",600)

console.log(meuCarro.informacoes())

console.log(minhaMoto.informacoes())