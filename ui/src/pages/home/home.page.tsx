import { FC, useCallback, useEffect, useState } from "react";
import { GetPokemonsRequest } from "../../common/requests";
import { PokemonDef } from "../../common/types";
import {
  Header,
  Navigation,
  PokemonList,
  PokemonSearchForm,
} from "../../components";
import { PokemonService } from "../../services/pokemon";

export const Home: FC = () => {
  const [pokemonList, setPokemonList] = useState<PokemonDef.PokemonData[]>([]);

  const fetchPokemons = useCallback(async (params?: GetPokemonsRequest) => {
    try {
      const pokemonList = await PokemonService.getPokemons(params);
      setPokemonList(pokemonList);
    } catch (e) {
      console.log(e);
    }
  }, []);

  // TODO: Improve with react-hook-form
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const weight = parseInt(formData.get("weight") as string);
    const height = parseInt(formData.get("height") as string);
    const location = formData.get("location") as string;
    const type = formData.get("type") as string;

    let params: GetPokemonsRequest = {};
    if (name) params.name = name;
    if (weight) params.weight = weight;
    if (height) params.height = height;
    if (location) params.location = location;
    if (type) params.type = type as PokemonDef.PokemonType;

    fetchPokemons(params);
  };

  useEffect(() => {
    fetchPokemons();
  }, [fetchPokemons]);

  return (
    <div className="w-full h-screen">
      <Header title="Pokémon Pokédex" />
      <Navigation />

      <PokemonSearchForm onSubmit={handleSubmit} />

      <PokemonList pokemonList={pokemonList} />
    </div>
  );
};
