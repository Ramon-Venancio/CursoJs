import express, { request, response } from 'express'
import {validate, v4 as uuid} from 'uuid'


const app = express()
app.use(express.json())

const users = []

const validarID = (request, response, next) => {
    const {idUser} = request.params

    if (!validate(idUser)) {
        return response.status(400).json({ error: 'UUID inválido' })
    }

    const userExists = users.some(user => user.id === idUser)
    if (!userExists) {
        return response.status(400).json({ error:'Usuário não encontrado' })
    }

    next()
}

app.get('/users', (request,response) => {
    response.json(users)
})
app.post('/users', (request,response) => {
    const {name,login} = request.body

    const usuario = {id: uuid(), name, login}

    users.push(usuario)

    response.json(usuario)
})
app.put('/users/:idUser', validarID,(request, response) => {
    const { idUser } = request.params
    const { name, login } = request.body

    const indexUser = users.findIndex((user) => user.id === idUser)
    users[indexUser] = {...users[indexUser], name, login}

    response.json(users[indexUser])
})


app.listen(3000, () => { console.log('Servidor iniciado!') })