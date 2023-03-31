import Pane from "@/libs/atoms/pane";
import Input from "@/libs/atoms/input";
import React, { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { observer } from "mobx-react-lite";
import { useStore } from "@/mobx/providers";
import Filter from "@/libs/components/Filters";
import { IconMap } from "@/libs/molecules/workPill";
import { BiFile } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import TimelineWidget from "@/libs/components/timelineWidget";

const PartItem = ({ icon, text }) => {
  const Icon = icon;
  return (
    <div className="flex items-center mt-6">
      <div
        className="bg-pill p-2 rounded-full text-gray-400 flex items-center justify-center"
        style={{ fontSize: "25px" }}
      >
        <Icon className="stroke-[-1]" />
      </div>
      <p className="ml-2">{text}</p>
    </div>
  );
};

const ViewEnhPane = observer(() => {
  const store = useStore();
  const [isOpen, setIsOpen] = useState(true);
  const data = store.data.panes.conversation;

  return (
    true && (
      <Pane
        isOpen={isOpen}
        position={store.configs.panes.createTicketPane.position}
      >
        <div className="px-4 py-6 flex flex-col min-h-full">
          <div className="float-right items-center justify-between">
            <div className="flex items-center text-gray-500">
              <MdOutlineClose className="text-h1 ml-4" />
            </div>
          </div>
          <div className="mt-6 text-lg p-2">New Enhancement</div>
          <div>
            <Filter filters={data.filters} showCreate={false} />
          </div>
          <div className="mt-4">
            <Input id="createTicketPane__description" text="Some Description" />
            <hr className="mt-4" />
          </div>
          <div className="px-4 py-4">
            <p className="text-sm text-gray-500">Related</p>
            <div className="flex">
              <div className="min-w-[14rem]">
                <PartItem icon={IconMap.ticket} text={"Tickets"} />
                <PartItem icon={IconMap.issue} text={"Issues"} />
                <PartItem icon={BiFile} text={"Docs"} />
              </div>
              <div>
                <PartItem icon={FiUsers} text={"Top Customers"} />
                <PartItem icon={FiUsers} text={"Top Contributors"} />
              </div>
            </div>
          </div>
          <hr />
          <TimelineWidget className="flex-1" />
        </div>
      </Pane>
    )
  );
});

export default ViewEnhPane;
