const {Router} = require('express');

const router = Router();

const {movimientosCajaGet, movimientocaja, movimientocajaPost} = require('../controllers/movimientosCaja');

router.get('/', movimientosCajaGet);
router.get('/:iD_Mov', movimientocaja);
router.post('/', movimientocajaPost);

module.exports = router;