import React from "react";
import ProfilePicture from "@/libs/atoms/profile";
import RevUserProfile from "@/libs/molecules/revUserProfile";
import { observer } from "mobx-react-lite";
import clsx from "clsx";

const ChatItemDev = ({ name, text }) => {
  return (
    <div className="flex mt-5">
      <div>
        <ProfilePicture name={name} size="md" />
      </div>
      <div className="ml-2">
        <p className="font-medium text-color-highlight text-default">{name}</p>
        <p className="text-default font-normal">{text}</p>
      </div>
    </div>
  );
};

const ChatItemRev = ({ name, revOrg, text }) => {
  return (
    <div className="flex mt-5">
      <div>
        <RevUserProfile name={name} size="md" revOrg={revOrg} />
      </div>
      <div className="ml-2">
        <p className="font-medium text-color-highlight text-default">{name}</p>
        <p className="text-default font-normal">{text}</p>
      </div>
    </div>
  );
};

const Chat = observer(({ chat, className, ...props }) => {
  return (
    <div
      id="chatBox__messages"
      className={clsx("overflow-y-auto min-h-0", className)}
      {...props}
    >
      {chat &&
        chat.length &&
        chat.map((chat) => {
          return chat.type === "rev" ? (
            <ChatItemRev
              name={chat.name}
              text={chat.text}
              revOrg={chat.revOrg}
              key={chat.text}
            />
          ) : (
            <ChatItemDev key={chat.text} name={chat.name} text={chat.text} />
          );
        })}
    </div>
  );
});

export default Chat;
