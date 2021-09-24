import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'

import { RentsRepositories } from '../repositories/RentsRepositories'

class FindRentByUserGroupByMonth {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const rentsRepository = getCustomRepository(RentsRepositories)

      const { client_id } = request

      // buscar os carros do usuário

      // buscar os alugueis que contenham um daqueles carros

      // classificar por mês e ano

      // converter em csv

      // exportar para uma pasta temp

      const rents = await rentsRepository.find({ client_id })

      return response.json(rents)
    } catch (error) {
      return response.json(error)
    }
  }
}

export { FindRentByUserGroupByMonth }
