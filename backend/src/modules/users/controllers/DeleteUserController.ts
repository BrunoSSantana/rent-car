import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'

import { UsersRepositories } from '../repositories/UsersRepositories'

class DeleteUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const usersRepository = getCustomRepository(UsersRepositories)
      const { id } = request.body

      await usersRepository.delete(id)

      return response.json({ message: 'Usuário excluído' })
    } catch (error) {
      return response.json(error)
    }
  }
}

export { DeleteUserController }
