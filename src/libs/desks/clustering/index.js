import React, { useEffect, useState } from "react";
import Table from "@/libs/molecules/Table";
import convertToIssueTableRow from "@/converters/convertToIssueTableRow";
import { useStore } from "@/mobx/providers";
import { observer } from "mobx-react-lite";
import { DESKS } from "@/constants";
import ClusteringSideMenu from "./sideMenu";
import StageBadge from "@/libs/molecules/stageBadge";
import Filters from "@/libs/components/Filters";
import BulkActions from "@/libs/molecules/BulkActions";

const ClusteringDesk = observer(() => {
  const store = useStore();
  const isOpen = store.configs.desks.deskOpen === DESKS.CLUSTERING_DESK;
  const cluster = store.data.lists.clusterTickets();

  let clusterSummary = [];
  Object.keys(cluster).forEach((key) => {
    clusterSummary.push({ name: key, count: cluster[key].length });
  });

  return (
    isOpen && (
      <div className="h-screen overflow-hidden relative">
        <BulkActions />
        <div className="py-5 px-page-gutter flex">
          <h2 className="text-gray-600">Support /</h2>
          <h2 className="ml-1">Tickets</h2>
        </div>
        <div className="px-page-gutter">
          <Filters
            filters={[
              { name: "type", value: "ticket" },
              { name: "Date", value: "Today" },
              { name: "Stage", value: "Current" },
            ]}
            sort={[{ name: "Sort" }, { name: "Group" }, { name: "Customize" }]}
            showSelf={true}
          />
        </div>
        <div className="flex items-start border-t h-full mt-5">
          <div>
            <ClusteringSideMenu data={clusterSummary} />
          </div>
          <div className="flex-1 border-l relative h-full overflow-x-hidden overflow-y-auto pb-64">
            {Object.keys(cluster).map((key) => {
              return (
                <div key={key}>
                  <StageBadge
                    className="my-4 ml-12"
                    stage={key}
                    useIcon={false}
                  />
                  <Table
                    headers={[
                      "Items",
                      "Title",
                      "Owner",
                      "Stage",
                      "Tags",
                      "Priority",
                    ]}
                    data={cluster[key].map((issue) =>
                      convertToIssueTableRow(issue)
                    )}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    )
  );
});

export default ClusteringDesk;
