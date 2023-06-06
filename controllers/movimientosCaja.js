const connection = require('../database/config');

const movimientosCajaGet = async(req, res) => {
   try {
        connection.query('SELECT * FROM movimientoscaja;', (err, results) => {
            res.json(results);
        });
    } catch (error) {
        console.log(error)
}


}

const movimientocaja = async(req, res) => {
    try{
        const {iD_Mov} = req.params;

        connection.query(`SELECT * FROM movimientoscaja WHERE iD_Mov = ${iD_Mov};`, (err, results) => {
            res.json(results);
        })
        
    }catch(error){
        console.log(error);
    }
}

const movimientocajaPost = async(req, res) => {
    try{
        const {cantidad, tipoMovimiento, comentario, iD_Caja} = req.body;

        connection.query(`INSERT INTO movimientoscaja(iD_Mov, cantidad, tipoMovimiento,
            comentario, iD_Caja) 
        VALUES(SYSDATE, ${cantidad}, "${tipoMovimiento}", "${comentario}", ${iD_Caja})`,
         (err, results) => {
            res.json(results);
        });
    }catch(error){
        console.log(error);
    }
}

module.exports =  {
    movimientosCajaGet,
    movimientocaja,
    movimientocajaPost
}