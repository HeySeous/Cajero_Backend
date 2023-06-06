/**
import Express  from 'express';
import mysql from 'mysql2';
import cors from 'cors';

const app = Express();



const con = mysql.createConnection({
    host: '127.0.0.1',
    user:'root',
    database: 'grillstore'
})
//Middlewear
app.use(Express.json());
app.use(cors());
//DB connection
con.connect(function(err) {
    if (err) throw err;
    console.log("Database found")
})
//HTTP Requests
app.get("/", (req,res)=>{
    return res.json("Backend")
}
)
app.get("/productos", (req,res)=>{
    con.query("SELECT * FROM productos", (err, result)=> {
        if (err)  {
            return res.json(err);
          }
        return res.json(result)
      });
}
)
app.post("/productos", (req,res)=>{
    const values = [req.body.nombre,
                    req.body.precio,
                    req.body.disponibilidad];
    con.query('INSERT INTO productos(nombre,precio,disponibilidad) VALUES(?)',[values], 
    (err, result)=> {
        if (err) return res.json(err);
        return res.json(result)
      });

}
)
//Port
app.listen(5000, ()=>{
    console.log('Express server connected')
}
)**/
require('dotenv').config();

const Server = require('./models/Server');

const server = new Server();

server.listen();