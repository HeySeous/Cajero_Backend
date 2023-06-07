const {Router} = require('express');

const router = Router();

const {usuariosGet, usuarioGet, usuarioPost} = require('../controllers/usuarios');

router.get('/', usuariosGet);
router.get('/:iD_User', usuarioGet);
router.post('/', usuarioPost);

module.exports = router;