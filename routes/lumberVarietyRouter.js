const { Router } = require('express');
const router = new Router();

const lumberVarietyController = require('../controllers/lumberVarietyController');

//  path: /api/lumber/variety - POST
router.post('/', lumberVarietyController.createOne);

//  path: /api/lumber/variety - GET
router.get('/', lumberVarietyController.readAll);

//  path: /api/lumber/variety/:id - GET
router.get('/:id', lumberVarietyController.readOne);

//  path: /api/lumber/variety/:id - PUT
router.put('/:id', lumberVarietyController.updateOne);

//  path: /api/lumber/variety/:id - DELETE
router.delete('/:id', lumberVarietyController.deleteOne);


module.exports = router;