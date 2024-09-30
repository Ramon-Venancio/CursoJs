import { pegaImagens } from '../controlers/jogoController.js'
import { Router } from 'express'

const router = Router()

router.get('/pegarImagens', pegaImagens)

export { router }