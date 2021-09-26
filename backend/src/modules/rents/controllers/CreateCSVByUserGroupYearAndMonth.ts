import { CarsRepositories } from '@modules/cars/repositories/CarsRepositories'
import { UsersRepositories } from '@modules/users/repositories/UsersRepositories'
import { Request, Response } from 'express'
import fs from 'fs'
import { parse } from 'json2csv'
import { getCustomRepository } from 'typeorm'

import { RentsRepositories } from '../repositories/RentsRepositories'

class CreateCSVByUserGroupYearAndMonth {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const rentsRepository = getCustomRepository(RentsRepositories)
      const carsRepository = getCustomRepository(CarsRepositories)
      const usersRepository = getCustomRepository(UsersRepositories)
      const { year, month } = request.body

      const { user_id } = request

      const user = await usersRepository.findOne({ id: user_id })

      // buscar os carros do usuário
      const cars = await carsRepository.find({ user_id })
      const cars_id = cars.map(car => {
        return `'${car.id}'`
      })

      // buscar os alugueis que contenham um daqueles carros
      // classificar por mês e ano
      const entityManager = await rentsRepository.query(`
      SELECT *
      FROM rents
      WHERE EXTRACT (month FROM finish_date) = ${month}
      AND EXTRACT (year FROM finish_date) = ${year}
      AND car_id IN (${cars_id})
      ;
    `)

      // converter em csv
      const csv = parse(entityManager)

      // exportar para uma pasta temp
      const nameCsv = `${month}-${year}-${user.name}.csv`
      fs.writeFileSync(`tmp/${nameCsv}`, `${csv}`)

      return response.json(nameCsv)
    } catch (error) {
      return response.json(error)
    }
  }
}

export { CreateCSVByUserGroupYearAndMonth }
