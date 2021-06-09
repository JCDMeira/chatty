import { EntityRepository, Repository } from "typeorm";

// # own files
import { User } from "../entities/User";

@EntityRepository(User)
class UsersRepository extends Repository<User>{

}

export { UsersRepository };