import { CreateRentsController } from '@modules/rents/controllers/CreateRentsController'
import { ExcludeRentsController } from '@modules/rents/controllers/ExcludeRentsController'
import { FinallyRentController } from '@modules/rents/controllers/FinallyRentController'
import { FindRentByUserGroupByMonth } from '@modules/rents/controllers/FindRentByUserGroupByMonth'
import { FindRentsByClientController } from '@modules/rents/controllers/FindRentsByClientController'
import { FindRentsByIdController } from '@modules/rents/controllers/FindRentsByIdController'
import { UpdateFinishDateRentController } from '@modules/rents/controllers/UpdateFinishDateRentController'
import { Router } from 'express'
import { ensureAuthenticatedClient } from 'middlewares/ensureAuthenticatedClient'
import { ensureAuthenticatedUser } from 'middlewares/ensureAuthenticatedUser'

const rentsRoutes = Router()

const createRentsController = new CreateRentsController()
const excludeRentsController = new ExcludeRentsController()
const findRentsByClientController = new FindRentsByClientController()
const findRentsByIdController = new FindRentsByIdController()
const updateFinishDateRentController = new UpdateFinishDateRentController()
const finallyRentController = new FinallyRentController()
const findRentByUserGroupByMonth = new FindRentByUserGroupByMonth()

rentsRoutes
  .post('/new', ensureAuthenticatedClient, createRentsController.handle)
  .delete('/delete', ensureAuthenticatedClient, excludeRentsController.handle)
  .get('/all', ensureAuthenticatedClient, findRentsByClientController.handle)
  .get('/:id', ensureAuthenticatedClient, findRentsByIdController.handle)
  .patch(
    '/update',
    ensureAuthenticatedClient,
    updateFinishDateRentController.handle
  )
  .patch('/finally', ensureAuthenticatedClient, finallyRentController.handle)
  .post(
    '/filter_by_date',
    ensureAuthenticatedUser,
    findRentByUserGroupByMonth.handle
  )

export { rentsRoutes }
