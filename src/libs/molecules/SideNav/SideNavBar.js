import React from "react";
import ProfilePicture from "@/libs/atoms/profile";
import {
  AiOutlineSetting,
  AiOutlinePlus,
  AiOutlineSearch,
} from "react-icons/ai";
import {
  FaRegEnvelopeOpen,
  FaRegBell,
  FaRegNewspaper,
  FaHeadphonesAlt,
  FaDollarSign,
} from "react-icons/fa";
import { RiVipDiamondLine, RiCodeSSlashLine } from "react-icons/ri";
import Button from "@/libs/atoms/button";
import clsx from "clsx";
import { DollarIcon, HeadphonesIcon } from "@/libs/icons";

const SideNavItem = ({
  Icon,
  name,
  iconSize = "w-4 h-4 mr-3",
  iconColor = "text-gray-700",
  ...props
}) => {
  return (
    <div
      className={clsx(
        !Icon && "text-gray-600 ml-7",
        "flex items-center mt-1 px-2 py-1 text-h1 text-gray-700 hover:bg-menu-hovered cursor-pointer rounded-lg"
      )}
      {...props}
    >
      {Icon && <Icon className={clsx(iconSize, iconColor)} />}
      <p>{name}</p>
    </div>
  );
};

const SideNavBar = ({ isMobile = false }) => {
  const widthClasses = isMobile ? "pt-10 w-full" : "w-72";
  return (
    <div
      className={clsx(
        widthClasses,
        "px-4 py-2 h-screen border-r bg-sunk-area absolute left-0 z-40"
      )}
    >
      <div className="flex justify-between">
        <div className="flex items-center">
          <ProfilePicture name="Manan Sharma" color="bg-purple-light" />
          <AiOutlineSetting className="ml-2 text-h2 text-gray-400 cursor-pointer hover:text-gray-500" />
        </div>
        <div id="side_nav-createWork">
          <Button>
            <AiOutlinePlus className="text-h3" />
          </Button>
        </div>
      </div>
      <div className="mt-3">
        <div className="bg-white border border-gray-200 rounded-lg flex justify-between items-center py-1 px-2">
          <div className="flex items-center text-gray-500">
            <AiOutlineSearch />
            <p className="ml-2">Search</p>
          </div>
          <p className="text-tiny text-gray-500">Ctrl + K</p>
        </div>
      </div>
      <div className="my-3">
        <SideNavItem name="Updates" Icon={FaRegBell} />
        <SideNavItem name="Lobby" Icon={FaRegEnvelopeOpen} />
        <SideNavItem name="My Tasks" Icon={FaRegNewspaper} />
      </div>
      <hr />
      <div>
        <SideNavItem
          name="Support"
          Icon={HeadphonesIcon}
          iconSize="w-5 h-5 mr-2"
          iconColor="text-color-support-vistas"
        />
        <SideNavItem name="Inbox" id="side_nav__inbox" />
        <SideNavItem name="Insights" />
        <SideNavItem name="Tickets" id="side_nav__tickets" />
        <SideNavItem name="Team Activity" />
        <SideNavItem name="Active Ticket Tracker" />
        <SideNavItem name="Product Assist Tracker" />
      </div>
      <div>
        <SideNavItem
          name="Build"
          Icon={RiCodeSSlashLine}
          iconColor="text-color-build-vistas"
        />
        <SideNavItem name="Issues" />
        <SideNavItem name="Triage" />
        <SideNavItem name="Now, Next, Later" />
      </div>
      <div>
        <SideNavItem
          name="Product"
          Icon={RiVipDiamondLine}
          iconColor="text-purple-light"
        />
        <SideNavItem name="Trails" />
        <SideNavItem name="Parts" id="side_nav__parts" />
        <SideNavItem name="Now, Next, Later" />
      </div>
      <div className="mb-3">
        <SideNavItem
          name="Customers"
          Icon={DollarIcon}
          iconSize="w-5 h-5 mr-2"
          iconColor="text-color-customer-vistas"
        />
      </div>
      <hr />
    </div>
  );
};

export default SideNavBar;
