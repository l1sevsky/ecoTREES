const { Router } = require('express');
const router = new Router();

const lumberProductRouter = require('./lumberProductRouter');
const lumberWoodRouter = require('./lumberWoodRouter');
const lumberVarietyRouter = require('./lumberVarietyRouter');
const lumberLengthRouter = require('./lumberLengthRouter');
const lumberPriceListRouter = require('./lumberPriceListRouter');

router.use('/lumber/product', lumberProductRouter);
router.use('/lumber/wood', lumberWoodRouter);
router.use('/lumber/variety', lumberVarietyRouter);
router.use('/lumber/length', lumberLengthRouter);
router.use('/lumber/pricelist', lumberPriceListRouter);


module.exports = router;