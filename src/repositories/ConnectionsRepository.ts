import { EntityRepository, Repository } from "typeorm";

// # Own files
import { Connection } from "../entities/Connetion";

@EntityRepository(Connection)
class ConnecionsRepository extends Repository<Connection>{

}

export { ConnecionsRepository };