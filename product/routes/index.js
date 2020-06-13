const express = require('express');
const {registerProduct,fetchAllProducts,fetchProductById} = require('../controllers');
const router = express.Router();

router.post('/products', registerProduct);
router.get('/products', fetchAllProducts);
router.get('/products/:id', fetchProductById);

module.exports = router;