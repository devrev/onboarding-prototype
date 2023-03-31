import Input from "@/libs/atoms/input";
import ProfilePicture from "@/libs/atoms/profile";
import WorkPill from "@/libs/molecules/workPill";
import clsx from "clsx";
import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineLink, AiOutlineGlobal } from "react-icons/ai";

const EmptyMessage = ({ text }) => {
  return (
    <div className="w-full h-20 border-2 rounded-xl flex items-center justify-center">
      <p className="text-small capitalize text-gray-500">No {text} Linked</p>
    </div>
  );
};

const LinkItem = ({ item, type }) => {
  return item.type === "doc" ? (
    <div className="flex mt-4 text-default cursor-pointer items-center">
      <div className="min-w-[6rem]">{item.title}</div>
      <div className="ml-5 flex items-center border w-full p-2 rounded-lg">
        <div className="mr-2 text-gray-500" style={{ fontSize: "32px" }}>
          <AiOutlineGlobal />
        </div>
        {item.value}
      </div>
    </div>
  ) : (
    <div
      className={clsx(
        "h-20 p-3 rounded-lg cursor-pointer",
        type === "work" && "shadow-popover",
        type === "enh" && "border mt-2"
      )}
    >
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

const Links = observer(({ headers, links, type = "work", start }) => {
  const [selected, setSelected] = useState(start || headers[0]);
  return (
    <div id="links__items">
      <div className="flex items-center justify-between">
        <div
          className={clsx(
            "flex items-center text-small capitalize font-medium",
            type === "enh" && "bg-pill rounded-md"
          )}
        >
          {headers.map((header) => (
            <div
              className={clsx(
                "w-fit cursor-pointer",
                type === "work" &&
                  "mr-1 px-2 py-1.5 rounded-full flex items-center",
                type === "enh" && "px-2 py-1.5 rounded-md flex items-center",
                selected === header && "bg-pill-hovered"
              )}
              onClick={() => setSelected(header)}
              key={header}
              id={`links_header-${header}`}
            >
              {header}
              <div className="text-small text-gray-500 ml-1">
                {links &&
                  links.hasOwnProperty(header) &&
                  links[header].length > 0 &&
                  links[header].length}
              </div>
            </div>
          ))}
        </div>
        {type === "work" && (
          <div
            className="text-small text-gray-600 flex items-center cursor-pointer"
            id={`link_${selected}`}
          >
            <AiOutlinePlus className="mr-1" />
            Link {selected}
          </div>
        )}
      </div>
      <div className="mt-4">
        {links && links.hasOwnProperty(selected) && links[selected].length
          ? links[selected].map((link, index) => (
              <LinkItem
                key={`${link.title}_${index}`}
                item={link}
                type={type}
              />
            ))
          : type === "work" && <EmptyMessage text={selected} />}
      </div>
    </div>
  );
});

export default Links;
