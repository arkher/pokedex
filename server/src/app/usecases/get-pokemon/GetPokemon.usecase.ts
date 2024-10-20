import { Pokemon } from "../../entities";
import { IPokemonsRepository } from "../../repositories/IPokemonRepository";
import { GetPokemonDTO } from "./GetPokemonDTO";

export class GetPokemonUseCase {
  constructor(private pokemonsRepository: IPokemonsRepository) {}

  async execute(params: GetPokemonDTO): Promise<Pokemon[]> {
    return this.pokemonsRepository.findByParams(params);
  }
}
