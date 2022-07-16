const express = require('express')
const app = express();
const PORT = 8080;
const Contenedor = require('./contenedor.js') 

let dato = []
let productos = new Contenedor('productos.txt');

app.get('/', (req, res) => {
    res.send(`<h1 style="color:blue;">Bienvenidos al servidor express</h1> `)
});

app.get('/productos', (req, res) => {
   
    productos.getAll().then(allFiles => {
        res.send(`${JSON.stringify(allFiles)}`)
    }).catch(err => {
        res.send(err);
    })
});

app.get('/productoRandom', (req, res) => {
  
    productos.random().then(getRandomFiles => {
        res.send(`${JSON.stringify(getRandomFiles)}`)
    }).catch(err => {
        res.send(err);
    })
});

const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
});
server.on("error", (error) => console.log(`Error en el servidor ${error}`))


