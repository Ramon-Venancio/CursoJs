import { v4 as uuid } from 'uuid'


const users = []

const usersController = {
     index: (request,response) => {
          response.json(users)
     },
     create: () => (request,response) => {
          const {name,login} = request.body
      
          const usuario = {id: uuid(), name, login}
      
          users.push(usuario)
      
          response.json(usuario)
     },
     update: (request, response) => {
          const { idUser } = request.params
          const { name, login } = request.body
      
          const indexUser = users.findIndex((user) => user.id === idUser)
          users[indexUser] = {...users[indexUser], name, login}
      
          response.json(users[indexUser])
     },
     delete: () => {}
}

export { usersController }