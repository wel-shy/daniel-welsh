import { useState } from "react";

const useIsSectionOpen = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return {
    isOpen,
    toggle: () => setIsOpen(!isOpen),
  };
};

export default useIsSectionOpen;
