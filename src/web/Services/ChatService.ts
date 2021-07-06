import { io } from "../../http";

io.on("connect", (socket) => {
  socket.emit("started_chat", {
    message: "Seu chat foi iniciado",
  });
});
