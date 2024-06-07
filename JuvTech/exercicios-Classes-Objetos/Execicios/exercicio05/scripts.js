class Conta {
     constructor(saldoCorrente=0, saldoPoupanca=0, juros) {
          this.saldoCorrente = saldoCorrente;
          this.saldoPoupanca = saldoPoupanca;
          this.juros = juros;
     }

     saque (valor) {     
          if (this.saldoCorrente == 0) {
               console.log("Saldo corrente vazio!");
          }
          else if (valor > this.saldoCorrente) {
               console.log("Você quer tirar mais do que tem!")
          }
          else {
               this.saldoCorrente -= valor;
          }
     }

     depositar (valor) {
          this.saldoCorrente += valor;
     }

     transferirCorrente (valor) {
          if (valor > this.saldoPoupanca) {
               console.log("Você quer tirar mais do que tem!");
          }
          else {
               this.saldoCorrente += valor;
               this.saldoPoupanca -= valor;
          }
     }

     transferirPoupanca (valor) {
          if (valor > this.saldoCorrente) {
               console.log("Você quer tirar mais do que tem!");
          }
          else {
               this.saldoCorrente -= valor;
               this.saldoPoupanca += valor;
          }
     }

     jurosDeAniversario () {
          let saldoJuro = this.saldoPoupanca*(this.juros/100);

          this.saldoPoupanca += saldoJuro;
     }
}

class ContaEspecial extends Conta {
     constructor(saldoCorrente=0, saldoPoupanca=0, juros) {
          super(saldoCorrente, saldoPoupanca, juros*2)
     }
}

let conta1 = new Conta(1000,0,1);

console.log(conta1);

conta1.transferirPoupanca(500);
console.log(conta1);

conta1.depositar(2000);
console.log(conta1);

conta1.jurosDeAniversario();
console.log(conta1);

conta1.saque(1000);

let conta2 = new ContaEspecial(1000,1000,1);

conta2.jurosDeAniversario();
console.log(conta2);