import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'

import { ClientsRepositories } from '../repositories/ClientsRepositories'

class FindClientByIdOrEmailOrName {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id, name, tel, email } = request.body
      const { client_id } = request

      if (!client_id) {
        return response.status(401).json({ message: 'Unauthorized' })
      }

      const clientsRepository = getCustomRepository(ClientsRepositories)

      const query = clientsRepository.createQueryBuilder('clients')

      if (id) {
        query.where('clients.id like :id', { id: `%${id}%` })
      }

      if (name) {
        query.where('clients.name like :name', { name: `%${name}%` })
      }

      if (email) {
        query.where('clients.email like :email', { email: `%${email}%` })
      }

      if (tel) {
        query.where('clients.tel like :tel', { tel: `%${tel}%` })
      }

      const clients = await query.getMany()

      return response.json(clients)
    } catch (error) {
      return response.json(error)
    }
  }
}

export { FindClientByIdOrEmailOrName }
