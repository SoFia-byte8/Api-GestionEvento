const express = require("express");
const router = express.Router(); // Manejador de rutas de express
const eventoSchema = require("../models/events");

// Nuevo evento - POST
router.post("/events", (req, res) => {
    const evento = new eventoSchema(req.body);
    evento
        .save() // Guardar el evento en la base de datos
        .then((data) => res.json(data)) // Respuesta en caso de éxito, devuelve el evento creado
        .catch((error) => res.status(500).json({ message: error })); // Respuesta en caso de error
});

module.exports = router;

//Consultar Datos - GET
router.get("/events", (req, res) => {
    eventoSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});