import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'

import { CarsRepositories } from '../repositories/CarsRepositories'

interface ICarRequest {
  avatar: string
  color: string
  daily_amount: number
  license_plate: string
  model: string
  year: string
}

class CreateCarController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const {
        avatar,
        color,
        daily_amount,
        license_plate,
        model,
        year
      }: ICarRequest = request.body
      const { user_id } = request
      const carsRepository = getCustomRepository(CarsRepositories)

      // validar placa

      const carAlreadyExists = await carsRepository.findOne({ license_plate })

      if (carAlreadyExists) {
        return response.status(400).json({ message: 'Car Already exists' })
      }

      const car = carsRepository.create({
        avatar,
        color,
        daily_amount,
        license_plate,
        model,
        user_id,
        year
      })

      await carsRepository.save(car)

      return response.json(car)
    } catch (error) {
      return response.json(error)
    }
  }
}

export { CreateCarController }
