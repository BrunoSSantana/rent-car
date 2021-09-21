import dotenv from 'dotenv'
import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'

dotenv.config()

interface IPayload {
  id: string
}

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
): void | Response {
  const token = request.headers.authorization.split(' ')[1]

  if (!token) {
    return response.status(401).end()
  }

  try {
    const { id } = verify(token, process.env.JWT_KEY) as IPayload

    request.user_id = id

    next()
  } catch (error) {
    return response.status(401).end()
  }
}
