let soma_positivos = () => {
     let num
     let soma = 0
     for (let i = 1; i < 6;i++) {
          num = parseFloat(prompt(`Digite o ${i}° número`))

          if (num>0) {
               soma += num
          }
          
     }

     document.write(`A soma dos numeros positivos é ${soma}`)
};

soma_positivos()