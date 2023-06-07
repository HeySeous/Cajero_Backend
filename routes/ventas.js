const {Router} = require('express');

const router = Router();

const {ventasGet, ventaPost} = require('../controllers/ventas.js');

router.get('/', ventasGet);
router.post('/', ventaPost);

module.exports = router;