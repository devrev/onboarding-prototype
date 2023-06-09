import React, { useState } from "react";
import { RiVipDiamondLine, RiCodeSSlashLine } from "react-icons/ri";
import { TbCircles } from "react-icons/tb";
import { BiCube } from "react-icons/bi";
import { EnhancementIcon, FeatureIcon } from "@/libs/icons";

import clsx from "clsx";

const partsList = [
  {
    type: "product",
    name: "Financify",
  },
  {
    type: "runnable",
    name: "Event Consumer",
  },
  {
    type: "feature",
    name: "Payments API",
  },
  {
    type: "capability",
    name: "Core Services",
  },
];

export const IconMap = {
  product: RiVipDiamondLine,
  runnable: RiCodeSSlashLine,
  feature: FeatureIcon,
  capability: BiCube,
  enhancement: EnhancementIcon,
};

export const classMap = {
  product: "text-trails-product",
  runnable: "text-trails-runnable",
  feature: "text-trails-feature",
  capability: "text-trails-capability",
  enhancement: "text-trails-enhancement",
};

export const bgClassMap = {
  enhancement: "bg-trails-enhancement bg-opacity-10",
  capability: "bg-trails-capability bg-opacity-10",
  product: "bg-trails-product bg-opacity-10",
  runnable: "bg-trails-runnable",
  feature: "bg-trails-feature bg-opacity-10",
};

const PartItem = ({ type, name, onClick, ...props }) => {
  const Icon = IconMap[type];
  const colorClass = classMap[type];

  const ItemToShow = (
    <div
      onClick={() => onClick(ItemToShow)}
      className={clsx(
        "flex items-center text-default hover:bg-menu-hovered p-2 rounded-lg cursor-pointer",
        colorClass
      )}
      {...props}
    >
      <Icon className="mr-2 w-4 h-4" />
      {name}
    </div>
  );

  return ItemToShow;
};

const PartSelector = ({ ...props }) => {
  const currItem = (
    <p className="bg-menu-selected p-2 rounded-lg text-gray-500 text-default">
      Select Part (Required)
    </p>
  );
  const [Shown, setShown] = useState(currItem);
  const [showOpts, setShowOpts] = useState(false);

  const onSelectItem = (e) => {
    setShown(e);
    setShowOpts(false);
  };

  return (
    <div {...props}>
      <div onClick={() => setShowOpts(true)} className="w-full cursor-pointer">
        {Shown}
      </div>
      {showOpts && (
        <div className="relative">
          <div className="absolute w-full max-h-[12rem] overflow-y-scroll shadow-popover p-2 rounded-lg bg-white">
            {partsList.map((part) => (
              <PartItem
                onClick={onSelectItem}
                key={part.name}
                name={part.name}
                type={part.type}
                id="part_selector__part_item"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PartSelector;
