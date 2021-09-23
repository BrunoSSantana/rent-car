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
    const { car_id, finish_date, start_date }: ICreateRentRequest = request.body

    const { client_id } = request

    const rentsRepository = getCustomRepository(RentsRepositories)
    const carsRepository = getCustomRepository(CarsRepositories)
    const dayjsDateProvider = new DayjsDateProvider()

    const { daily_amount } = await carsRepository.findOne({ id: car_id })

    const dias = dayjsDateProvider.compareInDays(start_date, finish_date)

    const amount = daily_amount * dias

    const rent = rentsRepository.create({
      amount,
      car_id,
      client_id,
      finish_date: new Date(),
      start_date: new Date()
    })

    await rentsRepository.save(rent)

    return response.json(rent)
  }
}

export { CreateRentsController }
