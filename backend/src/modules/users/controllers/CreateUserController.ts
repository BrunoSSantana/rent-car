import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'

import { UsersRepositories } from '../repositories/UsersRepositories'

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body
    const usersRepository = getCustomRepository(UsersRepositories)

    const userAlreadyExists = await usersRepository.findOne({ email })

    if (userAlreadyExists) {
      return response.status(400).json({ message: 'User Already exists' })
    }

    const user = usersRepository.create({ email, name, password })

    await usersRepository.save(user)

    return response.json(user)
  }
}

export { CreateUserController }