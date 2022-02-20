const { Router } = require('express');
const router = new Router();

const lumberPriceListController = require('../controllers/lumberPriceListController');


//  path: /api/lumber/pricelist - POST
router.post('/', lumberPriceListController.createOne);

//  path: /api/lumber/pricelist - GET
router.get('/', lumberPriceListController.readMany);

//  path: /api/lumber/pricelist/:id - GET
router.get('/:id', lumberPriceListController.readOne);

//  path: /api/lumber/pricelist/:id - PUT
router.put('/:id', lumberPriceListController.updateOne);

//  path: /api/lumber/pricelist/:id - DELETE
router.delete('/:id', lumberPriceListController.deleteOne);


module.exports = router;