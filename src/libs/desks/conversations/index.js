import React from "react";
import Filters from "@/libs/components/Filters";
import Table from "@/libs/molecules/Table";
import convertToConversationTableRow from "@/converters/convertToConversationTableRow";
import { observer } from "mobx-react-lite";
import { useStore } from "@/mobx/providers";

const ConversationDesk = observer(() => {
  return (
    <div>
      <div className="py-5 px-page-gutter flex">
        <h2 className="text-gray-600">Support /</h2>
        <h2 className="ml-1">Inbox</h2>
      </div>
      <div className="px-page-gutter">
        <Filters
          filters={[
            { name: "Status", value: "Unread" },
            { name: "Date", value: "Yesterday" },
          ]}
          sort={[{ name: "Sort" }, { name: "Group" }, { name: "Customize" }]}
        />
      </div>
      <div className="mt-4">
        <Table
          headers={[
            "Items",
            "RevOrg",
            "Members",
            "Source",
            "Last Message",
            "Tickets",
            "Last Updated",
          ]}
          data={[
            convertToConversationTableRow({
              displayId: "CONV-1318",
              member: {
                name: "Deepak Gupta",
                extra: 2,
              },
              source: "email",
              msg: {
                name: "Manan Sharma",
                text: "Thank you for writing in, we will respond as soon as possible.While you wait, please add any additional information that may help us with your inquiry.",
              },
              ticket: "TKT-1216",
              updated: "yesterday",
            }),
            convertToConversationTableRow({
              displayId: "CONV-1446",
              member: {
                name: "Michael Machado",
                extra: 1,
              },
              source: "plug",
              msg: {
                name: "Deepak Gupta",
                text: "Sure, Cheers!",
              },
              updated: "7 hrs ago",
            }),
            convertToConversationTableRow({
              displayId: "CONV-1318",
              member: {
                name: "Deepak Gupta",
                extra: 2,
              },
              source: "slack",
              msg: {
                name: "Manan Sharma",
                text: "Thank you for writing in, we will respond as soon as possible.While you wait, please add any additional information that may help us with your inquiry.",
              },
              ticket: "TKT-1216",
              updated: "yesterday",
            }),
          ]}
        />
      </div>
    </div>
  );
});

export default ConversationDesk;
