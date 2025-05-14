function saludar() {
    let nombre = "Estudiante";
    alert("Hola, " + nombre + " 👋");
  }
  
  function VerificarEdad() {
    let edad = prompt("¿Cuál es tu edad?");
    if (edad >= 18) {
      alert("Eres mayor de edad.");
    } else {
      alert("Eres menor de edad.");
    }
  }
  
  function MostrarNumeros()   {
    let facto =1;
    for (let i = 1; i <= 5; i++) {
      console.log("Número: " + i);
      facto= facto * i;
    }
    console.log("El factorial es: "+facto);
    alert("Revisa la consola (F12) para ver los números.");
  }
  
  function CambiarTexto() {
    document.getElementById("texto").innerText = "Texto modificado con JavaScript";
  }
  
  function CambiarColor() {
    document.getElementById("texto").style.color = "blue";
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("eventoBoton").addEventListener("click", function () {
      document.getElementById("eventoResultado").innerText = "¡Clic detectado!";
    });
  });
  