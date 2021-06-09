import { getCustomRepository, Repository } from "typeorm";
import { User } from "../entities/User";

// # Own files
import { UsersRepository } from "../repositories/UsersRepository";

class UsersService {
    private usersRepository: Repository<User>;

    constructor() {
        this.usersRepository = getCustomRepository(UsersRepository);
    }

    async create(email: string) {

        //_verificar se o usuário existe
        const userExists = await this.usersRepository.findOne({
            email
        })

        //_ Se existir, retornar user.
        if (userExists) {
            return userExists;
        }

        //_ Se não existi, salvar no BD
        const user = this.usersRepository.create({
            email
        });

        await this.usersRepository.save(user);

        return user;

    }
}

export { UsersService };