const {Router} = require('express');

const router = Router();

const {cajasGet, cajaPost} = require('../controllers/caja');

router.get('/', cajasGet);
router.post('/', cajaPost);

module.exports = router;