import { validate } from 'uuid'


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

export { validarID }