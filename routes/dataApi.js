const express = require('express');
const router = express.Router();
const { chartSource } = require('../controllers/chart');
const { calculateBuy } = require('../controllers/compras');
const { tableSource } = require('../controllers/table');

router.get('/calculateBuy', calculateBuy)
router.get('/chartSource', chartSource)
router.get('/tableSource', tableSource)
    
module.exports = router;