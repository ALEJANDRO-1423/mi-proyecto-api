// Importar las librerías necesarias
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Crear una instancia de Express
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Simulando una base de datos en memoria
let productos = [];

// Endpoint para obtener la lista de productos
app.get('/productos', (req, res) => {
    res.status(200).json(productos);
});

// Endpoint para agregar un producto
app.post('/productos', (req, res) => {
    const { nombre, precio } = req.body;
    productos.push({ id: productos.length + 1, nombre, precio });
    res.status(201).send('Producto agregado exitosamente');
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
