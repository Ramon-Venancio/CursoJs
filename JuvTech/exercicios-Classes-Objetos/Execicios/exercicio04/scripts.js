class Carro {
     constructor(marca,cor,gasolina) {
          this.marca = marca;
          this.cor = cor;
          this.gasolina = gasolina;
          this.distancia = 0;
     }

     dirigir (value) {
          this.distancia += value;

          let gasolinaGasta = value*20;

          this.gasolina -= gasolinaGasta;

          if (this.gasolina < 0) {
               this.gasolina = 0;
          }
     }

     abastecer (value) {
          this.distancia = 0;
          this.gasolina += value;
     }
}

let carro1 = new Carro("Ferrari","Vermelho",200);

console.log(`Distancia percorrida: ${carro1.distancia}`);
console.log(`Gasolina: ${carro1.gasolina}`);

carro1.dirigir(5);

console.log(`Distancia percorrida: ${carro1.distancia}`);
console.log(`Gasolina: ${carro1.gasolina}`);

carro1.abastecer(100);
console.log(`Distancia percorrida: ${carro1.distancia}`);
console.log(`Gasolina: ${carro1.gasolina}`);