import { CarsRepositories } from '@modules/cars/repositories/CarsRepositories'
import { DayjsDateProvider } from '@utils/DayjsDateProvider'
import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'

import { RentsRepositories } from '../repositories/RentsRepositories'

interface ICreateRentRequest {
  amount: number
  car_id: string
  user_id: string
  start_date: Date
  finish_date: Date
}

class CreateRentsController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const dayjsDateProvider = new DayjsDateProvider()
      const rentsRepository = getCustomRepository(RentsRepositories)
      const carsRepository = getCustomRepository(CarsRepositories)

      const { car_id, finish_date, start_date }: ICreateRentRequest =
        request.body
      const { client_id } = request

      const car = await carsRepository.findOne({ id: car_id })

      if (!car) {
        return response.json({ message: 'This car does not exists!' })
      }

      const carsIsAvailable = car.available

      if (!carsIsAvailable) {
        return response.status(401).json({ message: 'Car is not available' })
      }

      const { daily_amount } = await carsRepository.findOne({ id: car_id })

      const days = dayjsDateProvider.compareInDays(start_date, finish_date)

      const amount = daily_amount * days

      const rent = rentsRepository.create({
        amount,
        car_id,
        client_id,
        finish_date,
        start_date: dayjsDateProvider.dateNow()
      })
      await rentsRepository.save(rent)

      await carsRepository.updateAvailable(car_id, false)

      return response.json(rent)
    } catch (error) {
      return response.json(error)
    }
  }
}

export { CreateRentsController }
