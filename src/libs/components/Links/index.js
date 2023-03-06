import ProfilePicture from "@/libs/atoms/profile";
import WorkPill from "@/libs/molecules/workPill";
import clsx from "clsx";
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
    <div className="h-20 shadow-popover p-3 rounded-lg">
      <div className="flex items-center">
        <WorkPill type="ticket" display="TKT-1216" />
        <div className="ml-2 ellipsis-break text-default">
          Show created & modified dates by default
        </div>
      </div>
      <div className="flex items-center mt-1.5 text-default">
        <div className="flex items-center text-small bg-pill rounded-full px-2 py-0.5">
          <AiOutlineLink className="mr-1" />
          Related
        </div>
        <div className="ml-4">Awaiting Product Assist</div>
        <div className="ml-4">Medium</div>
        <div className="ml-4">
          <ProfilePicture name="Manan Sharma" />
        </div>
      </div>
    </div>
  );
};

const Links = ({ headers, links }) => {
  const [selected, setSelected] = useState(headers[0]);
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center text-small capitalize font-medium">
          {headers.map((header) => (
            <div
              className={clsx(
                "w-fit mr-1 cursor-pointer px-2 py-1.5 rounded-full",
                selected === header && "bg-pill"
              )}
              onClick={() => setSelected(header)}
              key={header}
            >
              {header}
              <div className="text-small text-gray-500 ml-1">
                {links &&
                  links.hasOwnProperty(`${header}`) &&
                  links[`${header}`].length}
              </div>
            </div>
          ))}
        </div>
        <div className="text-small text-gray-600 flex items-center">
          <AiOutlinePlus className="mr-1" />
          Link {selected}
        </div>
      </div>
      <div className="mt-4">
        {links &&
        links.hasOwnProperty(`${selected}`) &&
        links[`${selected}`].length ? (
          <LinkItem />
        ) : (
          <EmptyMessage text={selected} />
        )}
      </div>
    </div>
  );
};

export default Links;
