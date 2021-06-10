import express from "express";
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import path from "path";

// # own files
import { routes } from "./routes";
import "./database";

const app = express();

app.use(express.static(path.join(__dirname, "..", "public")));
app.set("views", path.join(__dirname, "..", "public"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.get("/pages/client", (request, response) => {
    return response.render("html/client.html");
})

const http = createServer(app); //_ Criando o protocolo http
const io = new Server(http);    //_ Criando o protocolo ws

io.on("connection", (socket: Socket ) => {
    // console.log("Se conectou", socket.id);
}) 

app.use(express.json());

app.use(routes)

export { http, io };
