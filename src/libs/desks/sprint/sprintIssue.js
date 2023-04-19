import React from "react";
import Table from "@/libs/molecules/Table";
import convertToIssueTableRow from "@/converters/convertToIssueTableRow";
import { observer } from "mobx-react-lite";

const SprintIssueDesk = observer(({issues}) => {
  console.log("BG2", issues)
  return (
    <div>
      <Table
        headers={["Items", "Title", "Owner", "Stage", "Tags", "Priority"]}
        data={issues.map((issue) =>
          convertToIssueTableRow(issue)
        )}
        secondColWidth="30rem"
      />
    </div>
  );
});

export default SprintIssueDesk;
