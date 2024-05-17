function saber_primo (num) {
     
     if (num==0) {
          return 'Número não pode ser zero';
     }
     else if (num%2===0 || num%3===0) {
          return false;
     }
     else {
          return true;
     }
}