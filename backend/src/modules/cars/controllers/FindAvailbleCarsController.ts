import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'

import { CarsRepositories } from '../repositories/CarsRepositories'

class FindAvailableCarsController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const carsRepository = getCustomRepository(CarsRepositories)

      const cars = await carsRepository.find({ available: true })

      return response.json(cars)
    } catch (error) {
      return response.json(error)
    }
  }
}

export { FindAvailableCarsController }
