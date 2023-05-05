import React, { useEffect, useState } from "react";
import Head from "next/head";
import SideNav from "@/libs/molecules/SideNav";
import useMobileScreen from "@/hooks/useMobileScreen";
import clsx from "clsx";
import IssueDesk from "@/libs/desks/issues";
import CreateTicketPane from "@/libs/panes/createTicket";
import ConversationDesk from "@/libs/desks/conversations";
import ConversationPane from "@/libs/panes/conversation";
import Tour from "@/libs/tours";
import UpdatesDesk from "@/libs/desks/updates";
import { ticketLinkTourSteps } from "@/tours/ticket-link";

export default function Playground() {
  const isMobile = useMobileScreen();
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
        {isLoad && <Tour tourSteps={ticketLinkTourSteps} />}
        <SideNav />
        <div className={clsx(!isMobile && "ml-72")}>
          <IssueDesk />
          <UpdatesDesk />
          <ConversationDesk />
          <CreateTicketPane />
          <ConversationPane />
        </div>
      </main>
    </>
  );
}
