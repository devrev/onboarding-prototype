import Pane from "@/libs/atoms/pane";
import React from "react";
import WorkPill from "@/libs/molecules/workPill";
import { MdOutlineClose } from "react-icons/md";
import RevOrgPill from "@/libs/molecules/revOrgPill";
import Input from "@/libs/atoms/input";
import RevUserProfile from "@/libs/molecules/revUserProfile";
import Filter from "@/libs/components/Filters";
import Chat from "@/libs/components/Chat";
import Links from "@/libs/components/Links";
import TextBox from "@/libs/components/TextBox";
import { observer } from "mobx-react-lite";
import { useStore } from "@/mobx/providers";

const ConversationPane = observer(() => {
  const store = useStore();
  const data = store.data.panes.conversation;

  return (
    store.configs.panes.conversationPane.isOpen && (
      <Pane
        isOpen={true}
        position={store.configs.panes.conversationPane.position}
      >
        <div className="px-4 py-6 flex flex-col flex-grow min-h-full max-h-full relative">
          <div>
            <div className="flex items-center justify-between">
              <WorkPill type="conv" display="CONV-2478" />
              <div className="flex items-center text-gray-500">
                <p className="text-small font-medium">Reset</p>
                <MdOutlineClose className="text-h1 ml-4" />
              </div>
            </div>
            <div className="flex items-center text-small mt-5">
              <div className="flex items-center bg-pill rounded-full px-2 py-1">
                <RevUserProfile
                  name={data.revUser.name}
                  revOrg={data.revUser.revOrg}
                />
                <p className="ml-2 text-small">{data.revUser.name}</p>
              </div>
              <p className="mx-1">from</p>
              <RevOrgPill name="Routing" />
            </div>
            <div className="mt-5">
              <Input text={data.title} />
            </div>
            <div className="mt-4">
              <Filter filters={data.filters} showCreate={false} />
              <hr className="mt-5" />
            </div>
            <div className="mt-5">
              <Links headers={["tickets"]} links={data.links} />
              <hr className="mt-10" />
            </div>
          </div>
          <Chat className="flex-1" chat={data.chat} />
          <TextBox />
        </div>
      </Pane>
    )
  );
});

export default ConversationPane;
