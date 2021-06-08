import { Router } from "express";

// # Arquivos próprios
import { SettingsController } from "./controllers/SettingsController";

const routes = Router();

/*
    Tipos de parâmetros
    Route Params =>  Paramêtros de rotas
    Query Params =>  Filtros e buscas
    Body Params =>  passar objetos dentro das requisições
*/

const settingsController = new SettingsController();

routes.post("/settings", settingsController.create )

export { routes };
