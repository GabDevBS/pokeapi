const botaoBuscar = document.getElementById('botao-buscar');
const campoEntrada = document.getElementById('entrada')

botaoBuscar.addEventListener("click", async() => {
    const buscar = campoEntrada.value.toLowerCase().trim();
    if(!buscar) return;
})