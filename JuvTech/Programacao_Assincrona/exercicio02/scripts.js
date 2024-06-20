// Crie duas funções assíncronas: buscarUsuario(id) e buscarEndereco(idUsuario). A função buscarUsuario deve buscar dados de um usuário a partir de um ID fornecido e retornar um objeto com as informações do usuário. A função buscarEndereco deve buscar o endereço de um usuário a partir do ID do usuário e retornar um objeto com as informações do endereço. 
// Utilize as duas funções assíncronas em conjunto para buscar os dados de um usuário e seu endereço, e exibir as informações no console. Utilize Promises para lidar com as operações assíncronas.

// Função para buscar usuarios pelo id
function buscarUsuario(id) {
    // Retorna uma promesa
    return new Promise((resolve,reject) => {
        let passar = false
        for (let pessoa of pessoas) {
            // Se id existir no array (pessoas) é comprido a promesa
            if (pessoa.id==id) {
                passar = true
                resolve(pessoa)
            }
        }
        // Se o id não existir no array (pessoas) dá um erro
        if (!passar) {
            erro = new Error("Deu errado.")
            reject(erro)
        }
    })
}

// Função para buscar o endereço de um usuario pelo id
function buscarEndereco(idUsuario) {
    // Retorna uma promesa
    return new Promise((resolve,reject) => {
        // Utiliza a função assíncrona para vericar o usuario
        buscarUsuario(idUsuario) 
            // Se o usuario existir realiza a promessa
            .then(pessoa => resolve({estado:pessoa.estado,
                cidade:pessoa.cidade,
                bairro:pessoa.bairro,
                rua:pessoa.rua
            }))
            // Se o usuario não for encontrado dá um erro
            .catch(erro => reject(erro))
    }) 
}

// Array com as pessoas
let pessoas = []

// Modelo para criar pessoas
class Pessoa {
    constructor() {
        this.nome = "Jorginho";
        this.idade = 12;
        this.estado = "Ceara";
        this.cidade =  "Fortaleza";
        this.bairro = "Pici";
        this.rua = "Rua Bolívia"
        this.id = 1;
    }
}

p1 = new Pessoa()
pessoas.push(p1)

buscarUsuario(1)
    .then(resultado => console.log(resultado))
    .catch(erro => console.error(erro));

buscarEndereco(1)
    .then(resultado => console.log(resultado))
    .catch(erro => console.error(erro));