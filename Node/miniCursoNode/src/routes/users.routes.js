import { Router } from 'express'
import { validarID } from '../middleware/validarID'
import { usersController } from '../controller/usersController'

const usersRoutes = Router()



usersRoutes.get('/', usersController.index)

usersRoutes.post('/', usersController.create)

usersRoutes.put('/:idUser', validarID, usersController.update)

export { usersRoutes }