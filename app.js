const express = require("express");
const socketio = require("socket.io");
const http = require("http");

const app = express();

const server = http.createServer(app);
const io = socketio(server);

app.set("view engine", "ejs");
app.set(express.static(path.join(__dirname,"public")));

app.get("/", function(req,res) {
    res.send("hey");
});

server.listen(3000);