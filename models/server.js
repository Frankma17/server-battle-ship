/**
 * Server of battle-ship
 */
//Use express server
const express = require("express");
//Implementation of cors politicy
const cors = require("cors");
//Implementation of socketController
const { socketController } = require("../controller/controller");
/**
 * Start Server class
 */
class Server {
  /**
   * Server class constructor
   */
  constructor() {
    //Express initialization
    this.app = express();
    //Port of enviroment variable
    this.port = process.env.PORT;
    //Http Server
    this.server = require("http").createServer(this.app);
    // Use of middleware for work tests with a customer
    this.middlewares();
    //Socket.io server
    this.io = require("socket.io")(this.server, {
      cors: {
        origin: process.env.CLIENT_URL,
        methods: ["GET", "POST"],
      },
    });
    //Application sockets
    this.sockets();
  }
  /**Middleware for tests */
  middlewares() {
    //CORS policy
    this.app.use(cors());
    //Public folder
    this.app.use(express.static("public"));
  }
  /*Socket controller initialization*/
  sockets() {
    this.io.on("connection", (socket) => {
      socketController(socket, this.io);
    });
  }
  /** Listen Method to get the connections*/
  listen() {
    this.server.listen(this.port, () => {
      console.log("Servidor corriendo en puerto", this.port);
    });
  }
}
/** Expose the server */
module.exports = Server;
