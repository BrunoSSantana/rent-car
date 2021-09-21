import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'

import { ClientsRepositories } from '../repositories/ClientsRepositories'

class CreateClientController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password, tel } = request.body
    const clientsRepository = getCustomRepository(ClientsRepositories)

    const clientAlreadyExists = await clientsRepository.findOne({ email })

    if (clientAlreadyExists) {
      return response.status(400).json({ message: 'Client Already exists' })
    }

    const client = clientsRepository.create({ email, name, password, tel })

    await clientsRepository.save(client)

    return response.json(client)
  }
}

export { CreateClientController }
