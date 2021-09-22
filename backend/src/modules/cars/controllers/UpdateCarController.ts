import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'

import { CarsRepositories } from '../repositories/CarsRepositories'

interface ICarRequest {
  id: string
  avatar?: string
  color?: string
  daily_amount?: number
  license_plate?: string
  model?: string
  year?: string
}

class UpdateCarController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      id,
      avatar,
      color,
      daily_amount,
      license_plate,
      model,
      year
    }: ICarRequest = request.body

    const carsRepository = getCustomRepository(CarsRepositories)

    const query = carsRepository
      .createQueryBuilder()
      .where('id = :id')
      .setParameters({ id })
      .update()

    if (avatar) {
      query.set({ avatar })
    }

    if (color) {
      query.set({ color })
    }

    if (daily_amount) {
      query.set({ daily_amount })
    }

    if (license_plate) {
      query.set({ license_plate })
    }

    if (model) {
      query.set({ model })
    }

    if (year) {
      query.set({ year })
    }

    await query.execute()

    const car = await carsRepository.findOne(id)

    return response.json(car)
  }
}

export { UpdateCarController }
