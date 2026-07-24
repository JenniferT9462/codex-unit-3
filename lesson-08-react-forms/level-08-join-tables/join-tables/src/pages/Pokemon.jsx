import { usePokemon } from "../hooks/usePokemon.js";
export default function Pokemon() {
  const [pokemon, handleSubmit] = usePokemon();

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label htmlFor="pokemonId">
          Enter Pokemon name or ID:
          <input type="text" name="pokemonId" />
        </label>
        <button type="submit">Submit</button>
      </form>
      <output>{pokemon.map(renderDetails)}</output>
    </main>
  );

  function renderDetails(item, index) {
    const key = `pokemon-${index}`;
    // A reliable fallback image URL (using a placeholder service)
    const fallbackCover =
      "https://placehold.co/150x220?text=No+Cover+Available";

    const details = (
      <details key={key}>
        <summary>{item.name}</summary>
        <figure>
          <img
            src={item.sprites.front_default}
            alt={item.name}
            onError={(e) => {
              e.target.onerror = null; // Prevents infinite loops if fallback fails
              e.target.src = fallbackCover;
            }}
          />
          <figcaption>{item.abilities[0].ability.name}</figcaption>
          <figcaption>{item.abilities[1].ability.name}</figcaption>
        </figure>
      </details>
    );

    return details;
  }
}
