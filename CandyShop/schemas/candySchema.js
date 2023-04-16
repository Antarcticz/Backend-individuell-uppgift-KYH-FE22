const mongoose = require('mongoose');
const { Schema } = mongoose;

const candySchema = new Schema({
    name:         { type: String, required: true },
    description:  { type: String, required: true },
    price:        { type: Number, required: true },
    imgURL:       { type: String, required: true, unique: true }
})

const Candy = mongoose.model('Candy', candySchema);

module.exports = Candy