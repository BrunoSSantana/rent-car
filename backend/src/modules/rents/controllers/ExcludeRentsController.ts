// import { CarsRepositories } from '@modules/cars/repositories/CarsRepositories'
// import { DayjsDateProvider } from '@utils/DayjsDateProvider'
import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'

import { RentsRepositories } from '../repositories/RentsRepositories'

class ExcludeRentsController {
  async handle(request: Request, response: Response): Promise<Response> {
    // const dayjsDateProvider = new DayjsDateProvider()
    const rentsRepository = getCustomRepository(RentsRepositories)
    // const carsRepository = getCustomRepository(CarsRepositories)

    const { id } = request.body

    await rentsRepository.delete(id)

    return response.json()
  }
}

export { ExcludeRentsController }
