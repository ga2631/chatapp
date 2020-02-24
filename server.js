const express = require("express");
const mongoose = require("mongoose");
const http = require("http");
const path = require("path");
const socketIO = require("socket.io");
const dotenv = require("dotenv");
const cors = require("cors");
const _ = require("lodash");

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.use(cors());

let clientOnline = [];

io.on("connection", client => {
  console.log("CLient is connect");

  client.on("join", (account, callback) => {
    if (!_.isEmpty(account)) {
      clientOnline.push({ id: client.id, account });

      callback(account);
      io.emit("joined", account);
      io.emit("onlineAccount", clientOnline);
    }
    callback({});
  });

  client.on("sendMessage", message => {
    io.emit("receiveMessage", message);
  });

  client.on("disconnect", () => {
    console.log("Client is disconnected");
  });
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected ...");

    const port = process.env.PORT || 8000;
    server.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch(err => {
    console.log(err);
  });
