import { useEffect, useState } from "react";
import { defaultFontSize } from "../components/GlobalStyle/theme";

const useFontSize = () => {
  const step = 2;
  const [fontSize, setFontSize] = useState(defaultFontSize);

  useEffect(() => {
    console.log("fontSize", fontSize);
  }, [fontSize]);

  const increaseFontSize = () =>
    setFontSize((prev) => (prev === defaultFontSize * 2 ? prev : prev + step));

  const decreaseFontSize = () =>
    setFontSize((prev) => (prev === defaultFontSize / 2 ? prev : prev - step));

  return { fontSize, increaseFontSize, decreaseFontSize };
};

export default useFontSize;
