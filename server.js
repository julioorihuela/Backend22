const fs = require('fs');
const express = require('express');
const app = express();
const PORT = 8080

class Contenedor {
    constructor (archivo) {
        this.archivo = archivo;
    }

    async getAll() {
        const fs = require('fs');  
        try {     
            const contenido = await fs.promises.readFile(this.archivo, 'utf-8')
            const productos = JSON.parse(contenido);
            return productos;            
        }  catch (err) { 
            console.log('No existen Productos.');
            //return null;     
       }      
    }

    async getById(Number) {
        try {           
            const productos = await this.getAll();
            if (productos != null) {
                const prod = productos.find( prod => prod.id==Number);
                return prod;  
            } else {
                console.log('No existen Productos.');
                return null;
            }                          
        }  catch (err) { 
            console.log('No existen Productos.');
            return null;
        }       
    }
    
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

  
}


