function operacoes(a,b) {
     let soma = a + b
     let subtracao = a - b
     let multiplicacao = a * b
     let divisao = b!==0 ? a / b:'Divisão por zero não é aceita!'

     document.getElementById("soma").innerHTML = soma;
     document.getElementById("subtracao").innerHTML = subtracao;
     document.getElementById("multiplicacao").innerHTML = multiplicacao;
     document.getElementById("divisao").innerHTML = divisao;
}