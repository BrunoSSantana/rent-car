import { EntityRepository, Repository } from 'typeorm'

import { Car } from '../entities/Car'

@EntityRepository(Car)
class CarsRepositories extends Repository<Car> {}

export { CarsRepositories }
