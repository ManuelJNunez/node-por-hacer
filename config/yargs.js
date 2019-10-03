const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};

const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', {
        descripcion
    })
    .help()
    .command('actualizar', 'Actualiza el estado de una tarea', {
        descripcion,
        completado: {
            default: true,
            alias: 'c',
            desc: 'Marca como completado o pendiente la tarea'
        }
    })
    .help()
    .command('borrar', 'Borra una tarea', {
        descripcion
    })
    .help()
    .command('listar', 'Lista todas las tareas', {
        completado: {
            default: false,
            alias: 'c',
            desc: 'Muestra tareas completadas si se pasa un false y en caso contrario muestra las pendientes.'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
};