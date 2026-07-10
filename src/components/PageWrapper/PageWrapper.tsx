import React from "react";
import { useComputedColorScheme, useMantineColorScheme } from "@mantine/core";
import Options from "../Options/Options";

interface PageWrapperProps {
  children: React.ReactNode;
}

const PageWrapper = ({ children }: PageWrapperProps) => {
  const { setColorScheme } = useMantineColorScheme();
  const colorScheme = useComputedColorScheme("dark");

  return (
    <main>
      <Options colorScheme={colorScheme} setColorScheme={setColorScheme} />
      {children}
    </main>
  );
};

export default PageWrapper;
