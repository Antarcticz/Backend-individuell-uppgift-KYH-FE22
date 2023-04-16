const router = require('express').Router()
const candyModel = require('../models/candyModel');
const candySchema = require('../schemas/candySchema');

router.post('/', candyModel.postCandy);

router.get('/', candyModel.getCandys);
router.get('/:id', candyModel.getCandysById);

router.put('/:id', candyModel.updateCandys)

router.delete('/:id', candyModel.deleteCandy)

module.exports = router;