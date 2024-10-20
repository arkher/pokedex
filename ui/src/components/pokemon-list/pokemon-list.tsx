import { Badge, Stack } from "@chakra-ui/react";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { PokemonData } from "../../common/types/pokemon";

export const PokemonList: FC<{ pokemonList: PokemonData[] }> = ({
  pokemonList,
}) => {
  const navigate = useNavigate();
  return pokemonList.length > 0 ? (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {pokemonList.map((pokemon) => (
        <div
          onClick={() => navigate(`/${pokemon.name}`)}
          key={pokemon.name}
          className="flex justify-between bg-white p-4 rounded-lg shadow-md cursor-pointer"
        >
          <div>
            <h2 className="text-2xl font-bold">{pokemon.name}</h2>
            <p className="text-gray-400">Types: {pokemon.types.join(", ")}</p>
            <p className="text-gray-400">Weight: {pokemon.weight}</p>
            <p className="text-gray-400">Height: {pokemon.height}</p>
            <p className="text-gray-400">Order: {pokemon.order}</p>
          </div>
          <Stack className="p-2">
            {pokemon.encountered && (
              <Badge variant="solid" colorScheme="blue">
                Encountered
              </Badge>
            )}
            {pokemon.caught && (
              <Badge variant="solid" colorScheme="green">
                Caught
              </Badge>
            )}
          </Stack>
        </div>
      ))}
    </div>
  ) : (
    <div className="w-full h-full flex justify-center items-center">
      <p className="text-2xl text-gray-400">No Pokémon found</p>
    </div>
  );
};
