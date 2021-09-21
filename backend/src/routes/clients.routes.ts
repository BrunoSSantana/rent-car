import { CreateClientController } from '@modules/clients/controllers/CreateClientController'
import { Router } from 'express'

const clientsRoutes = Router()

const createClientController = new CreateClientController()

clientsRoutes.post('/new', createClientController.handle)

export { clientsRoutes }
