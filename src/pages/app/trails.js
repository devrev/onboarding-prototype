import React, { useEffect, useState } from "react";
import Head from "next/head";
import SideNav from "@/libs/molecules/SideNav";
import useMobileScreen from "@/hooks/useMobileScreen";
import clsx from "clsx";
import Tour from "@/libs/tours";
import UpdatesDesk from "@/libs/desks/updates";
import TrailsDesk from "@/libs/desks/trails";
import ViewEnhPane from "@/libs/panes/viewEnhancement";
import { trailsTourSteps } from "@/tours/trails";

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
        {isLoad && <Tour tourSteps={trailsTourSteps} />}
        <SideNav />
        <div className={clsx(!isMobile && "ml-72")}>
          <TrailsDesk />
          <UpdatesDesk />
          <ViewEnhPane />
        </div>
      </main>
    </>
  );
}
