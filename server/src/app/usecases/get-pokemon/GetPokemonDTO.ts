import { Pokemon } from "../../entities";

// this is just a shortcut. Normally, you would have to write out the entire type
// TODO: add fields properly
export type GetPokemonDTO = Partial<Omit<Omit<Pokemon, 'locations'>, 'types'>> & { location?: string, type?: string };