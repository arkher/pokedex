import { AbstractPokemon } from "./AbstractPokemon";

// @ts-ignore
export class Pokemon extends AbstractPokemon {
  getName(): string {
    return this.name;
  }
  getTypesString(): string[] {
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
}
