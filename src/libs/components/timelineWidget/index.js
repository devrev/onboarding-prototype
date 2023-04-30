import ProfilePicture from "@/libs/atoms/profile";
import WorkPill from "@/libs/molecules/workPill";
import clsx from "clsx";
import React, { useState } from "react";
import TextBox from "../TextBox";

const DISC = "Discussions";
const EVENTS = "Events";

const Events = ({owner, display, type}) => {
  return (
    <div>
      <div className="flex items-center">
        <hr className="flex-1" />
        <p className="text-tiny ml-4 text-gray-500">Today</p>
      </div>
      <div className="flex items-center mt-2">
        <ProfilePicture size="xxs" name="bot" />
        <p className="mx-1.5">updated status</p>
      </div>
    </div>
  );
};

const MenuTab = ({ name, selected, onClick }) => {
  return (
    <div
      className={clsx(
        "text-gray-500 px-2 py-1.5 cursor-pointer",
        selected === name && "text-gray-900 font-medium tracking-tight"
      )}
      onClick={onClick}
    >
      {name}
    </div>
  );
};

const TimelineWidget = ({ className }) => {
  const [selected, setSelected] = useState(DISC);

  return (
    <div className={clsx(className, "h-full flex flex-col")}>
      <div className="flex-1">
        <div className="flex items-center text-small w-fit border rounded-md mt-4">
          <MenuTab
            name={DISC}
            selected={selected}
            onClick={() => setSelected(DISC)}
          />
          <MenuTab
            name={EVENTS}
            selected={selected}
            onClick={() => setSelected(EVENTS)}
          />
        </div>
      </div>
      <div>{selected === DISC ? <TextBox /> : <Events />}</div>
    </div>
  );
};

export default TimelineWidget;
