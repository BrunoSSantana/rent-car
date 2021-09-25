import { compare } from 'bcryptjs'
import dotenv from 'dotenv'
import { Request, Response } from 'express'
import { sign } from 'jsonwebtoken'
import { getCustomRepository } from 'typeorm'

import { UsersRepositories } from '../repositories/UsersRepositories'

dotenv.config()

class AuthUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { email, password } = request.body
      const usersRepository = getCustomRepository(UsersRepositories)

      const user = await usersRepository.findOne({ where: { email } })

      if (!user) {
        return response
          .json({ message: 'Email e/ou Senha incorretos' })
          .status(401)
      }

      const isValidPassword = await compare(password, user.password)

      if (!isValidPassword) {
        return response
          .json({ message: 'Email e/ou Senha incorretos' })
          .status(401)
      }

      const token = sign({ id: user.id }, process.env.JWT_KEY, {
        expiresIn: '1d'
      })

      return response.json(token)
    } catch (error) {
      return response.json(error)
    }
  }
}

export { AuthUserController }
