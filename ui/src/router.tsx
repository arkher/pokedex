import { createBrowserRouter } from "react-router-dom";
import { Home, PokemonDetails } from "./pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:name",
    element: <PokemonDetails />,
  },
]);
