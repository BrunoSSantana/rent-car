import { FindRentsByUserController } from '@modules/rents/controllers/FindRentsByUserController'
import { AuthUserController } from '@modules/users/controllers/AuthUserController'
import { CreateUserController } from '@modules/users/controllers/CreateUserController'
import { Router } from 'express'
import { ensureAuthenticatedUser } from 'middlewares/ensureAuthenticatedUser'

const usersRoutes = Router()

const createUserController = new CreateUserController()
const authUserController = new AuthUserController()
const findRentsByUserController = new FindRentsByUserController()

usersRoutes
  .post('/new', createUserController.handle)
  .post('/auth', authUserController.handle)
  .get('/rents', ensureAuthenticatedUser, findRentsByUserController.handle)
  .get('/rents/:id', ensureAuthenticatedUser, findRentsByUserController.handle)

export { usersRoutes }
