import React from "react";
import Filters from "@/libs/components/Filters";
import Table from "@/libs/molecules/Table";
import convertToIssueTableRow from "@/converters/convertToIssueTableRow";
import { useStore } from "@/mobx/providers";
import { observer } from "mobx-react-lite";
import { DESKS } from "@/constants";
import FeatureBar from "@/libs/components/FeatureBar";

const IssueDesk = observer(({section = 'Build', title = "Tickets", showFeatureBar = false}) => {
  const store = useStore();
  const isOpen = store.configs.desks.deskOpen === DESKS.ISSUE_DESK;

  return (
    isOpen && (
      <div>
        <div className="py-5 px-page-gutter flex">
          <h2 className="text-gray-600" id="build_app_heading">
            {section} /
          </h2>
          <h2 className="ml-1 capitalize">{title}</h2>
        </div>
        { showFeatureBar &&
          <div className="pb-3 px-page-gutter">
            <FeatureBar />
          </div>
        }
        <div className="px-page-gutter">
          <Filters
            showSelf={true}
            filters={[
              { name: "type", value: "ticket" },
              { name: "Stage", value: "In Review" },
            ]}
            sort={[
              { name: "Sort" },
              {
                name: "Group",
              },
              { name: "Customize" },
            ]}
          />
        </div>
        <div className="mt-6">
          <Table
            headers={["Items", "Title", "Owner", "Stage", "Tags", "Priority"]}
            data={store.data.lists[section === 'Build' ? 'tickets' : 'issues'].map((issue) =>
              convertToIssueTableRow(issue)
            )}
          />
        </div>
      </div>
    )
  );
});

export default IssueDesk;
