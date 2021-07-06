const socket = io("http://localhost:3000");

socket.on("started_chat", (data) => {
  console.log(data);
});
