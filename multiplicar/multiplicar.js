const fs = require('fs');
const colors = require('colors');


let crearArchivo = (base, limite) => {

return new Promise ((resolve, reject) => {

    if (!Number(base)){
        reject(`El valor introducido (${base}) no es un numero`);
        return;
    }

    let data = '';

    for ( let i = 1; i <= limite; i++ ){
        data += `${base} * ${i} = ${base*i}\n`;
    }

    fs.writeFile(`archivos/tabla-${base}x${limite}.txt`, data, (err) => {
    
        if (err){ 
            reject(err);
        }else{
            resolve(`tabla-${base}.txt`);
        }
        
    });

})

}

let listar = (base,limite = 10) => {

return new Promise ((resolve,reject) => {

    if (!Number(base)){
        reject(`El valor introducido (${base}) no es un numero`);
        return;
    }

    if (!Number(limite)){
        reject(`El valor introducido (${limite}) no es un numero`);
        return;
    }

    let data = '';

    console.log('============================'.blue);
    console.log(`========Tabla del ${base}========`.red);
    console.log('============================'.blue);

    for ( let i = 1; i <= limite; i++ ){
        data += `${base} * ${i} = ${base*i}\n`;
    }
    
    resolve(data);
    
})

}


module.exports = {
    crearArchivo,
    listar
}