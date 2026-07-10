import React from "react";
import { BiSun, BiMoon } from "react-icons/bi";
import { Group, UnstyledButton, type MantineColorScheme } from "@mantine/core";

interface OptionsProps {
  colorScheme: "light" | "dark";
  setColorScheme: (value: MantineColorScheme) => void;
}

const Options = ({ colorScheme, setColorScheme }: OptionsProps) => {
  return (
    <Group
      justify="flex-end"
      align="center"
      gap="0.25em"
      mb="0.5em"
      style={{ fontSize: "2em" }}
    >
      {colorScheme === "dark" ? (
        <UnstyledButton
          onClick={() => setColorScheme("light")}
          aria-label="Switch to light theme"
          style={{ display: "flex" }}
        >
          <BiSun />
        </UnstyledButton>
      ) : (
        <UnstyledButton
          onClick={() => setColorScheme("dark")}
          aria-label="Switch to dark theme"
          style={{ display: "flex" }}
        >
          <BiMoon />
        </UnstyledButton>
      )}
    </Group>
  );
};

export default Options;
