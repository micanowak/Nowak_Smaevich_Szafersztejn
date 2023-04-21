import { concatInvert, concatOnly} from './manejo-strings.js'
import { multiplicar, dividir, PI, sumar, restar} from './matematica.js'
import { Alumno} from './Alumno.js'
import {copiar} from './filerw.js'

let textoEntrada01 = "Escuela";
let textoEntrada02 = "ORT";
let textoSalida;



textoSalida = concatInvert(textoEntrada01, textoEntrada02);
console.clear();
console.log(`Textos de Entrada: "${textoEntrada01}" y "${textoEntrada02}"`);
console.log(`Texto de Salida: "${textoSalida}"`);

console.log("El valor de PI es: ", PI);
console.log("La suma de 5 + 10 es: ", sumar(5,10));
console.log("La resta de 10 - 5 es: ", restar(10,5));
console.log("El producto de 3 * 5 es: ", multiplicar(3,5));
console.log("El cociente de 10/5 es: ", dividir(10,5));

const alumno1 = new Alumno("Tommy Smaevich", "46961130");
const alumno2 = new Alumno("Micaela Nowak", "47297838");
const alumno3 = new Alumno("Facundo Szafersztejn", "46645927");

console.log(`Alumno 1: ${alumno1.username} y su dni es ${alumno1.dni}`);
console.log(`Alumno 2: ${alumno2.username} y su dni es ${alumno2.dni}`);
console.log(`Alumno 3: ${alumno3.username} y su dni es ${alumno3.dni}`);

copiar("./entrada.txt", "./salida.txt");

