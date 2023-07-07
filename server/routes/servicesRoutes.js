const express = require('express');
const router = express.Router();
const {addService,deleteService,getAllServices,updateService,getOneService} = require('../controllers/Services');


router.post('/', addService);
router.delete('/:serviceId', deleteService);
router.get('/', getAllServices);
router.get('/:serviceId', getOneService);
router.put('/:serviceId', updateService);

module.exports = router;
