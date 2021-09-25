import { hash } from 'bcryptjs'
import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'

import { UsersRepositories } from '../repositories/UsersRepositories'

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { name, email, password } = request.body
      const usersRepository = getCustomRepository(UsersRepositories)

      const userAlreadyExists = await usersRepository.findOne({ email })

      if (userAlreadyExists) {
        return response.status(400).json({ message: 'User Already exists' })
      }
      const passwordHash = await hash(password, 8)

      const user = usersRepository.create({
        email,
        name,
        password: passwordHash
      })

      await usersRepository.save(user)

      return response.json(user)
    } catch (error) {
      return response.json(error)
    }
  }
}

export { CreateUserController }
