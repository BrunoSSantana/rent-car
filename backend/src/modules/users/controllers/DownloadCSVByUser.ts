/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express'
import path from 'path'

class DownloadCSVByUSer {
  async handle(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    const { nameCsv } = request.body
    return response.sendFile(
      path.join(__dirname, '..', '..', '..', '..', `tmp/${nameCsv}`)
    )
  }
}

export { DownloadCSVByUSer }
