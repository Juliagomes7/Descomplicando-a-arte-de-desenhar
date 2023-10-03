// Obtém o botão de "Voltar ao Topo"
const btnTopo = document.getElementById("btnTopo");

// Adiciona um ouvinte de evento para o clique no botão
btnTopo.addEventListener("click", () => {
    // Role suavemente até o topo da página
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Mostra ou oculta o botão de "Voltar ao Topo" com base na posição da página
window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 100) {
        btnTopo.style.display = "block";
    } else {
        btnTopo.style.display = "none";
    }
});