import { Button, Input, Select } from "@chakra-ui/react";
import React, { FC } from "react";
import { pokemonTypes } from "../../common/constants";

export const PokemonSearchForm: FC<{
  onSubmit: React.FormEventHandler<HTMLFormElement>;
}> = ({ onSubmit }) => {
  return (
    <form
      className="p-2 w-full xs:flex-col md:flex justify-center gap-2"
      onSubmit={onSubmit}
    >
      <Input placeholder="Name" name="name" className="w-full md:!w-48" />
      <Input
        placeholder="Weight"
        name="weight"
        type="number"
        className="w-full md:!w-28"
      />
      <Input
        placeholder="Height"
        name="height"
        type="number"
        className="w-full md:!w-28"
      />
      <Input
        placeholder="Location"
        name="location"
        className="w-full md:!w-48"
      />
      <div className="w-full md:!w-48">
        <Select placeholder="Type" name="type">
          {pokemonTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </Select>
      </div>

      <Button colorScheme="teal" type="submit">
        Search
      </Button>
    </form>
  );
};
