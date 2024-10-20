import { Link } from "@chakra-ui/react";
import React from "react";

export const Navigation = () => {
  return (
    <nav className="bg-white p-2">
      <ul className="flex gap-4">
        <li>
          <Link href="/" className="!text-blue-400 hover:!text-blue-700">
            All Pokémon
          </Link>
        </li>
      </ul>
    </nav>
  );
};
