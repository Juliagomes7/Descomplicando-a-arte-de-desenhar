if(localStorage.getItem("visitas") === null) {
    localStorage.setItem("visitas", 0);
}
var contador = parseInt(localStorage.getItem("visitas"));
document.getElementById("contador").textContent = contador;

contador++;
localStorage.setItem("visitas", contador);
