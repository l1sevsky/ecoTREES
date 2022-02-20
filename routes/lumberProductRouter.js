const { Router } = require('express');
const router = new Router();

const lumberProductController = require('../controllers/lumberProductController');


//  path: /api/lumber/product - POST
router.post('/', lumberProductController.createOne);

//  path: /api/lumber/product - GET
router.get('/', lumberProductController.readAll);

//  path: /api/lumber/product/:id - GET
router.get('/:id', lumberProductController.readOne);

//  path: /api/lumber/product/:id - PUT
router.put('/:id', lumberProductController.updateOne);

//  path: /api/lumber/product/:id - DELETE
router.delete('/:id', lumberProductController.deleteOne);


module.exports = router;