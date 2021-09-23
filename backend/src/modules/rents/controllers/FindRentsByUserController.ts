import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'

import { RentsRepositories } from '../repositories/RentsRepositories'

class FindRentsByUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const rentsRepository = getCustomRepository(RentsRepositories)

    const { user_id } = request

    const rents = await rentsRepository.find({
      relations: ['car'],
      where: { car: { user_id } }
    })

    return response.json(rents)
  }
}

export { FindRentsByUserController }
