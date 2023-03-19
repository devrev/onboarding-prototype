import React from "react";
import { MdOutlineBuildCircle } from "react-icons/md";

const NNLSideMenuTab = () => {
  return (
    <div className="flex p-2 items-center hover:bg-menu-hovered rounded-md cursor-pointer">
      <div className="flex items-center">
        <MdOutlineBuildCircle className="text-h2" />
        <p className="ml-1">In Development</p>
      </div>
      <p className="text-small bg-menu-selected px-2.5 py-1 rounded-full ml-14">
        7
      </p>
    </div>
  );
};

const NNLSideMenu = () => {
  return (
    <div className="p-2">
      <NNLSideMenuTab />
      <NNLSideMenuTab />
    </div>
  );
};

export default NNLSideMenu;
