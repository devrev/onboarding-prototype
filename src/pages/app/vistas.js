import React, { useEffect, useState } from "react";
import Head from "next/head";
import SideNav from "@/libs/molecules/SideNav";
import useMobileScreen from "@/hooks/useMobileScreen";
import clsx from "clsx";
import ActiveTicketTrackerDesk from "@/libs/desks/activeTicketTracker";
import ProductAssistTrackerDesk from "@/libs/desks/productAssistTracker";
import TeamActivityDesk from "@/libs/desks/teamActivity";
import IssueDesk from "@/libs/desks/issues";
import UpdatesDesk from "@/libs/desks/updates";

import Tour from "@/libs/tours";
import { vistaTourSteps } from "@/tours/vistas";

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
        {isLoad && <Tour tourSteps={vistaTourSteps} />}
        <SideNav />
        <div className={clsx(!isMobile && "ml-72")}>
          <ActiveTicketTrackerDesk />
          <ProductAssistTrackerDesk />
          <TeamActivityDesk />
          <IssueDesk section="Support" />
          <UpdatesDesk />
        </div>
      </main>
    </>
  );
}
