import React from "react";
import Table from "@/libs/molecules/Table";
import convertToIssueTableRow from "@/converters/convertToIssueTableRow";
import ProfilePicture from "@/libs/atoms/profile";
import { observer } from "mobx-react-lite";

const TeamActivityIssueDesk = observer(({issues, users}) => {
  const sortedUsers = users.sort((a, b) => b.tickets - a.tickets);
  return (
    <div className="flex items-start border-t border-default">
      <ul className="flex border-r border-default flex-col w-60 shrink-0 overflow-x-hidden overflow-y-auto space-y-1 p-2">
        {sortedUsers.map(({color, name, tickets}, i) => <li className="flex items-center justify-between w-full hover:bg-menu-hovered cursor-pointer py-2 px-3 rounded-lg" key={i}>
          <div className="flex items-center gap-1">
            <ProfilePicture
              size="xxs"
              name={name}
              color={color}
            />
            <span className="text-small truncate self-center">{name}</span>
          </div>
          <span className="flex justify-center items-center border border-default bg-pill hover:bg-pill-hovered rounded-full focus:outline-none min-w-0 inline-flex text-small py-3px pl-2 pr-2 space-x-1.5 flex-shrink-0">{tickets}</span>
        </li>)}
      </ul>
      <ul className="flex flex-col grow overflow-x-hidden overflow-y-auto">
        {sortedUsers.map(({color, name}, i) => <li className="flex flex-col pt-6 flex-grow min-h-0" key={i}>
          <div className="flex items-center group mb-2 px-12">
            <div className="flex items-center gap-1.5 py-1.5 px-3 bg-pill rounded-full">
              <ProfilePicture
                size="xxs"
                name={name}
                color={color}
              />
              <span className="text-small truncate self-center">{name}</span>
            </div>
          </div>
          <Table
            headers={["Items", "Title", "Owner", "Stage", "Tags", "Priority"]}
            data={issues.map((issue) =>
              convertToIssueTableRow(issue)
            )}
            secondColWidth="min-w-[30rem] max-w-[30rem]"
          />
        </li>)}
      </ul>
    </div>
  );
});

export default TeamActivityIssueDesk;
