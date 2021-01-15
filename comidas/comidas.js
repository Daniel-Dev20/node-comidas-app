

const fs = require('fs');


let comidas = [];

//Funcion para guardar las comidas en formato json
const guardarComidaDB = () => {
    let data = JSON.stringify(comidas);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo guardar la comida');
    });
}

//Cargar comidas
let cargarDB = () => {
    try{
        comidas = require('../db/data.json');
    }catch(error){
        comidas = [];
    }
}

//Funcion para crear comidas
const crearComida = (description) => {
    cargarDB();

    let crearComidas = {
        description
    };

    comidas.push(crearComidas);
    guardarComidaDB();
    return crearComidas;
}

//Funcion para listar los alimentos 
const listarAlimentos = () => {
    cargarDB();
    return comidas;
}

//Funcion para actualizar alimentos

const actualizar = (description, newDescription) => {
    cargarDB();

    let index = comidas.findIndex(comida => comida.description === description);

    if (index >=0){
        comidas[index].newDescription = newDescription;
        guardarComidaDB();
        return description;
    }else{
        return false;
    }
 
}

//Funcion para borrar alimentos

const borrar = (description) => {
    cargarDB();

    let nuevasComidas = comidas.filter(comida => comida.description !== description);

    if(comidas.length === nuevasComidas.length){
        return false;
    }else {
        comidas = nuevasComidas;
        guardarComidaDB();
        return true;
    }
}


module.exports = {
    crearComida,
    listarAlimentos, 
    actualizar,
    borrar
}



