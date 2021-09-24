import { EntityRepository, Repository } from 'typeorm'

import { Rent } from '../entities/Rent'

@EntityRepository(Rent)
class RentsRepositories extends Repository<Rent> {
  async findByUser(user_id: string): Promise<Rent[]> {
    const rentals = this.find({
      where: { user_id },
      relations: ['car']
    })

    return rentals
  }
}

export { RentsRepositories }
