import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'

import { CarsRepositories } from '../repositories/CarsRepositories'

class DeleteCarController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.body

      const carsRepository = getCustomRepository(CarsRepositories)

      await carsRepository
        .createQueryBuilder()
        .where('id = :id', { id })
        .delete()
        .execute()

      return response.send()
    } catch (error) {
      return response.json(error)
    }
  }
}

export { DeleteCarController }
