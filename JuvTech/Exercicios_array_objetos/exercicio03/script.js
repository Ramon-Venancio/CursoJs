let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", () => {

     let pessoa={
          nome:"",
          sexo:"",
          idade:0,
          profissao:"",
     }

     pessoa.nome = document.getElementById("nome").value
     pessoa.sexo = document.getElementById("sexo").value
     pessoa.idade = parseInt(document.getElementById("idade").value)
     pessoa.profissao = document.getElementById("profissao").value
})

console.log(pessoa.nome)