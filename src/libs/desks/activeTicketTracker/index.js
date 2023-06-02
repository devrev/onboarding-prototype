import React, { useState } from "react";
import Filters from "@/libs/components/Filters";
import { useStore } from "@/mobx/providers";
import { observer } from "mobx-react-lite";
import Button from "@/libs/atoms/button";
import { MdChatBubbleOutline, MdOutlineReorder, MdOutlineMoreHoriz } from "react-icons/md";
import { DESKS, ACTIVE_TICKET_TRACKER } from "@/constants";
import clsx from "clsx";
import ActiveTicketTrackerIssueDesk from "./activeTicketTrackerIssue.js";
import dayjs from "dayjs";

export const ActiveTicketTrackerIconMap = {
  [ACTIVE_TICKET_TRACKER.QUEUED]: MdOutlineReorder,
  [ACTIVE_TICKET_TRACKER.WIP]: MdChatBubbleOutline,
  [ACTIVE_TICKET_TRACKER.AWAITING]: MdOutlineMoreHoriz,
};

const ActiveTicketTrackerButton = ({ type, value, className, onClick, ...props }) => {
  const Icon = ActiveTicketTrackerIconMap[value];
  return (
    <Button
      type={type}
      onClick={onClick}
      className={clsx("flex-1", className)}
      {...props}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center text-default capitalize">
          <Icon className="text-h1 mr-1" />
          {value}
        </div>
      </div>
    </Button>
  );
};

const ActiveTicketTrackerDesk = observer(() => {
  const store = useStore();
  const isOpen = store.configs.desks.deskOpen === DESKS.ACTIVE_TICKET_TRACKER_DESK;
  const isFiltered = store.configs.desks.filtered;
  const [activeTicketTracker, setActiveTicketTracker] = useState(ACTIVE_TICKET_TRACKER.QUEUED);

  const getNNLButtonType = (value) => {
    return activeTicketTracker === value ? "lifted" : "lifted_disabled";
  };
  const issues = store.data.lists.issues;

  return (
    isOpen && (
      <div className="h-screen overflow-hidden relative">
        <div className="py-5 px-page-gutter flex">
          <h2 className="text-gray-600" id="build_app_heading">
            Support /
          </h2>
          <h2 className="ml-1 capitalize">{activeTicketTracker}</h2>
        </div>
        <div className="flex items-center w-full px-page-gutter">
          <ActiveTicketTrackerButton
            type={getNNLButtonType(ACTIVE_TICKET_TRACKER.QUEUED)}
            value={ACTIVE_TICKET_TRACKER.QUEUED}
            onClick={() => setActiveTicketTracker(ACTIVE_TICKET_TRACKER.QUEUED)}
            date={dayjs()}
            id="activeTicketTracker-1__button"
          />
          <ActiveTicketTrackerButton
            type={getNNLButtonType(ACTIVE_TICKET_TRACKER.WIP)}
            value={ACTIVE_TICKET_TRACKER.WIP}
            className="mx-5"
            onClick={() => setActiveTicketTracker(ACTIVE_TICKET_TRACKER.WIP)}
            date={dayjs().add(1, "week")}
            id="activeTicketTracker-2__button"
          />
          <ActiveTicketTrackerButton
            type={getNNLButtonType(ACTIVE_TICKET_TRACKER.AWAITING)}
            value={ACTIVE_TICKET_TRACKER.AWAITING}
            onClick={() => setActiveTicketTracker(ACTIVE_TICKET_TRACKER.AWAITING)}
            id="backlog__button"
          />
        </div>
        <div className="px-page-gutter mt-5">
          <Filters
            showSelf={true}
            filters={[{ name: "Stage" }, { name: "Date", value: "Yesterday" }]}
            sort={[{ name: "Sort" }, { name: "Group" }, { name: "Customize" }]}
          />
        </div>
        <div className="mt-6 h-full">
          <ActiveTicketTrackerIssueDesk issues={issues.slice(0, isFiltered ? 1 : issues.length)} />
        </div>
      </div>
    )
  );
});

export default ActiveTicketTrackerDesk;
