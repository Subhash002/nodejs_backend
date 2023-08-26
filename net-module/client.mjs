import net from "net";
const client = net.connect({ port: 3000 }, function () {
  console.log();
});
client.on("data", (data) => {
  console.log("Received data");
});
