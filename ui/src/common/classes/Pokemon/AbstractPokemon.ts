import { PokemonDef } from '../../types';

export abstract class AbstractPokemon {
  name: string
  types: string[]
  weight: number
  height: number
  order: number
  nextEvolution: string | null
  locations: string[]

  constructor(pokemon: PokemonDef.Pokemon) {
    this.name = pokemon.name;
    this.types = pokemon.types;
    this.weight = pokemon.weight;
    this.height = pokemon.height;
    this.order = pokemon.order;
    this.nextEvolution = pokemon.nextEvolution || null;
    this.locations = pokemon.locations;
  }

  abstract getName(): string;
  abstract getTypes(): string[];
  abstract getTypes(): unknown[];
  abstract getWeight(): number;
  abstract getHeight(): number;
  abstract getOrder(): number;
  abstract getNextEvolutionName(): string | null;
  abstract getLocations(): string[];
}