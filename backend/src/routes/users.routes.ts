import { AuthUserController } from '@modules/users/controllers/AuthUserController'
import { CreateUserController } from '@modules/users/controllers/CreateUserController'
import { Router } from 'express'

const usersRoutes = Router()

const createUserController = new CreateUserController()
const authUserController = new AuthUserController()

usersRoutes.post('/new', createUserController.handle)
usersRoutes.post('/auth', authUserController.handle)

export { usersRoutes }
