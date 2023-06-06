const express = require('express');
const cors = require('cors');

class Server {
    constructor(){
        this.app = express();
        this.port = 3000;

        this.paths = {
            productos: '/api/productos',
            usuarios: '/api/usuarios',
            movimientosCaja: '/api/movimientosCaja'
           
        };

        this.middlewares();

        this.routes();
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: true}));
    }

    routes(){
        this.app.use( this.paths.productos, require('../routes/productos'));
        this.app.use( this.paths.usuarios, require('../routes/usuarios'));
        this.app.use( this.paths.movimientosCaja, require('../routes/movimientosCaja'));
       
        
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto',  3000);
        });
    }
}
module.exports = Server;