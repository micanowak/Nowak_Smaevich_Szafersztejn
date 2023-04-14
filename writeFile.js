const fs = require('fs')

fs.writeFile('./prueba1.txt', 'Lineal\nLinea 2\n', error=> {

    if (error) {
        console.log("Error", error)
    } 
    else {
        console.log("archivo creado")    
    }
})

console.log("Ulitma? Linea")