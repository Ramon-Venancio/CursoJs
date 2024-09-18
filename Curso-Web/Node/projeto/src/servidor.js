const porta = 3003

const express = require('express')
const app = express()
const bancoDados = require('./bancoDeDados')
const bodyParser = require('body-parser');
 
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/produtos', (req, res, next) => {
  res.send(bancoDados.getProdutos()) // Converter para JSON
})

app.get('/produtos/:id', (req, res, next) => {
  res.send(bancoDados.getProduto(req.params.id)) // Converter para JSON
})

app.post('/produtos', (req, res, next) => {
  const produto = bancoDados.salvarProduto({
    nome: req.body.nome,
    preco: req.body.preco
  })
  res.send(produto) // JSON
})

app.put('/produtos/:id', (req, res, next) => {
  const produto = bancoDados.salvarProduto({
    id: req.params.id,
    nome: req.body.nome,
    preco: req.body.preco
  })
  res.send(produto) // JSON
})

app.delete('/produtos/:id', (req, res, next) => {
  const produto = bancoDados.excluirProduto(req.params.id)
  res.send(produto) // JSON
})



app.listen(porta, () => {
  console.log(`Servidor está executando na porta ${porta}.`)
})