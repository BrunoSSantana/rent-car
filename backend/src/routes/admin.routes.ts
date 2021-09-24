import { FindAllCars } from '@modules/admin/FindAllCars'
import { FindAllClients } from '@modules/admin/FindAllClients'
import { FindAllRents } from '@modules/admin/FindAllRents'
import { FindAllUsers } from '@modules/admin/FindAllUsers'
import { Router } from 'express'

const adminRoutes = Router()

const findAllCars = new FindAllCars()
const findAllUsers = new FindAllUsers()
const findAllRents = new FindAllRents()
const findAllClients = new FindAllClients()

adminRoutes
  .get('/users', findAllUsers.handle)
  .get('/clients', findAllClients.handle)
  .get('/cars', findAllCars.handle)
  .get('/rents', findAllRents.handle)

export { adminRoutes }
