const base_url = "https://pokeapi.co/api/v2/pokemon/";

// {ID or name}

import { useState, useEffect } from "react";

export function usePokemon() {
    const [pokemon, setPokemon] = useState([]);
    
     async function handleSubmit(event) {
       event.preventDefault();
       const form = event.target;
       const value = form.elements.pokemonId.value;
       const response = await fetch(
         `https://pokeapi.co/api/v2/pokemon/${value}`,
       );
       const results = await response.json();
       console.log(results);
       // const pokemonDetails = results.map(renderDetails);
       setPokemon([results]);
     }

     

     return [pokemon, handleSubmit]

}
