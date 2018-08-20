
const { crearArchivo, listar } = require('./multiplicar/multiplicar');
const { argv } = require('./config/yargs');
const colors = require('colors');


let comando = argv._[0];

switch(comando) {

    case 'listar':
        console.log('Listar');
        listar(argv.base, argv.limite)
            .then(lista => console.log(`${lista}`) )
            .catch((error) => {
                console.log(error);
            });
        
    break;
    
    case 'crear':
        console.log('crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log("Archivo creado"+` ${archivo}`.yellow) )
            .catch((error) => {
            console.log(error);
})

    break;

    case 'Hello':
        console.log('hello');
    break;
    default:
        console.log('Comando no reconocido');
}

//let parametro = argv[2];
//let base = parametro.split('=')[1]

    