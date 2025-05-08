const botaoBuscar = document.getElementById('botao-buscar');
const campoEntrada = document.getElementById('entrada')

botaoBuscar.addEventListener("click", async() => {
    const buscar = campoEntrada.value.toLowerCase().trim();
    if(!buscar) return;

    try{
        const resposta = await fetch('https://pokeapi.co/api/v2/pokemon/' + buscar);
        if(!resposta.ok)throw new Error('Pokemon não encontrado, tente usar um Incenso!');

        const dados = await resposta.json();

        document.getElementById("nome").textContent = dados.name;
        document.getElementById("numero").textContent = `#${dados.id}`
        document.getElementById("imagem-pokemon").src = dados.sprites.front_default;
        const tipos = document.getElementById("tipo");
        tipos.innerHTML = '';
        dados.types.forEach(tipoInfo => {
            const tipo = tipoInfo.type.name;
            const chip = document.createElement('span');
            chip.className = 'chip-tipo';
            chip.textContent = tipo
            chip.style.backgroundColor = corDoTipo(tipo);
            tipos.appendChild(chip);

        })
    } catch(error) {
        alert("Ocorreu um Erro, Tente Novamente!"+ error.message)
    }
    function corDoTipo(tipo){
        const cores ={
            fire: '#f94144',
            water: '#577590',
            grass: '#43aa8b',
            electric: '#f9c74f',
            bug: '90be6d',
            normal: '#adb5bd',
            poison: '#9d4edd',
            ground: '#74a261',
            psychic: '#f72585',
            fighting: '#d00000',
            rock: '#6c584c',
            ghost: '#8338ec',
            dragon: '#3a0ca3',
            dark: '#2d3142',
            ice: '#a8dadc',
            fairy: '#ffafcc',
            flying: '#48cae4',
            steeal: '#8d99ae',
        };
        return cores [tipo] || '#888'
    }
})