import React from "react";
import ProfilePicture from "@/libs/atoms/profile";
import RevUserProfile from "@/libs/molecules/revUserProfile";

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

const Chat = () => {
  return (
    <div className="overflow-x-scroll max-h-[24rem]">
      <ChatItemDev name="Manan Sharma" text="Text-1" />
      <ChatItemRev name="Manan Sharma" text="Text-1" revOrg="Routing" />
      <ChatItemRev name="Manan Sharma" text="Text-1" revOrg="Routing" />

      <ChatItemRev
        name="Manan Sharma"
        text="If you need to use a one-off border-color value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value."
        revOrg="Routing"
      />

      <ChatItemRev name="Manan Sharma" text="Text-1" revOrg="Routing" />
      <ChatItemRev name="Manan Sharma" text="Text-1" revOrg="Routing" />

      <ChatItemRev name="Manan Sharma" text="Text-1" revOrg="Routing" />

      <ChatItemRev name="Manan Sharma" text="Text-1" revOrg="Routing" />

      <ChatItemRev name="Manan Sharma" text="Text-1" revOrg="Routing" />
    </div>
  );
};

export default Chat;
