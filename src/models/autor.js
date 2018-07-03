const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    nome: {
        type: String,
        required: true,
        trim: true
    },
    slug: {
        type:String,
        required: true,
        trim:true,
        index: true,
        unique: true
    },
    descricao: {
        type: String,
        required: true,
        trim:true
    },
    tags: [{
        type: String
    }]
});

module.exports = mongoose.model('Autor', schema);