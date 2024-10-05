const parser = require("body-parser");
const express = require('express');
const app = express();
const port = 3001;
const eventRoutes = require("./routes/events");
const mongoose = require("mongoose");
require('dotenv').config();

// Middleware para parsear los datos de las peticiones
app.use(parser.urlencoded({ extended: false })); // Permite leer datos en el cuerpo de la petición (formularios)
app.use(parser.json()); // Transforma los datos a formato JSON

// Gestión de rutas usando el middleware
app.use("/api", eventRoutes);
app.use(express.json());

// Conexión a la base de datos
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Conexión exitosa a la base de datos"))
    .catch((error) => console.log("Error de conexión a la base de datos:", error));

// Conexión al puerto
app.listen(port, () => {
    console.log(`Aplicación de gestión de eventos escuchando en el puerto ${port}`)
});
