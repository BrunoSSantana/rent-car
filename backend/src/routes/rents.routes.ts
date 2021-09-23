import { CreateRentsController } from '@modules/rents/controllers/CreateRentsController'
import { Router } from 'express'
import { ensureAuthenticatedClient } from 'middlewares/ensureAuthenticatedClient'

const rentsRoutes = Router()

const createRentsController = new CreateRentsController()

rentsRoutes.post(
  '/new',
  ensureAuthenticatedClient,
  createRentsController.handle
)

export { rentsRoutes }
