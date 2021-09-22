import { CreateCarController } from '@modules/cars/controllers/CreateCarController'
import { DeleteCarController } from '@modules/cars/controllers/DeleteCarController'
import { FindAllCarsInUserController } from '@modules/cars/controllers/FindAllCarsInUserController'
import { UpdateCarController } from '@modules/cars/controllers/UpdateCarController'
import { Router } from 'express'
import { ensureAuthenticatedUser } from 'middlewares/ensureAuthenticatedUser'

const carsRoutes = Router()

const createCarController = new CreateCarController()
const findAllCarsInUserController = new FindAllCarsInUserController()
const updateCarController = new UpdateCarController()
const deleteCarController = new DeleteCarController()

carsRoutes
  .post('/new', ensureAuthenticatedUser, createCarController.handle)
  .get('/all_cars', ensureAuthenticatedUser, findAllCarsInUserController.handle)
  .put('/update', ensureAuthenticatedUser, updateCarController.handle)
  .delete('/delete', ensureAuthenticatedUser, deleteCarController.handle)

export { carsRoutes }
