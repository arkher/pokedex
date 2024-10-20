import { PokemonRepository } from "../../repositories";
import { GetPokemonController } from "./getPokemon.controller";
import { GetPokemonUseCase } from "./getPokemon.usecase";

const pokemonRepository = new PokemonRepository();

const getPokemonUseCase = new GetPokemonUseCase(pokemonRepository);
const getPokemonController = new GetPokemonController(getPokemonUseCase);

export { getPokemonUseCase, getPokemonController };
