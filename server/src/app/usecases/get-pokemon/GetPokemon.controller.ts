import { Request, Response } from "express";
import { GetPokemonUseCase } from "./getPokemon.usecase";

export class GetPokemonController {
  constructor(private getPokemonUseCase: GetPokemonUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const params = req.query;
      const pokemon = await this.getPokemonUseCase.execute(params);
      return res.status(200).json(pokemon);
    } catch (error) {
      // TODO: Properly handle error
      return res.status(500).json({
        message: "Unexpected error.",
      });
    }
  }
}
