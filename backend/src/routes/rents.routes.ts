import { CreateRentsController } from '@modules/rents/controllers/CreateRentsController'
import { ExcludeRentsController } from '@modules/rents/controllers/ExcludeRentsController'
import { FindRentsByClientController } from '@modules/rents/controllers/FindRentsByClientController'
import { FindRentsByIdController } from '@modules/rents/controllers/FindRentsByIdController'
import { Router } from 'express'
import { ensureAuthenticatedClient } from 'middlewares/ensureAuthenticatedClient'

const rentsRoutes = Router()

const createRentsController = new CreateRentsController()
const excludeRentsController = new ExcludeRentsController()
const findRentsByClientController = new FindRentsByClientController()
const findRentsByIdController = new FindRentsByIdController()

rentsRoutes
  .post('/new', ensureAuthenticatedClient, createRentsController.handle)
  .delete('/delete', ensureAuthenticatedClient, excludeRentsController.handle)
  .get('/all', ensureAuthenticatedClient, findRentsByClientController.handle)
  .get('/:id', ensureAuthenticatedClient, findRentsByIdController.handle)

export { rentsRoutes }
