//Manipulacion de maps

function buscarNumero(nombre){
    if(agenda.has(nombre)){
        console.log(agenda.get(nombre));
    }
    else{
        console.log("No existe ese nombre en la agenda");
    }
}


let agenda = new Map();

agenda.set("Anthony", 12345678);
agenda.set("Benedict", 24681012)
agenda.set("Colin", 13579113)

buscarNumero("Colin");
buscarNumero("Eloise");

