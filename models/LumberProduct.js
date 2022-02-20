const { model, Schema } = require('mongoose');

const LumberProduct = new Schema({

    value: {type: String, required: true, unique: true},
    description: {type: String, default: 'Описание изделия временно недоступно'},
    image: {type: String, default: ''},

    width: {type: Number, required: true}, // ширина в миллиметрах
    thickness: {type: Number, required: true}, // толщина в миллиметрах

    start_wholesale_price: {type: Number, default: 300},

    min_wholesale_price: {type: Number, default: 100000000},
    min_retail_price: {type: Number, default: 100000000},
    available_woods: [
        {type: String}
    ]
});


module.exports = model('LumberProduct', LumberProduct);