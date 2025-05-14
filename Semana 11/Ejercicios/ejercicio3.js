//Uso de sets

function eliminarDuplicados(array){
    return [...new Set(array)];
    //... esto convierte el Set de vuelta a un array normal
}

let duplicados = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 7];
console.log(eliminarDuplicados(duplicados));
