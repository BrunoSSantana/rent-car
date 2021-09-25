import { CarsRepositories } from '@modules/cars/repositories/CarsRepositories'
import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'

class FindAllCars {
  async handle(request: Request, response: Response): Promise<Response> {
    const carsRepositories = getCustomRepository(CarsRepositories)
    const cars = await carsRepositories.find()
    return response.json(cars)
  }
}

export { FindAllCars }
