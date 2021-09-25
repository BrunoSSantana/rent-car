import { AuthClientController } from '@modules/clients/controllers/AuthClientContoller'
import { CreateClientController } from '@modules/clients/controllers/CreateClientController'
import { DeleteClientController } from '@modules/clients/controllers/DeleteClientController'
import { FindClientByIdOrEmailOrName } from '@modules/clients/controllers/FindClientByIdOrEmailOrName'
import { UpdateClientController } from '@modules/clients/controllers/UpdateClientController'
import { Router } from 'express'
import { ensureAuthenticatedClient } from 'middlewares/ensureAuthenticatedClient'

const clientsRoutes = Router()

const createClientController = new CreateClientController()
const authClientController = new AuthClientController()
const deleteClientController = new DeleteClientController()
const updateClientController = new UpdateClientController()
const findClientByIdOrEmailOrName = new FindClientByIdOrEmailOrName()

clientsRoutes
  .post('/new', createClientController.handle)
  .post('/auth', authClientController.handle)
  .delete('/delete', ensureAuthenticatedClient, deleteClientController.handle)
  .put('/update', ensureAuthenticatedClient, updateClientController.handle)
  .post(
    '/profile',
    ensureAuthenticatedClient,
    findClientByIdOrEmailOrName.handle
  )

export { clientsRoutes }
