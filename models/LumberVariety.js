const { model, Schema } = require('mongoose');

const LumberVariety = new Schema({

    value: {type: String, required: true, unique: true},
    description: {type: String, default: 'Описание сорта временно недоступно'}

});


module.exports = model('LumberVariety', LumberVariety);