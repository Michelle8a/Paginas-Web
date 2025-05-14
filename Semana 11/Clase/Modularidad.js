//--------ENCAPSULAMIENTO--------
function areaRectangulo(base, altura){
    return base * altura;
}

console.log(areaRectangulo(5, 3)); //Output: 15


//---------REUTILIZACION------------
function saludar(nombre){
    return "Hola, " + nombre + "!"
}

console.log(saludar("Juan")); //Output: Hola, Juan!


//---------MODULARIZACION------------
import { sumar } from "./modulo1.js";
import { multiplicar } from "./modulo2.js";

console.log(sumar(5, 3));
console.log(multiplicar(5, 3));

//----
import saludarUsuario from "./modulo2.js";

console.log(saludarUsuario("Juan"));


//----
import * as operaciones from "./modulo3.js"

console.log(sumar(5, 3));
console.log(multiplicar(5, 3));