import React from "react";
import Table from "@/libs/molecules/Table";
import convertToIssueTableRow from "@/converters/convertToIssueTableRow";
import { observer } from "mobx-react-lite";

const ActiveTicketTrackerIssueDesk = observer(({issues}) => {
  return (
    <div>
      <Table
        headers={["Items", "Title", "Owner", "Stage", "Tags", "Priority"]}
        data={issues.map((issue) =>
          convertToIssueTableRow(issue)
        )}
        secondColWidth="min-w-[30rem] max-w-[30rem]"
      />
    </div>
  );
});

export default ActiveTicketTrackerIssueDesk;
