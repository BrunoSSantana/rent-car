import { hash } from 'bcryptjs'
import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'

import { UsersRepositories } from '../repositories/UsersRepositories'

class UpdateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const usersRepository = getCustomRepository(UsersRepositories)
    const { email, name, password } = request.body
    const { user_id } = request

    const query = usersRepository
      .createQueryBuilder()
      .update()
      .where('id = :id', { id: user_id })

    if (email) {
      query.set({ email })
    }
    if (name) {
      query.set({ name })
    }
    if (password) {
      const passwordHash = await hash(password, 8)
      query.set({ password: passwordHash })
    }

    await query.execute()

    return response.json({ message: 'Updated!' })
  }
}

export { UpdateUserController }
