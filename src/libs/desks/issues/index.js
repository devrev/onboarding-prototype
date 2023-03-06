import React from "react";
import Filters from "@/libs/components/Filters";
import Table from "@/libs/molecules/Table";
import convertToIssueTableRow from "@/converters/convertToIssueTableRow";

const IssueDesk = () => {
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
          data={[
            convertToIssueTableRow({
              displayId: "ISS-1318",
              title: "User documentation for new product onboarding workflows",
              owner: {
                name: "Deepak Gupta",
              },
              priority: "P1",
              stage: "review",
              tags: [
                {
                  name: "Revenue",
                },
                {
                  name: "+2",
                },
              ],
            }),
            convertToIssueTableRow({
              displayId: "ISS-1318",
              title: "User documentation for new product onboarding workflows",
              owner: {
                name: "Deepak Gupta",
              },
              priority: "P1",
              stage: "review",
              tags: [
                {
                  name: "Revenue",
                },
                {
                  name: "+2",
                },
              ],
            }),
            convertToIssueTableRow({
              displayId: "ISS-1318",
              title: "User documentation for new product onboarding workflows",
              owner: {
                name: "Deepak Gupta",
              },
              priority: "P1",
              stage: "review",
              tags: [
                {
                  name: "Revenue",
                },
                {
                  name: "+2",
                },
              ],
            }),
          ]}
        />
      </div>
    </div>
  );
};

export default IssueDesk;
