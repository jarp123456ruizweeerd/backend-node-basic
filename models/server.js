const express = require('express');
// const app = express();
const cors = require('cors');
class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        //Midelware
        this.midlewares()
        
        this.usersPath = '/api/usuarios'; 
        this.routes();

    }


    midlewares() {
        this.app.use(cors());

        //Lectura y parsea del body
        this.app.use(express.json())

        //Directorio publico
        this.app.use(express.static('public'));

    }


    routes() {
        this.app.use(this.usersPath, require('../routes/users.routes')) 
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Escuchando por el puerto ', this.port)
        });
    }


}

module.exports = Server