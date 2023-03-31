import React, { useEffect, useState } from "react";
import Head from "next/head";
import SideNav from "@/libs/molecules/SideNav";
import useMobileScreen from "@/hooks/useMobileScreen";
import clsx from "clsx";
import { useStore } from "@/mobx/providers";
import ClusteringDesk from "@/libs/desks/clustering";
import CreateEnhPane from "@/libs/panes/createEnhancement";
import ViewEnhPane from "@/libs/panes/viewEnhancement";
import IssueDesk from "@/libs/desks/issues";
import UpdatesDesk from "@/libs/desks/updates";

import Tour from "@/libs/tours";
import { clusteringTourSteps } from "@/tours/clustering";

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
        {isLoad && <Tour tourSteps={clusteringTourSteps} />}
        <SideNav />
        <div className={clsx(!isMobile && "ml-72")}>
          <ClusteringDesk />
          <IssueDesk />
          <UpdatesDesk />
          <CreateEnhPane />
        </div>
      </main>
    </>
  );
}
