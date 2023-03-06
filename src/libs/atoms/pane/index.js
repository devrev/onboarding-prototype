import useMobileScreen from "@/hooks/useMobileScreen";
import React from "react";

const Pane = ({ position = "left", children, isOpen }) => {
  const isMobile = useMobileScreen();

  return (
    isOpen && (
      <div className="fixed top-0 right-0 h-full z-50 shadow-modal transition-[max-width] duration-300 ease-in-out bg-base max-w-[30rem] sm-max:w-screen w-[30rem] overflow-y-scroll">
        {children}
      </div>
    )
  );
};

export default Pane;
