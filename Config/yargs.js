const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,

    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        demandOption: true,
        default: 10,
        describe: 'Este es el numero hasta donde quieres la tabla'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: true,
        default: false,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .check((argv, options)=>{
        if( isNaN( argv.b) ){
            throw 'La base tiene que ser un numero '
        }
        return true;
    })
    .argv;


module.exports = argv;

//node app -b 20 -l