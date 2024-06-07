class Endereco {
     constructor(rua,bairro,cidade,estado) {
          this.rua = rua;
          this.bairro = bairro;
          this.cidade = cidade;
          this.estado = estado;
     }

     get getRua () {
          return this.rua;
     }

     set setRua (value) {
          this.rua = value;
     }

     get getBairro () {
          return this.bairro;
     }

     set setBairro (value) {
          this.bairro = value;
     }

     get getCidade () {
          return this.cidade;
     }

     set setCidade (value) {
          this.cidade = value;
     }

     get getEstado () {
          return this.estado;
     }

     set setEstado (value) {
          this.estado = value;
     }
}

let endereco1 = new Endereco("Rua Monteiro Lobato","Siqueira","Fortaleza","Ceará")

console.log(endereco1.getRua)
console.log(endereco1.getBairro)
console.log(endereco1.getCidade)
console.log(endereco1.getEstado)

endereco1.setRua = "Rua dos Navegantes"
console.log(endereco1.getRua)

endereco1.setBairro = "Boa Viagem"
console.log(endereco1.getBairro)

endereco1.setCidade = "Salvador"
console.log(endereco1.getCidade)

endereco1.setEstado = "Bahia"
console.log(endereco1.getEstado)