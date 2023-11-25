const http = require("http");
const express = require("express");
const cors = require("cors");
const socketIO = require("socket.io");

const app = express();
const users = [{}];
app.use(cors());

app.get("/", (req, res) => {
  res.send("Server is working...");
});

const server = http.createServer(app);
const io = socketIO(server);

io.on("connection", (socket) => {
  console.log("New Connection");

  socket.on("joined", ({ user }) => {
    users[socket.id] = user;
    console.log(`${user} has joined the chat`);
    socket.broadcast.emit("userJoined", {
      user: "Admin",
      message: `${users[socket.id]} has joined`,
    });
  });

  socket.emit("welcome", { user: "Admin", message: `Welcome to the chat` });
});

server.listen(4000, () => {
  console.log("Server is running on : http://localhost:4000");
});
