import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import useMobileScreen from "@/hooks/useMobileScreen";
import SideNavBar from "./SideNavBar";

const SideNavBarMobile = ({ onToggleNav }) => {
  return (
    <div
      onClick={onToggleNav}
      className="w-8 h-8 absolute right-0 mt-2 cursor-pointer"
    >
      <RxHamburgerMenu className="text-gray-500 text-h1" />
    </div>
  );
};

export default function SideNav() {
  const isMobile = useMobileScreen();
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  return (
    <>
      {isMobile ? (
        <>
          <SideNavBarMobile
            onToggleNav={() => {
              setIsSideNavOpen(!isSideNavOpen);
            }}
          />
          {isSideNavOpen && <SideNavBar isMobile={true} />}
        </>
      ) : (
        <SideNavBar />
      )}
    </>
  );
}
