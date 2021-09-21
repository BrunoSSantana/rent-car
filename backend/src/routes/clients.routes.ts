import { AuthClientController } from '@modules/clients/controllers/AuthClientContoller'
import { CreateClientController } from '@modules/clients/controllers/CreateClientController'
import { Router } from 'express'

const clientsRoutes = Router()

const createClientController = new CreateClientController()
const authClientController = new AuthClientController()

clientsRoutes.post('/new', createClientController.handle)
clientsRoutes.post('/auth', authClientController.handle)

export { clientsRoutes }
