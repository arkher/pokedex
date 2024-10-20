import { GetPokemonsRequest } from "../common/requests";
import { PokemonData } from "../common/types/pokemon";

export const PokemonService = {
  async getPokemons(params?: GetPokemonsRequest): Promise<PokemonData[]> {
    if (params) {
      const queryParamsString = Object.entries(params)
      .map(([key, value]) => {
        if (value === undefined) return "";
        return `${key}=${value}`;
      })
      .join("&");
      const response = await fetch(
        `http://localhost:8080/pokemons?${queryParamsString}`
      );
      return await response.json();
    }
    const response = await fetch("http://localhost:8080/pokemons");
    return await response.json();
  },
};
