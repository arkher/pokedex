import { PokemonRepository } from "../../repositories";
import { GetPokemonController } from "./GetPokemon.controller";
import { GetPokemonUseCase } from "./GetPokemon.usecase";

const pokemonRepository = new PokemonRepository();

const getPokemonUseCase = new GetPokemonUseCase(pokemonRepository);
const getPokemonController = new GetPokemonController(getPokemonUseCase);

export { getPokemonUseCase, getPokemonController };
