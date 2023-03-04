import React from "react";
import WorkPill from "@/libs/atoms/workPill";
import ProfilePicture from "@/libs/atoms/profile";
import Filters from "@/libs/components/Filters";

const UpdateRow = () => {
  return (
    <>
      <div className="flex justify-between overflow-x-scroll cursor-pointer hover:bg-area-hovered px-page-gutter py-2">
        <div className="flex">
          <div className="w-max">
            <WorkPill type="issue" display="ISS-1997" />
          </div>
          <div className="overflow-x-hidden ml-8 grow-1">
            <h3 className="text-gray-500 whitespace-nowrap">
              MFZ Inline seeding should not parse RevOID from RevUser DON
            </h3>
            <div className="flex whitespace-nowrap items-center mt-1">
              <ProfilePicture name="MS" color="bg-blue-light" />
              <p className="ml-2">Manan Sharma updated ISS-1997</p>
            </div>
          </div>
        </div>
        <div className="text-small text-gray-600 ml-2">Yesterday</div>
      </div>
      <hr />
    </>
  );
};

const UpdatesDesk = () => {
  return (
    <div>
      <div className="py-5 px-page-gutter">
        <h2>Updates</h2>
      </div>
      <div className="px-page-gutter">
        <Filters
          filters={[
            { name: "Status", value: "Unread" },
            { name: "Date", value: "Yesterday" },
          ]}
          sort={[{ name: "Sort" }, { name: "Customize" }]}
        />
      </div>
      <div className="mt-5">
        <UpdateRow />
        <UpdateRow />
        <UpdateRow />
      </div>
    </div>
  );
};

export default UpdatesDesk;
