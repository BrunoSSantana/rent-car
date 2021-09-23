import { EntityRepository, Repository } from 'typeorm'

import { Rent } from '../entities/Rent'

@EntityRepository(Rent)
class RentsRepositories extends Repository<Rent> {}

export { RentsRepositories }
