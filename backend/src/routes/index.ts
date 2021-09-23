import { Router } from 'express'

import { carsRoutes } from './cars.routes'
import { clientsRoutes } from './clients.routes'
import { rentsRoutes } from './rents.routes'
import { usersRoutes } from './users.routes'

const routes = Router()

routes.use('/users', usersRoutes)
routes.use('/clients', clientsRoutes)
routes.use('/cars', carsRoutes)
routes.use('/rents', rentsRoutes)

export { routes }
