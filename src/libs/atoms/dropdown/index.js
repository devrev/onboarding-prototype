import React from "react";

const DropDownItem = ({ item, onSelect }) => {
  return (
    <div
      className="text-default hover:bg-pill-hovered px-2 py-1 rounded-md cursor-pointer"
      id={item.title}
      onClick={onSelect}
    >
      {item.title}
    </div>
  );
};

const DropDown = ({ items, children, showOpts, onSelect }) => {
  return (
    <div className="relative">
      <div>{children}</div>
      {showOpts && (
        <div className="absolute w-40 max-h-40 right-2 z-40 shadow-popover p-2 overflow-y-auto bg-white rounded-lg">
          {items.map((item) => (
            <DropDownItem onSelect={onSelect} key={item.title} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;
