const express = require('express');
const cors = require('cors');
const {socketController} = require('../sockets/controller')

class Server {


    constructor() {
        this.app  = express();
        this.port = process.env.PORT;
        this.server = require('http').createServer(this.app);
        this.paths = {}
        // Middlewares implmentado para trabajar server y client en el mismo proyecto
        this.middlewares();
        this.io = require('socket.io')(this.server, {
            cors: {
              origin: process.env.CLIENT_URL,
              methods: ['GET', 'POST']
            }
          });
        // Rutas de mi aplicación
        this.routes();
        //Sockets
        this.sockets();
    }
    middlewares() {
        // CORS
        this.app.use( cors() );
        // Directorio Público
        this.app.use( express.static('public') );
        // Fileupload - Carga de archivos
    }
    routes() {
        // this.app.use( this.paths.auth, require('../routes/auth'));
    }
    sockets(){
        this.io.on('connection', (socket) => {
            socketController(socket, this.io);
        });
    }
    listen() {
        this.server.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port );
        });
    }

}




module.exports = Server;