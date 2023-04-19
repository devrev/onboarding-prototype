import React, { useState } from "react";
import Filters from "@/libs/components/Filters";
import { useStore } from "@/mobx/providers";
import { observer } from "mobx-react-lite";
import Sprint1Desk from "./sprintIssue.js";
import Button from "@/libs/atoms/button";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { TbTilde } from "react-icons/tb";
import { BsPlay, BsQuestionLg } from "react-icons/bs";
import { SPRINT } from "@/constants";
import clsx from "clsx";
import SprintIssueDesk from "./sprintIssue.js";

export const SprintIconMap = {
  [SPRINT.ONE]: BsPlay,
  [SPRINT.TWO]: MdKeyboardDoubleArrowRight,
  [SPRINT.BACKLOG]: BsQuestionLg,
};

const SprintButton = ({ type, value, className, onClick }) => {
  const Icon = SprintIconMap[value];
  return (
    <Button type={type} onClick={onClick} className={clsx("flex-1", className)}>
      <div className="flex items-center text-default capitalize">
        <Icon className="text-h1 mr-1" />
        {value}
      </div>
    </Button>
  );
};

const SprintDesk = observer(() => {
  const store = useStore();
  const isOpen = true;

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

  console.log("BG", backlogIssues)


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
          />
          <SprintButton
            type={getNNLButtonType(SPRINT.TWO)}
            value={SPRINT.TWO}
            className="mx-5"
            onClick={() => setSprint(SPRINT.TWO)}
          />
          <SprintButton
            type={getNNLButtonType(SPRINT.BACKLOG)}
            value={SPRINT.BACKLOG}
            onClick={() => setSprint(SPRINT.BACKLOG)}
          />
        </div>
        <div className="px-page-gutter mt-5">
          <Filters
            showSelf={true}
            filters={[
              { name: "Stage"},
              { name: "Date", value: "Yesterday" },
            ]}
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
