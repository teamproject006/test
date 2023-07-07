const express = require('express');
const router = express.Router();
const {addService,deleteService,getAllServices,updateService} = require('../controllers/Services');


router.post('/', addService);
router.delete('/:serviceId', deleteService);
router.get('/', getAllServices);
router.patch('/:serviceId',updateService);

module.exports = router;
