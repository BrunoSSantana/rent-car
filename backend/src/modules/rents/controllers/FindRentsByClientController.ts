import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'

import { RentsRepositories } from '../repositories/RentsRepositories'

class FindRentsByClientController {
  async handle(request: Request, response: Response): Promise<Response> {
    const rentsRepository = getCustomRepository(RentsRepositories)

    const { client_id } = request

    const rents = await rentsRepository.find({ client_id })

    return response.json(rents)
  }
}

export { FindRentsByClientController }