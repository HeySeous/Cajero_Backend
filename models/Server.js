const express = require('express');
const cors = require('cors');

class Server {
    constructor(){
        this.app = express();
        this.port = 3000;

        this.paths = {
            productos: '/api/productos',
            usuarios: '/api/usuarios',
            movimientosCaja: '/api/movimientosCaja',
            caja: 'api/caja',
            tickets: 'api/tickets',
            ventas: 'api/ventas'           
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
        this.app.use( this.paths.caja, require('../routes/caja'));
        this.app.use( this.paths.tickets, require('../routes/tickets'));
        this.app.use( this.paths.ventas, require('../routes/ventas'));
       
        
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto',  3000);
        });
    }
}
module.exports = Server;