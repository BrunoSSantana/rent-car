import { RentsRepositories } from '@modules/rents/repositories/RentsRepositories'
import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'

class FindAllRents {
  async handle(request: Request, response: Response): Promise<Response> {
    const rentsRepositories = getCustomRepository(RentsRepositories)
    const rents = await rentsRepositories.find()
    return response.send(rents)
  }
}

export { FindAllRents }
