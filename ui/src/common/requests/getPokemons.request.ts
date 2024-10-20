export interface GetPokemonsRequest {
  name?: string;
  encountered?: boolean;
  caught?: boolean;
  type?: string;
  weight?: number;
  height?: number;
  order?: number;
  nextEvolution?: string;
  location?: string;
}