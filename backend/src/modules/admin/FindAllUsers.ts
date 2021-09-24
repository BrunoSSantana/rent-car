import { UsersRepositories } from '@modules/users/repositories/UsersRepositories'
import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'

class FindAllUsers {
  async handle(request: Request, response: Response): Promise<Response> {
    const usersRepositories = getCustomRepository(UsersRepositories)
    const users = await usersRepositories.find()
    return response.send(users)
  }
}

export { FindAllUsers }
