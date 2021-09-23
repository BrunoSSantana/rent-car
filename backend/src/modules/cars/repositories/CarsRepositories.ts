import { EntityRepository, Repository } from 'typeorm'

import { Car } from '../entities/Car'

@EntityRepository(Car)
class CarsRepositories extends Repository<Car> {
  async updateAvailable(id: string, available: boolean): Promise<void> {
    await this.createQueryBuilder()
      .update()
      .set({ available })
      .where('id = :id')
      .setParameters({ id })
      .execute()
  }
}

export { CarsRepositories }
