
const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
const maxRecords = 151
const limit = 10;
let offset = 0;


function loadPokemonItens (offset, limit){
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) => `
                <li class="pokemon ${pokemon.type}">
                    <span class="number">#${pokemon.number}</span>
                    <span class="name">${pokemon.name}</span>
            
                    <div class="detail">
                        <ol class="types">
                            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                        </ol>
        
                        <img src="${pokemon.photo}" 
                            alt="${pokemon.name}">
                    </div>
                </li>
        `).join('')
        pokemonList.innerHTML+= newHtml
    })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset +=limit

    const qtdRecordWithNextPage = offset + limit;

    if (qtdRecordWithNextPage >= maxRecords){
        const newlimit = maxRecords - offset
        loadPokemonItens(offset, newlimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
    loadPokemonItens(offset, limit)
    }
})

// Seleciona os elementos da modal e do botão de abertura
const modal = document.getElementById("myModal");
const openModalButton = document.getElementById("openModalButton");
const closeButton = document.querySelector(".close-button");

// Função para abrir a modal
function openModal() {
    modal.style.display = "flex"; // Mostra a modal
}

// Função para fechar a modal
function closeModal() {
    modal.style.display = "none"; // Oculta a modal
}

// Evento para abrir a modal ao clicar no botão
openModalButton.addEventListener("click", openModal);

// Evento para fechar a modal ao clicar no "x"
closeButton.addEventListener("click", closeModal);

// Fecha a modal ao clicar fora da área de conteúdo
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        closeModal();
    }
});



