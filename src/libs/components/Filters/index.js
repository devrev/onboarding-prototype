import Button from "@/libs/atoms/button";
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";

const FilterField = ({ name, value }) => {
  return (
    <div className="flex mt-1 text-small border w-fit px-2 py-1 rounded-md cursor-pointer hover:border-gray-400 mr-1">
      <div className="text-gray-500">{name}</div>
      {value && <div className="ml-1">{value}</div>}
    </div>
  );
};

const SortField = ({ name }) => {
  return (
    <div className="p-1 rounded-md text-small text-gray-600 font-medium flex items-center cursor-pointer hover:bg-area-hovered mr-1">
      <div>{name}</div> <BiChevronDown className="text-default" />
    </div>
  );
};

const Filter = ({ filters, sort }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center flex-wrap">
        {filters.map(({ name, value }) => (
          <FilterField key={name} name={name} value={value} />
        ))}
        <Button type="filter" className="mt-1">
          <AiOutlinePlus className="text-h2" />
        </Button>
      </div>
      <div className="flex items-center flex-wrap">
        {sort.map(({ name }) => (
          <SortField key={name} name={name} />
        ))}
      </div>
    </div>
  );
};

export default Filter;
