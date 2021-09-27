import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'

import { UsersRepositories } from '../repositories/UsersRepositories'

class DeleteUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const usersRepository = getCustomRepository(UsersRepositories)
      const { user_id } = request

      console.log(user_id)

      await usersRepository.delete(user_id)

      return response.json({ message: 'Usuário excluído' })
    } catch (error) {
      return response.json(error)
    }
  }
}

export { DeleteUserController }
