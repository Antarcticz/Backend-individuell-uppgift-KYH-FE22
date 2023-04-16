const router = require('express').Router();
const orderModel = require('../models/orderModel');
const { verifyToken } = require('../authentication/auth')

router.post('/post', verifyToken, orderModel.postOrder)

router.get('/myOrders', verifyToken, orderModel.getOrders)

module.exports = router;