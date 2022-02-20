const { model, Schema } = require('mongoose');

const LumberLength = new Schema({

    value: {type: Number, required: true, unique: true}
});


module.exports = model('LumberLength', LumberLength);