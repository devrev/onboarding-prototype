import React, { useState } from "react";
import Filters from "@/libs/components/Filters";
import { useStore } from "@/mobx/providers";
import { observer } from "mobx-react-lite";
import Button from "@/libs/atoms/button";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { BsPlay, BsQuestionLg } from "react-icons/bs";
import { DESKS, SPRINT } from "@/constants";
import clsx from "clsx";
import SprintIssueDesk from "./sprintIssue.js";
import dayjs from "dayjs";

export const SprintIconMap = {
  [SPRINT.ONE]: BsPlay,
  [SPRINT.TWO]: MdKeyboardDoubleArrowRight,
  [SPRINT.BACKLOG]: BsQuestionLg,
};

const SprintButton = ({ type, value, className, onClick, date, ...props }) => {
  const Icon = SprintIconMap[value];
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
        {date && (
          <div>
            <p className="text-small">
              {date.format("DD MMM YYYY")} -{" "}
              {date.add(1, "week").format("DD MMM YYYY")}
            </p>
          </div>
        )}
      </div>
    </Button>
  );
};

const SprintDesk = observer(() => {
  const store = useStore();
  const isOpen = store.configs.desks.deskOpen === DESKS.SPRINT_DESK;

  const [sprint, setSprint] = useState(SPRINT.ONE);

  const getNNLButtonType = (value) => {
    return sprint === value ? "lifted" : "lifted_disabled";
  };
  const issues = store.data.lists.issues;

  const sprintOneIssues = issues.filter(iss => iss.sprint === "one")
  const sprintTwoIssues = issues.filter((iss) => iss.sprint === "two");
  const backlogIssues = issues.filter((iss) => iss.sprint === "backlog")

  const SprintDataMap = {
    [SPRINT.ONE]: sprintOneIssues,
    [SPRINT.TWO]: sprintTwoIssues,
    [SPRINT.BACKLOG]: backlogIssues,
  };

  return (
    isOpen && (
      <div className="h-screen overflow-hidden relative">
        <div className="py-5 px-page-gutter flex">
          <h2 className="text-gray-600" id="build_app_heading">
            Build /
          </h2>
          <h2 className="ml-1 capitalize">{sprint}</h2>
        </div>
        <div className="flex items-center w-full px-page-gutter">
          <SprintButton
            type={getNNLButtonType(SPRINT.ONE)}
            value={SPRINT.ONE}
            onClick={() => setSprint(SPRINT.ONE)}
            date={dayjs()}
            id="sprint-1__button"
          />
          <SprintButton
            type={getNNLButtonType(SPRINT.TWO)}
            value={SPRINT.TWO}
            className="mx-5"
            onClick={() => setSprint(SPRINT.TWO)}
            date={dayjs().add(1, "week")}
            id="sprint-2__button"
          />
          <SprintButton
            type={getNNLButtonType(SPRINT.BACKLOG)}
            value={SPRINT.BACKLOG}
            onClick={() => setSprint(SPRINT.BACKLOG)}
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
          <SprintIssueDesk issues={SprintDataMap[sprint]} />
        </div>
      </div>
    )
  );
});

export default SprintDesk;
