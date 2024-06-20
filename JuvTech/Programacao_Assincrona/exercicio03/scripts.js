// Crie uma função assíncrona atendimento(cliente) que simula o atendimento de um cliente em um caixa. A função deve receber um objeto cliente com informações como nome e tempo de atendimento. A função deve simular o tempo de atendimento usando setTimeout e, após a simulação, deve imprimir no console uma mensagem informando que o cliente foi atendido.
// Utilize async/await para criar uma fila de espera assíncrona, onde os clientes são atendidos um de cada vez. Imprima no console a fila de espera antes e depois de cada atendimento.


async function atendimento(cliente) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(`${cliente.nome} foi atendido`);
        }, cliente.tempo);
      });
}

async function pedirComida(cliente) {
    return await atendimento(cliente);
}

class Cliente {
    constructor(nome,tempo) {
        this.nome = nome
        this.tempo = tempo
    }
}

c1 = new Cliente("Jorginho",2000);
c2 = new Cliente("Zaio",5000);


pedirComida(c1).then(value => console.log(value))
pedirComida(c2).then(value => console.log(value))