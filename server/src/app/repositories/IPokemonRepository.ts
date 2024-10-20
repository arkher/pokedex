import { Pokemon } from "../entities/Pokemon"
import { GetPokemonDTO } from "../usecases/get-pokemon/GetPokemonDTO"

export interface IPokemonsRepository {
  findByParams(params: GetPokemonDTO): Promise<Pokemon[]>
}