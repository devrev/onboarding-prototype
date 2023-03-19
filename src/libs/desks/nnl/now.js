import React from "react";
import Table from "@/libs/molecules/Table";
import convertToIssueTableRow from "@/converters/convertToIssueTableRow";
import { useStore } from "@/mobx/providers";
import { observer } from "mobx-react-lite";
import { STAGES } from "@/constants";
import NNLSideMenu from "./sideMenu";
import StageBadge from "@/libs/molecules/stageBadge";

const NowDesk = observer(() => {
  const store = useStore();

  return (
    <div className="flex items-start border-t h-full">
      <div>
        <NNLSideMenu />
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
  );
});

export default NowDesk;
