import React, { useEffect } from "react";
import { useComputedColorScheme, useMantineColorScheme } from "@mantine/core";
import useFontSize from "../../hooks/useFontSize";
import Options from "../Options/Options";

interface PageWrapperProps {
  children: React.ReactNode;
}

const PageWrapper = ({ children }: PageWrapperProps) => {
  const { fontSize, increaseFontSize, decreaseFontSize } = useFontSize();
  const { setColorScheme } = useMantineColorScheme();
  const colorScheme = useComputedColorScheme("dark");

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}px`;
  }, [fontSize]);

  return (
    <main>
      <Options
        colorScheme={colorScheme}
        setColorScheme={setColorScheme}
        increaseFontSize={increaseFontSize}
        decreaseFontSize={decreaseFontSize}
      />
      {children}
    </main>
  );
};

export default PageWrapper;
