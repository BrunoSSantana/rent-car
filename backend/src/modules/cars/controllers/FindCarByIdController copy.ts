import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'

import { CarsRepositories } from '../repositories/CarsRepositories'

class FindCarByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params
      const carsRepository = getCustomRepository(CarsRepositories)

      const car = await carsRepository.find({ id })

      return response.json(car)
    } catch (error) {
      return response.json(error)
    }
  }
}

export { FindCarByIdController }
