const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

// sincrono...
const conteudo = fs.readFileSync(caminho, 'utf8')
console.log(conteudo)

// assincrono...
fs.readFile(caminho, 'utf8', (err,conteudo) => {
     const config = JSON.parse(conteudo)
     console.log(`${config.db.host}:${config.db.port}`)
})

// Ler arquivos JSON
const config = require('./arquivo.json')
console.log(config.db)

// Lendo arquivos de um diretorio
fs.readdir(__dirname, (err, arquivos) => {
     console.log('Conteúdo da pasta...')
     console.log(arquivos)
})