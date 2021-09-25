import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'

import { UsersRepositories } from '../repositories/UsersRepositories'

class FindUserByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.body
      const usersRepository = getCustomRepository(UsersRepositories)

      const user = await usersRepository.findOne(id)

      return response.json(user)
    } catch (error) {
      return response.json(error)
    }
  }
}

export { FindUserByIdController }
