const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    titulo: {
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
    conteudo: {
        type: String,
        required: true,
        trim:true
    },
    data: {
        type: Date,
        required: true,
        trim:true
    },
    categorias: [{
        type: String
    }],
    visualizacoes: {
        type: Integer
    }
});

module.exports = mongoose.model('Postagem', schema);