import { CreateCarController } from '@modules/cars/controllers/CreateCarController'
import { DeleteCarController } from '@modules/cars/controllers/DeleteCarController'
import { FindAllCarsInUserController } from '@modules/cars/controllers/FindAllCarsInUserController'
import { FindAvailableCarsController } from '@modules/cars/controllers/FindAvailbleCarsController'
import { FindCarByIdController } from '@modules/cars/controllers/FindCarByIdController'
import { UpdateCarController } from '@modules/cars/controllers/UpdateCarController'
import { Router } from 'express'
import { ensureAuthenticatedUser } from 'middlewares/ensureAuthenticatedUser'

const carsRoutes = Router()

const createCarController = new CreateCarController()
const findAllCarsInUserController = new FindAllCarsInUserController()
const findAvailableCarsController = new FindAvailableCarsController()
const findCarByIdController = new FindCarByIdController()
const updateCarController = new UpdateCarController()
const deleteCarController = new DeleteCarController()

carsRoutes
  .post('/delete', ensureAuthenticatedUser, deleteCarController.handle)
  .post('/new', ensureAuthenticatedUser, createCarController.handle)
  .post('/allcars', ensureAuthenticatedUser, findAllCarsInUserController.handle)
  .post('/:id', ensureAuthenticatedUser, findCarByIdController.handle)

  .get(
    '/available_cars',
    ensureAuthenticatedUser,
    findAvailableCarsController.handle
  )
  .put('/update', ensureAuthenticatedUser, updateCarController.handle)

export { carsRoutes }
