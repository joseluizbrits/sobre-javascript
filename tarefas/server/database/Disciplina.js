const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Disciplina = new Schema({
    nome: {
        type: String,
        required: true
    },
    fta: {
        type: Boolean,
        default: true
    },
    a1: {
        type: Boolean,
        default: false
    },
    a2: {
        type: Boolean,
        default: false
    }
})

mongoose.model('disciplina', Disciplina)