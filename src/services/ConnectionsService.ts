import { getCustomRepository, Repository} from "typeorm";

// # Own files
import { ConnecionsRepository } from "../repositories/ConnectionsRepository";
import { Connection } from "../entities/Connetion";

interface IConnetionCreate {
    socket_id: string;
    user_id: string;
    admin_id?: string;
    id?: string;
};

class ConnectionsService {
    private ConnectionsRepository: Repository<Connection>

    constructor() {
        this.ConnectionsRepository = getCustomRepository(ConnecionsRepository);
    }

    async create({socket_id, user_id, admin_id, id}: IConnetionCreate){
        const connetion = this.ConnectionsRepository.create({
            socket_id,
            user_id,
            admin_id,
            id
        });

        await this.ConnectionsRepository.save(connetion);

        return connetion;
    }

    async findByUserId(user_id: string){
        const connection = await this.ConnectionsRepository.findOne({
            user_id,
        });

        return connection;
    }

    async findAllWithoutAdin() {
        const connections = await this.ConnectionsRepository.find({
            where: { admin_id: null},
            relations: ["user"],
        })

        return connections;
    }
}

export { ConnectionsService };