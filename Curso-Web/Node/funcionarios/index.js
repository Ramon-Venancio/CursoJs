const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
     const funcionarios = response.data
     const chinesas = funcionarios.filter(function(funcionario) {
          return funcionario.pais == 'China' && funcionario.genero == 'F'
     })
     
     const chinesaMenorSalario =  chinesas.reduce(function(menor, atual) {
          return atual.salario < menor.salario ? atual : menor
     },chinesas[0])
     
     console.log(chinesaMenorSalario)
})