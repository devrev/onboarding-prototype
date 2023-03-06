import React from "react";
import Filters from "@/libs/components/Filters";
import Table from "@/libs/molecules/Table";
import convertToIssueTableRow from "@/converters/convertToIssueTableRow";
import { useStore } from "@/mobx/providers";
import { observer } from "mobx-react-lite";

const IssueDesk = observer(() => {
  const store = useStore();
  return (
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
            { name: "Stage", value: "In Review" },
            { name: "Date", value: "Yesterday" },
          ]}
          sort={[{ name: "Sort" }, { name: "Group" }, { name: "Customize" }]}
        />
      </div>
      <div className="mt-6">
        <Table
          headers={["Items", "Title", "Owner", "Stage", "Tags", "Priority"]}
          data={store.data.lists.issues.map((issue) =>
            convertToIssueTableRow(issue)
          )}
        />
      </div>
    </div>
  );
});

export default IssueDesk;
