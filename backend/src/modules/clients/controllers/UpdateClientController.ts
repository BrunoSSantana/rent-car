import { hash } from 'bcryptjs'
import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'

import { ClientsRepositories } from '../repositories/ClientsRepositories'

class UpdateClientController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, tel, email, password } = request.body
    const { client_id } = request

    if (!client_id) {
      return response.status(401).json({ message: 'Unauthorized' })
    }

    const clientsRepository = getCustomRepository(ClientsRepositories)

    const query = clientsRepository
      .createQueryBuilder()
      .where('id = :id')
      .setParameters({ id: client_id })
      .update()

    if (name) {
      query.set({ name })
    }

    if (tel) {
      query.set({ tel })
    }

    if (email) {
      query.set({ email })
    }

    if (password) {
      const passwordHash = await hash(password, 8)
      query.set({ password: passwordHash })
    }

    await query.execute()

    const client = await clientsRepository.findOne({ id: client_id })

    return response.json(client)
  }
}

export { UpdateClientController }
