let nomes=[];
let nome="";
let i=0;

while (i<4) {
     nome = prompt("Digite um nome:");

     if (nome == "") {
          alert("Não pode nome vazio!");
     }

     else {
          nomes[i] = nome;
          i++;
     }
}

document.write(`<strong>${nomes}</strong>`);