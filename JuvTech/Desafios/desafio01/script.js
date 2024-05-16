function maiorNumero() {
     let num1 = parseInt(document.getElementById('numero1').value);
     let num2 = parseInt(document.getElementById('numero2').value);

     if (num1 == NaN || num2 == NaN) {
          document.getElementById("resultado").innerText = `Você digitou nada em algum lugar!`;
     }
     else if (num1 > num2) {
          document.getElementById("resultado").innerText = `O Numero ${num1} é maior que ${num2}`
          console.log(num1, num2);
     }
     else {
          document.getElementById("resultado").innerText = `O Numero ${num2} é maior que ${num1}`
          console.log(num1, num2);
     }
}