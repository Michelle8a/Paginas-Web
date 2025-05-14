//Manejo de Arrays

function obtenerPromedio(array){
    let n = array.length;
    let suma = 0;
    
    for(let i = 0; i < n; i++){
        suma += array[i];
    }

    let promedio = suma / n;
    return promedio;
}

let numeros = [10, 9, 6, 10, 8];
console.log(obtenerPromedio(numeros));