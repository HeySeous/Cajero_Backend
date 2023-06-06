const connection = require('../database/config');

const usuariosGet = async(req, res) => {
   try {
        connection.query('SELECT * FROM usuarios;', (err, results) => {
            res.json(results);
        });
    } catch (error) {
        console.log(error)
}


}

const usuarioGet = async(req, res) => {
    try{
        const {iD_User} = req.params;

        connection.query(`SELECT * FROM usuarios WHERE iD_User = ${iD_User};`, (err, results) => {
            res.json(results);
        })
        
    }catch(error){
        console.log(error);
    }
}

const usuarioPost = async(req, res) => {
    try{
        const {nombre, apellido, tipoUsuario} = req.body;

        connection.query(`INSERT INTO usuarios(nombre, apellido, tipoUsuario) 
        VALUES("${nombre}", "${apellido}," ${tipoUsuario})`, (err, results) => {
            res.json(results);
        });
    }catch(error){
        console.log(error);
    }
}

module.exports =  {
    usuariosGet,
    usuarioGet,
    usuarioPost
}