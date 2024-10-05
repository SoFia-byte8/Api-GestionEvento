const mongoose = require("mongoose"); // importando el componente mogoose

// Definir el esquema de Eventos
const eventoSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    descripcion: {
        type: String,
        required: true,
    },
    fecha: {
        type: Date,
        required: true,
    },
    horaInicio: {
        type: String,
        required: true,
    },
    duracion: {
        type: Number,
        required: true,
    },
    organizador: {
        type: String,
        required: true,
    },
    ubicacion: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model("Evento", eventoSchema);