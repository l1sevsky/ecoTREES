const { Router } = require('express');
const router = new Router();

const controller = require('../controllers/lumberLengthController');

//  path: /api/lumber/length/ - POST
router.post('/', controller.createLength);

//  path: /api/lumber/length/ - GET
router.get('/', controller.getLengths);


module.exports = router;