import { PokemonDef } from "../../types";
import { AbstractPokemon } from "./AbstractPokemon";

export class Pokemon extends AbstractPokemon {
  encountered: boolean;
  caught: boolean;
  constructor(pokemon: PokemonDef.PokemonData) {
    const { encountered, caught, ...rest } = pokemon;
    super(rest);
    this.encountered = encountered;
    this.caught = caught;
  }
  getName(): string {
    return this.name;
  }
  getTypes(): string[] {
    return this.types;
  }
  getWeight(): number {
    return this.weight;
  }
  getHeight(): number {
    return this.height;
  }
  getOrder(): number {
    return this.order;
  }
  getNextEvolutionName(): string | null {
    return this.nextEvolution;
  }
  getLocations(): string[] {
    return this.locations;
  }
}
