const express = require('express');
const {registerNewOrder,fetchAllOrders,fetchOrderByCustomerId} = require('../controllers');
const router = express.Router();

router.post('/orders', registerNewOrder);
router.get('/orders', fetchAllOrders);
router.get('/orders/:id', fetchOrderByCustomerId);

module.exports = router;