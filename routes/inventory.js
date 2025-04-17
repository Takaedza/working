const express = require('express');
const router = new express.Router();
const invController = require('../controllers/inventoryController.js');

router.get('/detail/:id', invController.buildVehicleDetail);

module.exports = router;