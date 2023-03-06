import React, { useEffect, useState } from "react";
import Head from "next/head";
import SideNav from "@/libs/molecules/SideNav";
import useMobileScreen from "@/hooks/useMobileScreen";
import clsx from "clsx";
import IssueDesk from "@/libs/desks/issues";
import CreateTicketPane from "@/libs/panes/createTicket";
import ConversationDesk from "@/libs/desks/conversations";
import { useStore } from "@/mobx/providers";
import ConversationPane from "@/libs/panes/conversation";
import Tour from "@/libs/tours";

const typeWriter = (elem, text, index, speed) => {
  if (index < text.length) {
    elem.innerHTML += text.charAt(index);
    index++;
    setTimeout(() => {
      typeWriter(elem, text, index, speed);
    }, speed);
  }
};

export default function Playground() {
  const isMobile = useMobileScreen();
  const store = useStore();
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    setIsLoad(true);
  }, []);
  return (
    <>
      <Head>
        <title>DevRev</title>
      </Head>
      <main>
        <button onClick={() => store.configs.panes.createTicketPane.open()}>
          1
        </button>
        <button onClick={() => store.configs.panes.conversationPane.open()}>
          2
        </button>
        {/* {isLoad && <Tour />} */}
        <SideNav />
        <div className={clsx(!isMobile && "ml-72")}>
          <IssueDesk />
          {/* <ConversationDesk /> */}
          <CreateTicketPane />
          <ConversationPane />
        </div>
      </main>
    </>
  );
}
