import Button from "@/libs/atoms/button";
import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { GoMention } from "react-icons/go";
import { FiBarChart } from "react-icons/fi";
import { RxCounterClockwiseClock } from "react-icons/rx";
import useMobileScreen from "@/hooks/useMobileScreen";
import clsx from "clsx";
import DropDown from "@/libs/atoms/dropdown";
import WorkPill from "@/libs/molecules/workPill";

const FilterField = ({ name, value }) => {
  return (
    <div className="flex mt-1 text-small border w-fit rounded-md cursor-pointer hover:border-gray-400 mr-1 capitalize">
      <div className={clsx("px-2 py-1", value && "border-r")}>{name}</div>
      {value && name === "type" ? (
        <div>
          <WorkPill display={value} type={value} useBg={false} />
        </div>
      ) : (
        value && (<div className="px-2 py-1">{value}</div>)
      )}
    </div>
  );
};

const FilterFieldIcon = ({ children }) => {
  return (
    <div className="flex mt-1 text-small border w-fit p-2 rounded-3xl cursor-pointer hover:border-gray-400 mr-1">
      <div className="text-gray-700">{children}</div>
    </div>
  );
};

const SortFields = ({ sort }) => {
  const [showOpts, setShowOpts] = useState("");
  console.log(sort);

  return (
    <div className="flex items-center flex-wrap">
      {sort &&
        sort.map(({ name, items, correct }) => {
          const itemsList = items || [];
          return (
            <SortField
              onClick={() => itemsList.length && setShowOpts(name)}
              key={name}
              name={name}
              currOpt={showOpts}
              onSelect={() => correct && setShowOpts("")}
              items={itemsList}
            />
          );
        })}
    </div>
  );
};

const SortField = ({ name, onClick, currOpt, onSelect, items }) => {
  return (
    <DropDown items={items} showOpts={currOpt === name} onSelect={onSelect}>
      <div
        onClick={onClick}
        className="p-1 rounded-md text-small text-gray-600 font-semibold leading-loose tracking-tight flex items-center cursor-pointer hover:bg-area-hovered mr-1"
        id={`sort_field-${name}`}
      >
        <div>{name}</div> <BiChevronDown className="text-default" />
      </div>
    </DropDown>
  );
};

const Filter = ({ filters, sort, showSelf = false, showCreate = true }) => {
  const isMobile = useMobileScreen();
  return (
    <div className="flex items-center justify-between">
      <div className={clsx("flex", isMobile && "flex-col")}>
        {showSelf && (
          <div className="flex items-center mr-2">
            <FilterFieldIcon>
              <GoMention />
            </FilterFieldIcon>
            <FilterFieldIcon>
              <FiBarChart />
            </FilterFieldIcon>
            <FilterFieldIcon>
              <RxCounterClockwiseClock />
            </FilterFieldIcon>
          </div>
        )}
        <div className="flex items-center flex-wrap">
          {filters.map(({ name, value }) => (
            <FilterField key={name} name={name} value={value} />
          ))}
          {showCreate && (
            <Button type="filter" className="mt-1">
              <AiOutlinePlus className="text-h2" />
            </Button>
          )}
        </div>
      </div>
      <SortFields sort={sort} />
    </div>
  );
};

export default Filter;
