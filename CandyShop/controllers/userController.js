const router = require('express').Router();
const userModel = require('../models/userModel');

router.post('/post', userModel.postUser)
router.post('/login', userModel.login)

module.exports = router;