import React from "react";
import WorkPill from "@/libs/atoms/workPill";
import ProfilePicture from "@/libs/atoms/profile";
import Filters from "@/libs/components/Filters";
import UpdatesDesk from "@/libs/desks/updates";
import Table from "@/libs/molecules/Table";
import SourcePill from "@/libs/atoms/sourcePill";

const ConversationDesk = () => {
  return (
    <div>
      <div className="py-5 px-page-gutter">
        <h2>Inbox</h2>
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
      <div className="mt-4 pl-page-gutter">
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
            [
              <WorkPill key="CONV-1318" type="conv" display="CONV-1318" />,
              "CourseHero",
              <div key="members" className="flex items-center">
                <ProfilePicture size="xs" name="AD" color="bg-yellow-light" />
                <p className="ml-1">areendavid66</p>
                <p className="ml-2 text-tiny text-gray-400">+2</p>
              </div>,
              <SourcePill key="source" name="email" />,
              <div key="last_msg" className="flex items-center">
                <ProfilePicture size="xs" name="DG" color="bg-green-light" />
                <p className="ml-1 ellipsis-break">
                  Thank you for writing in, we will respond as soon as possible.
                  While you wait, please add any additional information that may
                  help us with your inquiry.
                </p>
              </div>,
              <WorkPill key="TKT-1819" type="ticket" display="TKT-1819" />,
              <p className="text-small" key="update">
                yesterday
              </p>,
            ],
            [
              <WorkPill key="CONV-1318" type="conv" display="CONV-1318" />,
              "CourseHero",
              <div key="members" className="flex items-center">
                <ProfilePicture size="xs" name="AD" color="bg-yellow-light" />
                <p className="ml-1">areendavid66</p>
                <p className="ml-2 text-tiny text-gray-400">+2</p>
              </div>,
              <SourcePill key="source" name="slack" />,
              <div key="last_msg" className="flex items-center">
                <ProfilePicture size="xs" name="DG" color="bg-green-light" />
                <p className="ml-1 ellipsis-break">
                  Thank you for writing in, we will respond as soon as possible.
                  While you wait, please add any additional information that may
                  help us with your inquiry.
                </p>
              </div>,
              <WorkPill key="TKT-1819" type="ticket" display="TKT-1819" />,
              <p className="text-small" key="update">
                yesterday
              </p>,
            ],
            [
              <WorkPill key="CONV-1318" type="conv" display="CONV-1318" />,
              "CourseHero",
              <div key="members" className="flex items-center">
                <ProfilePicture size="xs" name="AD" color="bg-purple-light" />
                <p className="ml-1">areendavid66</p>
                <p className="ml-2 text-tiny text-gray-400">+2</p>
              </div>,
              <SourcePill key="source" name="email" />,
              <div key="last_msg" className="flex items-center">
                <ProfilePicture size="xs" name="DG" color="bg-green-light" />
                <p className="ml-1 ellipsis-break">
                  Thank you for writing in, we will respond as soon as possible.
                  While you wait, please add any additional information that may
                  help us with your inquiry.
                </p>
              </div>,
              <WorkPill key="TKT-1819" type="ticket" display="TKT-1819" />,
              <p className="text-small" key="update">
                yesterday
              </p>,
            ],
          ]}
        />
      </div>
    </div>
  );
};

export default ConversationDesk;
