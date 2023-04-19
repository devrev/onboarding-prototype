import React from "react";
import Filters from "@/libs/components/Filters";
import Table from "@/libs/molecules/Table";
import convertToIssueTableRow from "@/converters/convertToIssueTableRow";
import { useStore } from "@/mobx/providers";
import { observer } from "mobx-react-lite";
import { DESKS } from "@/constants";
import convertToPartTableRow from "@/converters/convertToPartsTableRow";

const PartsDesk = observer(() => {
  const store = useStore();
  const isOpen = store.configs.desks.deskOpen === DESKS.SPRINT_DESK;

  return (
    isOpen && (
      <div>
        <div className="py-5 px-page-gutter flex">
          <h2 className="text-gray-600" id="build_app_heading">
            Product /
          </h2>
          <h2 className="ml-1">Parts</h2>
        </div>
        <div className="px-page-gutter">
          <Filters
            showSelf={true}
            filters={[
              { name: "type", value: "capability" },
              { name: "Owner" },
              { name: "Tags" },
              { name: "Stage" },
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
            headers={[
              "Name",
              "Stage",
              "Tags",
              "Total Tickets",
              "Total Issues",
              "Owned By",
            ]}
            data={store.data.lists.parts.map((part) =>
              convertToPartTableRow(part)
            )}
          />
        </div>
      </div>
    )
  );
});

export default PartsDesk;
