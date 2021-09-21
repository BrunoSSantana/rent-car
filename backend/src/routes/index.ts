import { Router } from 'express'

import { clientsRoutes } from './clients.routes'
import { usersRoutes } from './users.routes'

const routes = Router()

routes.use('/users', usersRoutes)
routes.use('/clients', clientsRoutes)

export { routes }
