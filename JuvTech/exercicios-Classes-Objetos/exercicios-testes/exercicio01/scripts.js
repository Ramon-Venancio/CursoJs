function Pessoa(name,sex,age) {
     people=Object.create({});
     people.name=name;
     people.sex=sex;
     people.age=age;

     return people;
}

p1 = Pessoa("João","masculino",25)
console.log(p1)

class Carro{
     constructor(model,plate) {
          this.model=model;
          this.plate=plate;
     }
}

c1 = new Carro("fusca","wfr 4567");
console.log(c1)