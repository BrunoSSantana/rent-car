import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'

import { RentsRepositories } from '../repositories/RentsRepositories'

class UpdateFinishDateRentController {
  async handle(request: Request, response: Response): Promise<Response> {
    const rentsRepository = getCustomRepository(RentsRepositories)

    const { id, finish_date } = request.body

    await rentsRepository.update(id, { finish_date })
    const rent = await rentsRepository.findOne(id)

    return response.json(rent)
  }
}

export { UpdateFinishDateRentController }
