import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'

import { ClientsRepositories } from '../repositories/ClientsRepositories'

class DeleteClientController {
  async handle(request: Request, response: Response): Promise<Response> {
    const clientsRepository = getCustomRepository(ClientsRepositories)
    const { client_id } = request

    if (!client_id) {
      return response.status(401).json({ message: 'Unauthorized' })
    }

    const client = await clientsRepository.findOne({ id: client_id })

    if (!client) {
      return response.json({ message: 'User does not exist' })
    }

    await clientsRepository
      .createQueryBuilder()
      .where('id = :id', { id: client_id })
      .delete()
      .execute()

    return response.json({ message: `${client.name} successfully deleted` })
  }
}

export { DeleteClientController }
