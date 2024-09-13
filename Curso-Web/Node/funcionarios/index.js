const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
     const funcionarios = response.data
     const chinesaMenorSalario = funcionarios
          .filter(function(funcionario) {
               return funcionario.pais == 'China' && funcionario.genero == 'F'
          })
          .reduce(function(menor, atual) {
               return atual.salario < menor.salario ? atual : menor
          })
     
     console.log(chinesaMenorSalario)
})