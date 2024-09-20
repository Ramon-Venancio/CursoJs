import {Router} from 'express'
import { usersRoutes } from './users.routes'

const app = Router()

app.use('/users', usersRoutes)

export { app }