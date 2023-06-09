const {Router} = require('express');

const router = Router();

const {ticketsGet, ticketGet, ticketPost, ticketDelete, ticketPut} = require('../controllers/tickets');

router.get('/', ticketsGet);
router.get('/:iD_Ticket', ticketGet);
router.post('/', ticketPost);
router.delete('/:iD_Ticket', ticketDelete);
router.put('\:iD_Ticket', ticketPut);

module.exports = router;