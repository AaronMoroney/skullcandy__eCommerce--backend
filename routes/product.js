const express = require('express');
const router = express.Router();

const productCtrl = require('../controllers/product');

//edited the end point for get all products to '/getAllProducts'
router.get('/', productCtrl.getAllProducts);
router.get('/:id', productCtrl.getOneProduct);
router.post('/order', productCtrl.orderProducts);

module.exports = router;