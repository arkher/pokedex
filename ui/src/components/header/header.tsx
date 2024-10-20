import { Flex } from "@chakra-ui/react";
import React, { FC } from "react";

export const Header: FC<{ title: string }> = ({ title }) => {
  return (
    <Flex className="w-full h-16 bg-slate-400 items-center justify-center">
      <h1 className="text-3xl font-bold text-white">{title}</h1>
    </Flex>
  );
};
