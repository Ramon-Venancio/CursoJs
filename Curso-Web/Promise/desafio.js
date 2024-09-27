fs = require('fs')
path = require('path')

const caminho = path.join(__dirname, 'arquivo.txt')

function lerArquivo(caminho) {
     return new Promise((resolve, reject) => {
          fs.readFile(caminho, 'utf8', (err, data) => {
               if (err) {
                    reject(err)
               }
               resolve(data)
          })
     })
}

lerArquivo(caminho)
     .then(conteudo => conteudo.split(' '))
     .then(linhas => linhas.join(', '))
     .then(final => `O valor final é:\n ${final}`)
     .then(console.log)