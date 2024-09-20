import express, { request, response } from 'express'
import {app as routes} from './routes/index'

const app = express()
app.use(express.json())
app.use(routes)

app.listen(3000, () => { console.log('Servidor iniciado!') })