import { getCustomRepository, Repository } from "typeorm";

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
    private connectionsRepository: Repository<Connection>

    constructor() {
        this.connectionsRepository = getCustomRepository(ConnecionsRepository);
    }

    async create({ socket_id, user_id, admin_id, id }: IConnetionCreate) {
        const connetion = this.connectionsRepository.create({
            socket_id,
            user_id,
            admin_id,
            id
        });

        await this.connectionsRepository.save(connetion);

        return connetion;
    }

    async findByUserId(user_id: string) {
        const connection = await this.connectionsRepository.findOne({
            user_id,
        });

        return connection;
    }

    async findAllWithoutAdmin() {
        const connections = await this.connectionsRepository.find({
            where: { admin_id: null },
            relations: ["user"],
        })

        return connections;
    }

    async findBySocketID(socket_id: string) {
        const connection = await this.connectionsRepository.findOne({
            socket_id,
        });

        return connection;
    }

    async updateAdminID(user_id: string, admin_id: string) {
        await this.connectionsRepository
            .createQueryBuilder()
            .update(Connection)
            .set({ admin_id })
            .where("user_id = :user_id", {
                user_id,
            })
            .execute();
    }

    async deleteBySocketId(socket_id: string) {
        await this.connectionsRepository
            .createQueryBuilder()
            .delete()
            .where("socket_id = :socket_id", {
                socket_id,
            })
            .execute();
    }
}

export { ConnectionsService };