const fs = require('fs');
const express = require('express');
const app = express();
const PORT = 8080

class Contenedor {
    constructor (archivo) {
        this.archivo = archivo;
    }
    async getAll() {
        let allFiles
        try {
            allFiles = JSON.parse(await fs.promises.readFile(this.archivo, 'utf-8'))
            return allFiles;
        } catch (err) {
            throw new Error('error read file')
        }
    }
    async random(){
        try{
            const getRandomFiles = JSON.parse(await fs.promises.readFile(this.archivo, 'utf-8'))
            const random = Math.floor(Math.random() * getRandomFiles.length);
            return getRandomFiles[random]
        } catch (err) {
            throw new Error('error read file')
        }
    }
}
module.exports = Contenedor
