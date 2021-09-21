import { CreateUserController } from '@modules/users/controllers/CreateUserController'
import { Router } from 'express'

const usersRoutes = Router()

const createUserController = new CreateUserController()

usersRoutes.post('/new', createUserController.handle)

export { usersRoutes }
