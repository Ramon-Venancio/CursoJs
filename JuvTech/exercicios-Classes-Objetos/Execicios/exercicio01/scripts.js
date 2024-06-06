class Conta {
     constructor(saldo=0) {
          this.saldo = saldo;
     }

     get getsaldo() {
          return this.saldo;
     }

     depositar(valor) {
          this.saldo += valor;
     }

     saque(valor) {
          if (this.saldo == 0) {
               console.log("Sua conta está vazia");
          }
          else if (valor > this.saldo) {
               console.log("Esse saque é maior do que você tem na sua conta")
          }
          else {
               this.saldo -= valor
          }
          
     }
}

let conta1 = new Conta();

console.log(conta1.saldo);

conta1.saque(2000)

conta1.depositar(2000);
console.log(conta1.saldo);

conta1.saque(1000);
console.log(conta1.saldo);

conta1.saque(2000);