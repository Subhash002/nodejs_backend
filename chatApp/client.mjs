import net from "net";
import readline from "readline";

const readLine = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

readLine.question("Enter your username: ", (userName) => {
  const client = net.connect({ port: 8080 }, () => {
    console.log(`Connected to the server as ${userName}`);
  });

  readLine.on("line", (data) => {
    const message = `${userName}: ${data}`;
    client.write(message);
  });

  client.on("data", (data) => {
    console.log(data.toString());
  });

  client.on("error", (err) => {
    console.error(err);
  });
});
