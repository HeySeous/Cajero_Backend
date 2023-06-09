const connection = require('../database/config');

const cajasGet = async(req,res) => {
    try {
        connection.query('SELECT * FROM cajas;', (err, results) => {
            res.json(results);
        });
    }catch (error){
        console.log(error);
    }
}

const cajaPost = async(req,res) => {
    try {
        const {cantidadInicial, iD_User} = req.body;

        connection.query(`INSERT INTO cajas(cantidadInicial, iD_User, totalNeto, iD_User, iD_Mov) VALUES(${cantidadInicial}, ${iD_User});`, (err, results) =>{
            res.json(results);
        });
    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    cajasGet,
    cajaPost
}