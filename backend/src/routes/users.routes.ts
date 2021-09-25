import { FindRentsByUserController } from '@modules/rents/controllers/FindRentsByUserController'
import { AuthUserController } from '@modules/users/controllers/AuthUserController'
import { CreateUserController } from '@modules/users/controllers/CreateUserController'
import { DeleteUserController } from '@modules/users/controllers/DeleteUserController'
import { FindUserByIdController } from '@modules/users/controllers/FindUserByIdController'
import { UpdateUserController } from '@modules/users/controllers/UpdateUserController'
import { Router } from 'express'
import { ensureAuthenticatedUser } from 'middlewares/ensureAuthenticatedUser'

const usersRoutes = Router()

const createUserController = new CreateUserController()
const authUserController = new AuthUserController()
const findRentsByUserController = new FindRentsByUserController()
const deleteUserController = new DeleteUserController()
const updateUserController = new UpdateUserController()
const findUserByIdController = new FindUserByIdController()

usersRoutes
  .post('/new', createUserController.handle)
  .post('/auth', authUserController.handle)
  .get('/rents', ensureAuthenticatedUser, findRentsByUserController.handle)
  .get('/rents/:id', ensureAuthenticatedUser, findRentsByUserController.handle)
  .delete('/delete', ensureAuthenticatedUser, deleteUserController.handle)
  .put('/update', ensureAuthenticatedUser, updateUserController.handle)
  .post('/profile', ensureAuthenticatedUser, findUserByIdController.handle)

export { usersRoutes }
