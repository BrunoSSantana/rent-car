import { CarsRepositories } from '@modules/cars/repositories/CarsRepositories'
import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'

import { RentsRepositories } from '../repositories/RentsRepositories'

class FinallyRentController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const rentsRepository = getCustomRepository(RentsRepositories)
      const carsRepository = getCustomRepository(CarsRepositories)

      const { id } = request.body

      const rent = await rentsRepository.findOne(id)

      carsRepository.updateAvailable(rent.car_id, true)

      return response.json()
    } catch (error) {
      return response.json(error)
    }
  }
}

export { FinallyRentController }
