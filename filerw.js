import fs from 'fs';

export function copiar(archivoEntrada, archivoSalida) {
    fs.readFile(archivoEntrada, "utf8", (err, data) => {
        if (err) throw err;           
        fs.writeFile(archivoSalida, data, (err) => {
            if (err) throw err;
            console.log(${archivoEntrada})
        })
    })
}