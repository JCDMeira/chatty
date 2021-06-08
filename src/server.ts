import express from "express";
import { routes } from "./routes";

// # Arquivos próprios
import "./database";

const app = express();

app.use(express.json());

app.use(routes)

app.listen(3333, ()=> console.log("Server is running on port 3333"));
