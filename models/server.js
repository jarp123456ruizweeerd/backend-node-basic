const express = require('express');
// const app = express();
const cors = require('cors');
const {coneccion} = require('../db/config'); 

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        //Llamado a la bd
        this.connectar();


        //Midelware
        this.midlewares()
        
        this.usersPath = '/api/usuarios'; 
        this.routes();

    }

    async connectar(){
        await coneccion();
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