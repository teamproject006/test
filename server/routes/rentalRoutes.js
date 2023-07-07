const express = require('express');
const router = express.Router();
const {getAllRentals,addRental} = require('../controllers/Rental');

router.get('/', getAllRentals);
router.post('/', addRental);

module.exports = router;