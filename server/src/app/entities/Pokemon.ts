import { uuid } from "uuidv4";

// to simplify the example, I am using simple data types
export class Pokemon {
  public readonly id: string;

  public name: string;
  public encountered: boolean;
  public caught: boolean;
  public types: string[];
  public weight: number;
  public height: number;
  public order: number;
  public nextEvolution: string | null;
  public locations: string[];

  constructor(pokemon: Pokemon) {
    this.id = pokemon.id || uuid();
    this.name = pokemon.name;
    this.encountered = false;
    this.caught = false;
    this.types = pokemon.types;
    this.weight = pokemon.weight;
    this.height = pokemon.height;
    this.order = pokemon.order;
    this.nextEvolution = pokemon.nextEvolution || null;
    this.locations = pokemon.locations;
  }
}
