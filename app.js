

const argv = require('./config/yargs').argv;
const comidas = require('./comidas/comidas');
const colors = require('colors');

const comando = argv._[0];
//const comando2 = argv._[1];

console.log(comando);
//console.log(comando2);

switch(comando){
    case 'crear':
        let comida = comidas.crearComida(argv.description);
        console.log(comida);        
        break;
    case 'listar':
        let listado = comidas.listarAlimentos();
        for(listaAlimentos of listado){
            console.log('============'.cyan);
            console.log( listaAlimentos.description);
            console.log('============'.cyan);
            
        }
        console.log(listado);
        break;
        
        
    case 'actualizar':
        let actualizado = comidas.actualizar(argv.description, argv.newDescription);
        console.log(actualizado);
        break;
    case 'borrar':
        let borrado = comidas.borrar(argv.description);
        console.log(borrado);
        break;
    default:
        console.log('Comando no reconocido');
}
