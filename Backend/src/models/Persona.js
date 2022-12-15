const mongoose = require("mongoose")

const personaSchema = mongoose.Schema({
    usuario: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    redes:{
        type: Array,
        required: true
    },
    icono: {
        type: String,
    },
    ternas: {
        nominaciones: {
            type: Array,
            required: true
        },
        premios: {
            type: Array,
            required: true
        }
    }
    ,
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Persona", personaSchema) 