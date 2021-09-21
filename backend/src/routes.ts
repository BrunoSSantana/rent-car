import { Router } from 'express'

const routes = Router()

routes.get('/routes', (request, response) => {
  return response.json({ message: 'routes OK' })
})

export { routes }
