import { Pokemon } from "../../entities/Pokemon";
import { GetPokemonDTO } from "../../usecases/get-pokemon/GetPokemonDTO";
import { IPokemonsRepository } from "../IPokemonRepository";

function assertKeyIsPokemonAttribute(key: string, data: Pokemon): key is keyof Pokemon {
  return key in data;
}

export class PokemonRepository implements IPokemonsRepository {
  // mock data
  // to simplify the example, I am using a hardcoded list of pokemons and simple data types
  private pokemons: Pokemon[] = [
    {id: '172', name: 'PICHU', encountered: true, caught: true, types: ['electric'], weight: 20, height: 3, order: 34, nextEvolution: 'PIKACHU', locations: ["trophy-garden-area", "johto-route-34-area"]},
    {id: '25', name: 'PIKACHU', encountered: true, caught: true, types: ['electric'], weight: 60, height: 4, order: 25, nextEvolution: 'RAICHU', locations: ["trophy-garden-area", "pallet-town-area"]},
    {id: '26', name: 'RAICHU', encountered: false, caught: false, types: ['electric'], weight: 300, height: 8, order: 51, nextEvolution: null, locations: ["cerulean-cave-1f"]},
    {id: '1', name: 'BULBASAUR', encountered: true, caught: true, types: ['grass', 'poison'], weight: 69, height: 7, order: 1, nextEvolution: 'IVYSAUR', locations: ["cerulean-city-area", "pallet-town-area"]},
    {id: '2', name: 'IVYSAUR', encountered: false, caught: false, types: ['grass', 'poison'], weight: 130, height: 10, order: 2, nextEvolution: 'VENUSAUR', locations: []},
    {id: '3', name: 'VENUSAUR', encountered: false, caught: false, types: ['grass', 'poison'], weight: 1000, height: 20, order: 3, nextEvolution: null, locations: []},
    {id: '4', name: 'CHARMANDER', encountered: true, caught: true, types: ['fire'], weight: 85, height: 6, order: 4, nextEvolution: 'CHARMELEON', locations: ["pallet-town-area"]},
    {id: '5', name: 'CHARMELEON', encountered: false, caught: false, types: ['fire'], weight: 190, height: 11, order: 5, nextEvolution: 'CHARIZARD', locations: []},
    {id: '6', name: 'CHARIZARD', encountered: false, caught: false, types: ['fire', 'flying'], weight: 905, height: 17, order: 6, nextEvolution: null, locations: []},
    {id: '7', name: 'SQUIRTLE', encountered: true, caught: true, types: ['water'], weight: 90, height: 5, order: 7, nextEvolution: 'WARTORTLE', locations: ["vermilion-city-area", "pallet-town-area", "lumiose-city-area"]},
    {id: '8', name: 'WARTORTLE', encountered: false, caught: false, types: ['water'], weight: 225, height: 10, order: 8, nextEvolution: 'BLASTOISE', locations: []},
    {id: '9', name: 'BLASTOISE', encountered: true, caught: false, types: ['water'], weight: 855, height: 16, order: 9, nextEvolution: null, locations: []},
  ];

  async findByParams(params: GetPokemonDTO): Promise<Pokemon[]> {
    // this simulates a database query
    const pokemons = this.pokemons.filter(pokemon => {
      return Object.entries(params).every(([key, value]) => {
        if(assertKeyIsPokemonAttribute(key, pokemon)) {
          if(typeof value === 'string') {
            return pokemon[key]?.toString().toUpperCase() === value.toUpperCase();
          }
          return pokemon[key] === value
        } else {
          if(key === 'type') {
            return pokemon.types.find(type => type === value);
          }
          if(key === 'location') {
            return pokemon.locations.find(location => location === value)
          }
        }
      });
    });
    return pokemons;
  }
}