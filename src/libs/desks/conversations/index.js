import React from "react";
import Filters from "@/libs/components/Filters";
import Table from "@/libs/molecules/Table";
import convertToConversationTableRow from "@/converters/convertToConversationTableRow";
import { observer } from "mobx-react-lite";
import { useStore } from "@/mobx/providers";
import { DESKS } from "@/constants";

const ConversationDesk = observer(() => {
  const store = useStore();
  const isOpen = store.configs.desks.deskOpen === DESKS.CONVERSATION_DESK;
  return (
    isOpen && (
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
            data={store.data.lists.conversations.map((conv) =>
              convertToConversationTableRow(conv)
            )}
          />
        </div>
      </div>
    )
  );
});

export default ConversationDesk;
