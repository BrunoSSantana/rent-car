import { EntityRepository, Repository } from 'typeorm'

import { Car } from '../entities/Car'

@EntityRepository(Car)
class ClientsRepositories extends Repository<Car> {}

export { ClientsRepositories }
