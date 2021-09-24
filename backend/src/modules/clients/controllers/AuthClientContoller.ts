import { compare } from 'bcryptjs'
import dotenv from 'dotenv'
import { Request, Response } from 'express'
import { sign } from 'jsonwebtoken'
import { getCustomRepository } from 'typeorm'

import { ClientsRepositories } from '../repositories/ClientsRepositories'

dotenv.config()

class AuthClientController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { email, password } = request.body
      const clientsRepository = getCustomRepository(ClientsRepositories)

      const client = await clientsRepository.findOne({ where: { email } })

      if (!client) {
        return response
          .json({ message: 'Email e/ou Senha incorretos' })
          .status(401)
      }

      const isValidPassword = await compare(password, client.password)

      if (!isValidPassword) {
        return response
          .json({ message: 'Email e/ou Senha incorretos' })
          .status(401)
      }

      const token = sign({ id: client.id }, process.env.JWT_KEY, {
        expiresIn: '1d'
      })

      return response.json(token)
    } catch (error) {
      return response.json(error)
    }
  }
}

export { AuthClientController }
