import React from "react";

const Pill = ({ children }) => {
  return (
    <div className="flex bg-pill w-fit items-center py-1 px-2 rounded-xl ml-1">
      {children}
    </div>
  );
};

export default Pill;
