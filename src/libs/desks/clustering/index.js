import React from "react";
import Table from "@/libs/molecules/Table";
import convertToIssueTableRow from "@/converters/convertToIssueTableRow";
import { useStore } from "@/mobx/providers";
import { observer } from "mobx-react-lite";
import { STAGES } from "@/constants";
import ClusteringSideMenu from "./sideMenu";
import StageBadge from "@/libs/molecules/stageBadge";
import Filters from "@/libs/components/Filters";
import BulkActions from "@/libs/molecules/BulkActions";

const ClusteringDesk = observer(() => {
  const store = useStore();

  return (
    <div className="h-screen overflow-hidden relative">
      <BulkActions />
      <div className="py-5 px-page-gutter flex">
        <h2 className="text-gray-600">Support /</h2>
        <h2 className="ml-1">Tickets</h2>
      </div>
      <div className="px-page-gutter">
        <Filters
          filters={[
            { name: "Status", value: "Unread" },
            { name: "Date", value: "Yesterday" },
          ]}
          sort={[{ name: "Sort" }, { name: "Group" }, { name: "Customize" }]}
          showSelf={true}
        />
      </div>
      <div className="flex items-start border-t h-full mt-5">
        <div>
          <ClusteringSideMenu />
        </div>
        <div className="flex-1 border-l relative h-full overflow-x-hidden overflow-y-auto pb-64">
          <StageBadge className="my-4 ml-12" stage={STAGES.DEVELOPMENT} />
          <Table
            headers={["Items", "Title", "Owner", "Stage", "Tags", "Priority"]}
            data={store.data.lists.issues.map((issue) =>
              convertToIssueTableRow(issue)
            )}
          />
          <StageBadge className="my-4 ml-12" stage={STAGES.NOW} />
          <Table
            headers={["Items", "Title", "Owner", "Stage", "Tags", "Priority"]}
            data={store.data.lists.issues.map((issue) =>
              convertToIssueTableRow(issue)
            )}
          />
          <StageBadge className="my-4 ml-12" stage={STAGES.REVIEW} />
          <Table
            headers={["Items", "Title", "Owner", "Stage", "Tags", "Priority"]}
            data={store.data.lists.issues.map((issue) =>
              convertToIssueTableRow(issue)
            )}
          />
        </div>
      </div>
    </div>
  );
});

export default ClusteringDesk;
