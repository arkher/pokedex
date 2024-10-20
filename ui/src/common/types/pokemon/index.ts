export interface Pokemon {
  name: string;
  types: PokemonType[];
  weight: number;
  height: number;
  order: number;
  nextEvolution: string | null;
  locations: string[];
}

export type PokemonData = Pokemon & {
  encountered: boolean;
  caught: boolean;
};

export type PokemonType =
  | "normal"
  | "fire"
  | "water"
  | "electric"
  | "grass"
  | "ice"
  | "fighting"
  | "poison"
  | "ground"
  | "flying"
  | "psychic"
  | "bug"
  | "rock"
  | "ghost"
  | "dragon"
  | "dark"
  | "steel"
  | "fairy";
