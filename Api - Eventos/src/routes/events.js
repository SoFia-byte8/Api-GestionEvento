const express = require("express");
const router = express.Router(); // Manejador de rutas de express
const eventoSchema = require("../models/events");

// Agregar un evento
router.post("/events", (req, res) => {
    const evento = new eventoSchema(req.body);
    evento
        .save() 
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json({ message: error })); 
});

// Obtener todos los eventos
router.get("/events", (req, res) => {
    eventoSchema
        .find()
        .then((data) => res.json(data)) 
        .catch((error) => res.status(500).json({ message: error }));
});

// Actualizar un evento por su ID
router.put("/events/:id", (req, res) => {
    const { id } = req.params; 
    const updatedData = req.body;

    eventoSchema
        .findByIdAndUpdate(id, updatedData, { new: true })
        .then((data) => {
            if (!data) {
                return res.status(404).json({ message: "Evento no encontrado" });
            }
            res.json(data);
        })
        .catch((error) => res.status(500).json({ message: error })); 
});


router.delete("/events/:id", (req, res) => {
    const { id } = req.params; 
    eventoSchema
        .findByIdAndDelete(id)
        .then((data) => {
            if (!data) {
                return res.status(404).json({ message: "Evento no encontrado" });
            }
            res.json({ message: "Evento eliminado con éxito" });
        })
        .catch((error) => res.status(500).json({ message: error }));
});


module.exports = router;
