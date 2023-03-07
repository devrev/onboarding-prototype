import ProfilePicture from "@/libs/atoms/profile";
import WorkPill from "@/libs/molecules/workPill";
import clsx from "clsx";
import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineLink } from "react-icons/ai";

const EmptyMessage = ({ text }) => {
  return (
    <div className="w-full h-20 border-2 rounded-xl flex items-center justify-center">
      <p className="text-small capitalize text-gray-500">No {text} Linked</p>
    </div>
  );
};

const LinkItem = ({ item }) => {
  return (
    <div className="h-20 shadow-popover p-3 rounded-lg cursor-pointer">
      <div className="flex items-center">
        <WorkPill type={item.type} display={item.display} />
        <div className="ml-2 ellipsis-break text-default">{item.title}</div>
      </div>
      <div className="flex items-center mt-1.5 text-default">
        <div className="flex items-center text-small bg-pill rounded-full px-2 py-0.5">
          <AiOutlineLink className="mr-1" />
          Related
        </div>
        <div className="ml-4">{item.f1}</div>
        <div className="ml-4">{item.f2}</div>
        <div className="ml-4">
          <ProfilePicture name={item.owner} />
        </div>
      </div>
    </div>
  );
};

const Links = observer(({ headers, links }) => {
  const [selected, setSelected] = useState(headers[0]);
  return (
    <div id="links__items">
      <div className="flex items-center justify-between">
        <div className="flex items-center text-small capitalize font-medium">
          {headers.map((header) => (
            <div
              className={clsx(
                "w-fit mr-1 cursor-pointer px-2 py-1.5 rounded-full flex items-center",
                selected === header && "bg-pill"
              )}
              onClick={() => setSelected(header)}
              key={header}
            >
              {header}
              <div className="text-small text-gray-500 ml-1">
                {links &&
                  links.hasOwnProperty(`${header}`) &&
                  links[`${header}`].length > 0 &&
                  links[`${header}`].length}
              </div>
            </div>
          ))}
        </div>
        <div
          className="text-small text-gray-600 flex items-center cursor-pointer"
          id={`link_${selected}`}
        >
          <AiOutlinePlus className="mr-1" />
          Link {selected}
        </div>
      </div>
      <div className="mt-4">
        {links &&
        links.hasOwnProperty(`${selected}`) &&
        links[`${selected}`].length ? (
          links[`${selected}`].map((link) => (
            <LinkItem key={link.title} item={link} />
          ))
        ) : (
          <EmptyMessage text={selected} />
        )}
      </div>
    </div>
  );
});

export default Links;
