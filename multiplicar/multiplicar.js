//requireds
const fs = require('fs');
const colors = require('colors');

//const fs = require('fs'); no es propio de node, son expansiones o codigos que otras personas hicieron
//const fs = require('../fs'); los que creamos nosotros y deben de estar en algun lado del proyecto


let listarTabla = (base, limite = 10) => {


    console.log('========================'.blue);
    console.log(`    tabla del ${base}`.blue);
    console.log('========================'.blue);

    for (let i = 1; i <= limite; i++) {

        console.log(`${base} * ${i} = ${base * i}`.red);

    }

}


let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido: ${base} no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {

            data += `${base} * ${i} = ${base * i}\n`;

        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {

            if (err)
                reject(err)

            else
                resolve(`tabla-${base}.txt`.green);
        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}