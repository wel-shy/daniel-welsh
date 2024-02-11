import React from "react";
import { VscTextSize } from "react-icons/vsc";
import { BiSun, BiMoon } from "react-icons/bi";
import styled, { DefaultTheme } from "styled-components";
import { ThemeLabel } from "../GlobalStyle/theme";

const Container = styled.div`
  font-size: 2em;
  display: flex;
  align-items: center;
  vertical-align: middle;
  justify-content: end;

  .font-size {
    display: flex;
    align-items: bottom;
  }

  svg {
    cursor: pointer;
  }
`;

interface OptionsProps {
  setTheme: (theme: ThemeLabel) => void;
  theme: DefaultTheme;
  increaseFontSize: () => void;
  decreaseFontSize: () => void;
}

const Options = ({
  setTheme,
  theme,
  increaseFontSize,
  decreaseFontSize,
}: OptionsProps) => {
  return (
    <Container>
      <div className="font-size">
        <VscTextSize
          style={{ fontSize: "0.75em" }}
          onClick={decreaseFontSize}
        />
        <VscTextSize
          style={{ fontSize: "1.25em" }}
          onClick={increaseFontSize}
        />
      </div>
      <div>
        {theme.label === ThemeLabel.DARK ? (
          <BiSun onClick={() => setTheme(ThemeLabel.LIGHT)} />
        ) : (
          <BiMoon onClick={() => setTheme(ThemeLabel.DARK)} />
        )}
      </div>
    </Container>
  );
};

export default Options;
