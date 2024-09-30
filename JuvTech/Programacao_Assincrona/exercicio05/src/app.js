// Crie um jogo da memória assíncrono utilizando JavaScript e HTML. O jogo deve carregar as imagens das cartas de forma assíncrona e revelar as cartas quando clicadas. Utilize setTimeout para simular o tempo de espera entre a revelação das cartas e async/await para gerenciar o fluxo assíncrono do jogo.

import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import { router } from './routes/jogoRoutes.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')))
app.use(router)


app.get('/', (req, res) => {
     res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.listen(port, () => {
     console.log(`Servidor rodando em \nhttp://localhost:${port}`)
})

