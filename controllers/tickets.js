const { json } = require('body-parser');
const connection = require('../database/config');

const ticketsGet = async(req,res) => {
    try {
        connection.query('SELECT * FROM tickets;', (err, results) => {
            res.json(results);
        });
    }catch (error){
        console.log(error);
    }
}

const ticketGet = async(req,res) =>{
    try {
        const {iD_Ticket} = req.params;

        connection.query(`SELECT * FROM tickets WHERE iD_Ticket = ${iD_Ticket};`, (err, results) => {
            res.json(results);
        });
    } catch (error) {
        console.log(error);
    }
}

const ticketPost = async(req,res) => {
    try {
        const {tiempo, metodoPago, totalNeto, iD_User, iD_Mov} = req.body;

        connection.query(`INSERT INTO tickets(tiempo, metodoPago, totalNeto, iD_User, iD_Mov) VALUES(${tiempo}, ${metodoPago}, ${totalNeto}, ${iD_User}, ${iD_Mov});`, (err, results) =>{
            res.json(results);
        });
    } catch (error) {
        console.log(error);
    }
}

const ticketDelete = async(req,res) => {
    try {
        const {iD_Ticket} = req.params;
        connection.query(`DELETE FROM tickets WHERE iD_Ticket = ${iD_Ticket};`, (err,results) => {
            res.json(results);
        });
    } catch (error){
        console.log(error);
    }
}

const ticketPut = async(req, res) => {
    try {
        const {iD_Ticket} = req.params;
        const {tiempo, metodoPago, totalNeto, iD_User, iD_Mov} = req.body;

        connection.query(`UPDATE tickets SET tiempo = ${tiempo}, metodoPago = ${metodoPago}, totalNeto = ${totalNeto}, iD_User = ${iD_User}, iD_Mov = ${iD_Mov} WHERE iD_Ticket = ${iD_Ticket};`, (err, results) => {
            res,json(results);
        });

    } catch (error){
        console.log(error);
    }
}

module.exports = {
    ticketsGet,
    ticketGet,
    ticketPost,
    ticketDelete,
    ticketPut
}