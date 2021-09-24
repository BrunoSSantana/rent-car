import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'

import { RentsRepositories } from '../repositories/RentsRepositories'

class FindRentsByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const rentsRepository = getCustomRepository(RentsRepositories)

    const { id } = request.params

    const rent = await rentsRepository.findOne(id)

    return response.json(rent)
  }
}

export { FindRentsByIdController }
