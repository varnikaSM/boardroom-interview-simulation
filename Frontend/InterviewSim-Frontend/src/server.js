import express from "express";
import cors from "cors";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173", // Adjust to your frontend URL
    methods: ["GET", "POST"]
  }
});

app.use(cors());
app.use(express.json());

io.on("connection", (socket) => {
  console.log("New client connected:", socket.id);

  socket.on("call-user", ({ signal }) => {
    socket.broadcast.emit("call-user", { signal });
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

const PORT = 5000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
