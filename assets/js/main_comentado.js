const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`


function convertPokemonToLi(pokemon){
    return `
        <li class="pokemon">
            <span class="number">#001</span>
            <span class="name">${pokemon.name}</span>
    
            <div class="detail">
                <ol class="types">
                    <li class="type">Grass</li>
                    <li class="type">Poison</li>
                </ol>

                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${pokemon.name}">
            </div>
        </li>
    `
}

const pokemonList = document.getElementById('pokemonList')

 //map substitui o for, deixando mais elegante

 const newList = pokemons.map((pokemon)=>{
    return convertPokemonToLi(pokemon)
})

const newHtml = newList.join('')

pokemonList.innerHTML+= newHtml

// for (let i = 0; i < pokemons.length; i++) {
//     const pokemon = pokemons[i];
//     listItems.push(convertPokemonToLi(pokemon))
//  }

 //console.log(listItems)




fetch(url)
// opção 1
//  .then(function (response) {
//      response
//          .json()
//          .then(function(responseBody){
//          console.log(responseBody    )
//      })
//  })

// opção 2
.then(function(response){
    return response.json()
})

.then((jsonBody) => jsonBody.results)


// para ficar ainda melhor:
// .then((response) => {
// return response.json()
//})
// foi usado arow function que é representada pela =>
// usada em call back, quando nao quer contexto isolado
//debuger define o breaking point para debbugar no navegador
.then((pokemons) => {
    for (let i = 0; i < pokemons.length; i++) {
        const pokemon = pokemons[i];
        pokemonList.innerHTML += convertPokemonToLi(pokemon)
     }
       
})

//para melhorar ainda mais, quando temos apenas uma linha de 
//função a função não precisa de um corpo. Ficando assim:
.catch((error) => console.error(error))
.finally(()=> console.log('Requisição concluída!'))


