

const opts = {
    description:{
        demand: true,
        alias: 'd'
    },
    newDescription:{
        alias: 'n'
    }
}

const argv = require('yargs')
.command('crear', 'Crear alimentos para el menú', opts)
.command('actualizar', 'Actuliza los alimentos del menu', opts)
.command('borrar', 'Borra alimentos del menu', opts ).help().argv;

module.exports = {
    argv
}