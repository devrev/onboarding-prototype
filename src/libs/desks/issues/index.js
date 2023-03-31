import React from "react";
import Filters from "@/libs/components/Filters";
import Table from "@/libs/molecules/Table";
import convertToIssueTableRow from "@/converters/convertToIssueTableRow";
import { useStore } from "@/mobx/providers";
import { observer } from "mobx-react-lite";
import { DESKS } from "@/constants";

const IssueDesk = observer(() => {
  const store = useStore();
  const isOpen = store.configs.desks.deskOpen === DESKS.ISSUE_DESK;

  return (
    isOpen && (
      <div>
        <div className="py-5 px-page-gutter flex">
          <h2 className="text-gray-600" id="build_app_heading">
            Build /
          </h2>
          <h2 className="ml-1">Issues</h2>
        </div>
        <div className="px-page-gutter">
          <Filters
            showSelf={true}
            filters={[
              { name: "type", value: "ticket" },
              { name: "Stage", value: "In Review" },
            ]}
            sort={[{ name: "Sort" }, { name: "Group" }, { name: "Customize" }]}
          />
        </div>
        <div className="mt-6">
          <Table
            headers={["Items", "Title", "Owner", "Stage", "Tags", "Priority"]}
            data={store.data.lists.tickets.map((issue) =>
              convertToIssueTableRow(issue)
            )}
          />
        </div>
      </div>
    )
  );
});

export default IssueDesk;
