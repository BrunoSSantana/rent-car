import { Client } from '@modules/clients/entities/Client'
import { EntityRepository, Repository } from 'typeorm'

@EntityRepository(Client)
class ClientsRepositories extends Repository<Client> {}

export { ClientsRepositories }
