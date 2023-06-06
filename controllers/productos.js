const connection = require('../database/config');

const productosGet = async(req, res) => {
   try {
        connection.query('SELECT * FROM productos;', (err, results) => {
            res.json(results);
        });
    } catch (error) {
        console.log(error)
}


}

const productoGet = async(req, res) => {
    try{
        const {iD_Prod} = req.params;

        connection.query(`SELECT * FROM productos WHERE iD_Prod = ${iD_Prod};`, (err, results) => {
            res.json(results);
        })
        
    }catch(error){
        console.log(error);
    }
}

const productoPost = async(req, res) => {
    try{
        const {nombre, precio, disponibilidad} = req.body;

        connection.query(`INSERT INTO productos(nombre, precio, disponibilidad) 
        VALUES("${nombre}", ${precio}, ${disponibilidad})`, (err, results) => {
            res.json(results);
        });
    }catch(error){
        console.log(error);
    }
}

module.exports =  {
    productosGet,
    productoGet,
    productoPost
}