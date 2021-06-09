import { getCustomRepository } from "typeorm";

// # Own files
import { UsersRepository } from "../repositories/UsersRepository";

class UsersService {
    async create(email: string) {
        const usersRepository = getCustomRepository(UsersRepository);

        //_verificar se o usuário existe
        const userExists = await usersRepository.findOne({
            email
        })

        //_ Se existir, retornar user.
        if (userExists) {
            return userExists;
        }

        //_ Se não existi, salvar no BD
        const user = usersRepository.create({
            email
        });

        await usersRepository.save(user);

        return user;

    }
}

export { UsersService };