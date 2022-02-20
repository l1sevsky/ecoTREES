const { Router } = require('express');
const router = new Router();

const lumberWoodController = require('../controllers/lumberWoodController');

//  path: /api/lumber/wood - POST
router.post('/', lumberWoodController.createOne);

//  path: /api/lumber/wood - GET
router.get('/', lumberWoodController.readAll);

//  path: /api/lumber/wood/:id - GET
router.get('/:id', lumberWoodController.readOne);

//  path: /api/lumber/wood/:id - PUT
router.put('/:id', lumberWoodController.updateOne);

//  path: /api/lumber/wood/:id - DELETE
router.delete('/:id', lumberWoodController.deleteOne);


module.exports = router;