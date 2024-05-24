let pessoa={
     nome:"",
     sexo:"",
     idade:0,
     profissao:"",
}

function criarPessoa () {
     pessoa.nome = document.getElementById("nome").value
     pessoa.sexo = document.getElementById("sexo").value
     pessoa.idade = document.getElementById("idade").value
     pessoa.profissao = document.getElementById("profissao").value
     console.log(pessoa)
}