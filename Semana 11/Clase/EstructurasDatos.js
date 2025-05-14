//Ya instale code runner extension y node js


//-----------ARRAYS--------------

/*
    El indice empieza desde 0
    .length  saca el numero de elementos
    .sort() los ordena alfabeticamente
    .reverse() les da vuelta
    .push() agrega un elemento al final
    .unshift() agrega un elemento al inicio
    .pop() quita el ultimo elemento
    .shift() quita el primer elemento
    .concat() une dos arrays
    includes(element, start) revisa si existe en el array

    Math.min.apply(null, arr); encuentra el menor
*/
let numeros = [1, 2, 3, 4, 5];
let nombres = ["Juan", "Maria", "Pedro"];

console.log(numeros[0]);  //Output: 1
console.log(nombres.length); //Output: 3
console.log(nombres[1]); //Output: Maria

//----
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;

let text = "<ul>";
for (let i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";

//----
const months = ["Jan", "Feb", "Mar", "Apr"];
const sorted = months.toSorted(); //toSorted() crea un nuevo array
const reversed = months.toReversed(); //toReversed() igual crea uno nuevo


//----
function eliminarDuplicados(array){
    let sinDuplicado = [];
    
    for(let i = 0; i < array.length; i++){
        
        //includes revisa si ya esta en el array
        //si no esta, lo mete con push(al final)
        if(!sinDuplicado.includes(array[i])){
            sinDuplicado.push(array[i]);
        }
    }

    return sinDuplicado;
}



//------------MAPS--------------

/*
    .set() mete valores al mapa
    .get() obtiene un valor
    .clear() borra todos los elementos
    .delete() borra un elemento
    .has() checa si existe
    .size para el tamaño
*/

let mapa = new Map();
mapa.set('a', 1);
mapa.set('b', 2);

console.log(mapa.get('a')); //Output: 1
console.log(mapa.size); //Output: 2



//----------OBJECTS--------------
let persona = {
    nombre: "Juan",
    edad: 30,
    profesion: "Ingeniero"
};

console.log(persona.nombre); //Output: Juan
console.log(persona.edad); //Output: 30



//------------SETS-----------------
let conjunto = new Set([1, 2, 3, 4, 5]);

conjunto.add(6);
console.log(conjunto.has(4)); //Output: true
console.log(conjunto.size); //Output: 6

//----
function eliminarDuplicados(array){
    return [...new Set(array)];
    //... esto convierte el Set de vuelta a un array normal
}