import net from "net";

let sockets = [];

const broadCast = (data) => {
  sockets.forEach((socket) => {
    socket.write(data);
  });
};

const server = net.createServer(function (socket) {
  sockets.push(socket);

  socket.on("data", (data) => {
    broadCast(data);
  });

  socket.on("end", function () {
    sockets = sockets.filter((s) => s !== socket);
  });

  socket.on("error", function (err) {
    console.log(err);
  });
});

server.listen(8080, () => console.log("Port is listening on 8080"));
