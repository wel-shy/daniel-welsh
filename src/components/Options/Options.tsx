import React from "react";
import { VscTextSize } from "react-icons/vsc";
import { BiSun, BiMoon } from "react-icons/bi";
import { Group, UnstyledButton, type MantineColorScheme } from "@mantine/core";

interface OptionsProps {
  colorScheme: "light" | "dark";
  setColorScheme: (value: MantineColorScheme) => void;
  increaseFontSize: () => void;
  decreaseFontSize: () => void;
}

const Options = ({
  colorScheme,
  setColorScheme,
  increaseFontSize,
  decreaseFontSize,
}: OptionsProps) => {
  return (
    <Group
      justify="flex-end"
      align="flex-end"
      gap="0.25em"
      mb="0.5em"
      style={{ fontSize: "2em" }}
    >
      <Group align="flex-end" gap="0.25em">
        <UnstyledButton
          onClick={decreaseFontSize}
          aria-label="Decrease font size"
          style={{ display: "flex", fontSize: "0.75em" }}
        >
          <VscTextSize />
        </UnstyledButton>
        <UnstyledButton
          onClick={increaseFontSize}
          aria-label="Increase font size"
          style={{ display: "flex", fontSize: "1.25em" }}
        >
          <VscTextSize />
        </UnstyledButton>
      </Group>
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
