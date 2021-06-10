import { Router } from "express";

// # own files
import { SettingsController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersController";
import { MessagesController } from "./controllers/MessagesController";

const routes = Router();

/*
    Tipos de parâmetros
    Route Params =>  Paramêtros de rotas
    Query Params =>  Filtros e buscas
    Body Params =>  passar objetos dentro das requisições
*/

const settingsController = new SettingsController();
const usersController = new UsersController();
const messagesController = new MessagesController();

routes.post("/settings", settingsController.create );
routes.get("/settings/:username", settingsController.findByUsername );
routes.put("/settings/:username", settingsController.update );

routes.post("/users", usersController.create );

routes.post("/messages", messagesController.create );
routes.get("/messages/:id", messagesController.showByUser );

export { routes };
