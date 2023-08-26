import net from "net";
const server = net.createServer();
const clients = [];
function broadcast(message, sender) {
  clients.forEach((client) => {
    if (client !== sender) {
      client.write(message);
    }
  });
}

server.on("connection", (socket) => {
  clients.push(socket);
  socket.write("Welcome to the chat !\n");
  socket.on("data", (data) => {
    const message = data.toString().trim();
    broadcast(message, socket);
  });
  socket.on("end", () => {
    clients.splice(clients.indexOf(socket), 1);
    console.log("Client disconnected");
  });
});
const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
