import { getCustomRepository } from "typeorm";

// # Own files
import { MessagesRepository } from "../repositories/MessagesRpository";

interface IMessageCreate {
    admin_id?: string;
    text: string;
    user_id: string;
}
class MessagesService {
    async create({ admin_id, text, user_id }: IMessageCreate){
        const messagesRepository = getCustomRepository(MessagesRepository);

        const message = messagesRepository.create({
            admin_id,
            text,
            user_id
        })

        await messagesRepository.save(message);

        return message;
    }
}

export { MessagesService };
