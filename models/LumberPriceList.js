const { model, Schema, Types } = require('mongoose');

const LumberPriceList = new Schema({

    productId: {type: Types.ObjectId, ref: 'LumberProduct', required: true},
    woodId: {type: Types.ObjectId, ref: 'LumberWood', required: true},
    varietyId: {type: Types.ObjectId, ref: 'LumberVariety', required: true},

    product: {type: String, required: true},
    wood: {type: String, required: true},
    variety: {type: String, required: true},

    pricelist: [
        {
            from_length: {type: Number, required: true},
            to_length: {type: Number, required: true},

            retail_price: {type: Number, required: true},
            wholesale_price: {type: Number, required: true}
        }
    ]
    
});


module.exports = model('LumberPriceList', LumberPriceList);