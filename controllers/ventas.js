const connection = require('../database/config');

const ventasGet = async(req,res) => {
    try {
        connection.query('SELECT * FROM ventas;', (err, results) => {
            res.json(results);
        });
    }catch (error){
        console.log(error);
    }
}


const ventaPost = async(req,res) => {
    try {
        const {cantidad, precio, iD_Ticket, iD_Prod} = req.body;

        connection.query(`INSERT INTO ventas(cantidad, precio, iD_Ticket, iD_Prod, iD_Mov) VALUES(${cantidad}, ${precio}, ${iD_Ticket}, ${iD_Prod});`, (err, results) =>{
            res.json(results);
        });
    } catch (error) {
        console.log(error);
    }
}



module.exports = {
    ventasGet,
    ventaPost
}