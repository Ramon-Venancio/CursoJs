let animal = {
     especie:'',
     raca:'',
     idade:0,
}

let animais= [];

function copy(obj) {
     const copy = {};

     for (const i in obj) {
       copy[i] = obj[i];
     }
     return copy;
}

for (let i=0; i<3; i++) {
     animal.especie = prompt(`Qual é a especie do ${i+1}° animal?`);
     animal.raca = prompt(`Qual é a raça do ${i+1}° animal?`);
     animal.idade = prompt(`Qual é a idade do ${i+1}° animal?`);

     animais[i] = copy(animal);
}

console.log(animais);