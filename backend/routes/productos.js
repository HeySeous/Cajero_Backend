const {Router} = require('express');

const router = Router();

const {productosGet, productoGet, productoPost} = require('../controllers/productos');

router.get('/', productosGet);
router.get('/:iD_Prod', productoGet);
router.post('/', productoPost);

module.exports = router;