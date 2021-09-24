import { ClientsRepositories } from '@modules/clients/repositories/ClientsRepositories'
import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'

class FindAllClients {
  async handle(request: Request, response: Response): Promise<Response> {
    const clientsRepositories = getCustomRepository(ClientsRepositories)
    const clients = await clientsRepositories.find()
    return response.send(clients)
  }
}

export { FindAllClients }
