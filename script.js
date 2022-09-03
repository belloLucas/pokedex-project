var quantity = document.getElementById("quantity");
quantity.addEventListener("keyup", () => {
    catchPokemons(quantity.value);
});

function catchPokemons(quantity) {
  fetch("https://pokeapi.co/api/v2/pokemon?limit=" + quantity)
    .then((response) => response.json())
    .then((allpokemon) => {
      var pokemons = [];

      allpokemon.results.map((val) => {
        fetch(val.url)
          .then((response) => response.json())
          .then((pokemonSingle) => {
            pokemons.push({
              name: val.name,
              image: pokemonSingle.sprites.front_default
            });
            if (pokemons.length == quantity) {
              var pokemonBoxes = document.querySelector(".poke-boxes");
              pokemonBoxes.innerHTML = "";
              pokemons.map((val) => {
                pokemonBoxes.innerHTML +=
                  `
                    
                    <div class="poke-box">
                       <img src="`+val.image +`">
                        <h3>`+val.name +`</h3>
                    </div>                    

                    `;
              });
            }
          }),
          pokemons.map((val) => {
            console.log(val.name);
          });
      });
    });
}


