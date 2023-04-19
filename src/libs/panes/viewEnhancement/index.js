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
import { SprintIcon } from "@/libs/icons";
import clsx from "clsx";

const PartItem = ({ icon, text, stroke, ...props }) => {
  const Icon = icon;
  return (
    <div className="flex items-center mt-6" {...props}>
      <div
        className="bg-pill p-2 rounded-full text-gray-400 flex items-center justify-center cursor-pointer"
        style={{ fontSize: "25px" }}
      >
        <Icon className={clsx("w-5 h-5", stroke && "stroke-1")} />
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
    store.configs.panes.viewEnhancementPane.isOpen && (
      <Pane
        isOpen={isOpen}
        position={store.configs.panes.createTicketPane.position}
      >
        <div className="px-4 py-6 flex flex-col min-h-full">
          <div className="flex items-center justify-between">
            <div className="mt-6 text-lg">Discount API</div>
            <div className="flex items-center text-gray-500">
              <MdOutlineClose className="text-h1 ml-4" />
            </div>
          </div>
          <div className="mt-2">
            <Filter filters={data.filters} showCreate={false} />
          </div>
          <div className="mt-4">
            <Input
              id="createTicketPane__description"
              text="One place to track People, Process and KPIs for the discounts team."
            />
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
                <PartItem icon={FiUsers} text={"Top Customers"} stroke={true} />
                <PartItem
                  icon={FiUsers}
                  text={"Top Contributors"}
                  stroke={true}
                />
                <PartItem icon={SprintIcon} text={"Sprint Boards"} id="enhPane__sprint-icon" />
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
