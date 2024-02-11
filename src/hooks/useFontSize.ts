import { useState } from "react";
import { defaultFontSize } from "../components/GlobalStyle/theme";

const STEP = 2;

const useFontSize = () => {
  const [fontSize, setFontSize] = useState(defaultFontSize);

  const increaseFontSize = () =>
    setFontSize((prev) => (prev === defaultFontSize * 2 ? prev : prev + STEP));

  const decreaseFontSize = () =>
    setFontSize((prev) => (prev === defaultFontSize / 2 ? prev : prev - STEP));

  return { fontSize, increaseFontSize, decreaseFontSize };
};

export default useFontSize;
