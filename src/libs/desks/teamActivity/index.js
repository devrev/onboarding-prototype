import React from "react";
import Filters from "@/libs/components/Filters";
import { useStore } from "@/mobx/providers";
import { observer } from "mobx-react-lite";
import { DESKS } from "@/constants";
import TeamActivityIssueDesk from "./teamActivityIssue.js";

const TeamActivityDesk = observer(() => {
  const store = useStore();
  const isOpen = store.configs.desks.deskOpen === DESKS.TEAM_ACTIVITY_DESK;

  const { issues, users } = store.data.lists;

  return (
    isOpen && (
      <div className="h-screen overflow-hidden relative">
        <div className="py-5 px-page-gutter flex">
          <h2 className="text-gray-600" id="build_app_heading">
            Support /
          </h2>
          <h2 className="ml-1 capitalize">Team Activity</h2>
        </div>
        <div className="px-page-gutter">
          <Filters
            showSelf={true}
            filters={[{ name: "Stage" }, { name: "Date", value: "Yesterday" }]}
            sort={[{ name: "Sort" }, { name: "Group" }, { name: "Customize" }]}
          />
        </div>
        <div className="mt-6 h-full">
          <TeamActivityIssueDesk users={users} issues={issues} />
        </div>
      </div>
    )
  );
});

export default TeamActivityDesk;
