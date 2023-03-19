import React from "react";
import Table from "@/libs/molecules/Table";
import convertToIssueTableRow from "@/converters/convertToIssueTableRow";
import { useStore } from "@/mobx/providers";
import { observer } from "mobx-react-lite";

const NextDesk = observer(() => {
  const store = useStore();
  const isOpen = true;

  return (
    isOpen && (
      <div>
        <div>
          <Table
            headers={["Items", "Title", "Owner", "Stage", "Tags", "Priority"]}
            data={store.data.lists.issues.map((issue) =>
              convertToIssueTableRow(issue)
            )}
          />
        </div>
      </div>
    )
  );
});

export default NextDesk;
