//Gestion de Objetos

let producto = {
    nombre: "Audifonos",
    precio: 20,
    cantidad: 5
};

function calcularTotal(objeto){
    let total = objeto.precio * objeto.cantidad;
    return total;
}

console.log(calcularTotal(producto));