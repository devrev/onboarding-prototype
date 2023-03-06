import Pane from "@/libs/atoms/pane";
import React from "react";
import WorkPill from "@/libs/molecules/workPill";
import { MdOutlineClose } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import RevOrgPill from "@/libs/molecules/revOrgPill";
import Input from "@/libs/atoms/input";
import RevUserProfile from "@/libs/molecules/revUserProfile";
import Filter from "@/libs/components/Filters";
import ProfilePicture from "@/libs/atoms/profile";
import Chat from "@/libs/components/Chat";

const ConversationPane = () => {
  const isOpen = true;
  return (
    <Pane isOpen={true}>
      <div className="px-4 py-6">
        <div className="flex items-center justify-between">
          <WorkPill type="conv" display="CONV-2478" />
          <div className="flex items-center text-gray-500">
            <p className="text-small font-medium">Reset</p>
            <MdOutlineClose className="text-h1 ml-4" />
          </div>
        </div>
        <div className="flex items-center text-small mt-5">
          <div className="flex items-center bg-pill rounded-full px-2 py-1">
            <RevUserProfile name="Manan Sharma" revOrg="Routing" />
            <p className="ml-2 text-small">Manan Sharma</p>
          </div>
          <p className="mx-1">from</p>
          <RevOrgPill name="Routing" />
        </div>
        <div className="mt-5">
          <Input text="Add Title" />
        </div>
        <div className="mt-4">
          <Filter
            filters={[
              { name: "Stage", value: "New" },
              { name: "Members", value: "1" },
              { name: "Tags", value: "2" },
            ]}
            showCreate={false}
          />
          <hr className="mt-4" />
        </div>
        <div className="mt-5 flex items-center justify-between">
          <div className="bg-pill flex items-center text-small font-medium w-fit px-2 py-1.5 rounded-full cursor-pointer">
            Tickets
            <p className="text-small text-gray-500 ml-1">3</p>
          </div>
          <div>
            <div className="text-small text-gray-700 flex items-center">
              <AiOutlinePlus className="mr-1" />
              Link Tickets
            </div>
          </div>
        </div>
        <hr className="mt-5" />
        <Chat />
      </div>
    </Pane>
  );
};

export default ConversationPane;
