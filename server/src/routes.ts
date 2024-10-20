import { Router } from "express";
import { getPokemonController } from "./app/usecases";

const router = Router();

router.get("/pokemons", (req, res) => {
  return getPokemonController.handle(req, res);
});

export { router };