import React, { useEffect, useState } from "react";
import WorkPill from "@/libs/molecules/workPill";
import ProfilePicture from "@/libs/atoms/profile";
import Filters from "@/libs/components/Filters";
import { observer } from "mobx-react-lite";
import { useStore } from "@/mobx/providers";
import { DESKS } from "@/constants";

const UpdateRow = ({update}) => {
  return (
    <>
      <div className="flex justify-between overflow-x-scroll cursor-pointer hover:bg-area-hovered px-page-gutter py-2 bg-updates">
        <div className="flex">
          <div className="flex items-center">
            <div className="w-2 h-2 rounded-full bg-blue-medium mr-2"></div>
            <div className="w-max">
              <WorkPill type={update?.type} display={update.display} />
            </div>
          </div>
          <div className="overflow-x-hidden ml-8 grow-1">
            <h3 className="text-gray-500 whitespace-nowrap">{update.title}</h3>
            <div className="flex whitespace-nowrap items-center mt-1">
              <ProfilePicture name={update.owner.name} color="bg-blue-light" />
              <p className="ml-2">
                {update.owner.name} updated {update.display}
              </p>
            </div>
          </div>
        </div>
        <div className="text-small text-gray-600 ml-2">{update.date}</div>
      </div>
      <hr />
    </>
  );
};

const UpdatesDesk = observer(() => {
  const store = useStore();
  const isOpen = store.configs.desks.deskOpen === DESKS.UPDATE_DESK;
  const [updates, setUpdates] = useState([]);

  useEffect(() => {
    setUpdates(store.data.lists.updates);
  }, [store.data.lists.updates]);

  return (
    isOpen && (
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
          {updates.map((update) => (
            <UpdateRow key={update.title} update={update} />
          ))}
        </div>
      </div>
    )
  );
});

export default UpdatesDesk;
