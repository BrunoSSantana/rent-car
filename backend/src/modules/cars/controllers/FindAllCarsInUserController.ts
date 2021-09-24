import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'

import { CarsRepositories } from '../repositories/CarsRepositories'

class FindAllCarsInUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { user_id } = request
      const carsRepository = getCustomRepository(CarsRepositories)

      const cars = await carsRepository.find({ user_id })

      return response.json(cars)
    } catch (error) {
      return response.json(error)
    }
  }
}

export { FindAllCarsInUserController }
