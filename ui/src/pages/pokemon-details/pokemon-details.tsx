import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PokemonData } from "../../common/types/pokemon";
import { Header } from "../../components/header";
import { PokemonService } from "../../services/pokemon";

export const PokemonDetails = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState<PokemonData | undefined>();

  const fetchPokemons = useCallback(async () => {
    try {
      const pokemonList = await PokemonService.getPokemons({ name });
      setPokemon(pokemonList[0]);
    } catch (e) {
      console.log(e);
    }
  }, [name]);

  useEffect(() => {
    fetchPokemons();
  }, [fetchPokemons]);
  return (
    <div>
      <Header title="Pokémon Details" />

      {pokemon && (
        <div className="w-full p-8">
          <h1 className="text-2xl text-center">{pokemon?.name}</h1>

          <h2 className="text-xl text-center mt-5">Pokémon Details:</h2>
          <div className="flex justify-center">
            <div className="w-1/3 p-4 bg-white rounded-lg shadow-md mt-2">
              <p>
                <span className="font-bold">Types:</span>{" "}
                {pokemon?.types.join(", ")}
              </p>
              <p>
                <span className="font-bold">Weight:</span> {pokemon?.weight}
              </p>
              <p>
                <span className="font-bold">Height:</span> {pokemon?.height}
              </p>
              <p>
                <span className="font-bold">Order:</span> {pokemon?.order}
              </p>
              <p>
                <span className="font-bold">Can be found at:</span>{" "}
                {pokemon?.locations.join(", ")}
              </p>
              <p>
                <span className="font-bold">Encountered:</span>{" "}
                {pokemon?.encountered ? "Yes" : "No"}
              </p>
              <p>
                <span className="font-bold">Caught:</span>{" "}
                {pokemon?.caught ? "Yes" : "No"}
              </p>
              {pokemon?.nextEvolution && (
                <p>
                  <span className="font-bold">Evolves to:</span>{" "}
                  {pokemon?.nextEvolution}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
