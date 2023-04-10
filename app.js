/**Entry point of the application */
//Import enviroments variables
require('dotenv').config();
//Create a Server with the class server
const Server = require('./models/server')
//Inializer the server
const server = new Server();
//Server is listen
server.listen();
