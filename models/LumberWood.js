const { model, Schema } = require('mongoose');

const LumberWood = new Schema({

    value: {type: String, required: true, unique: true},
    description: {type: String, default: 'Описание древесины временно недоступно'}

});


module.exports = model('LumberWood', LumberWood);