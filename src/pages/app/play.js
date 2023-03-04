import React from "react";
import Head from "next/head";
import SideNav from "@/libs/components/SideNav";
import UpdatesDesk from "@/libs/desks/updates";
import useMobileScreen from "@/hooks/useMobileScreen";
import clsx from "clsx";

export default function Playground() {
  const isMobile = useMobileScreen();
  return (
    <>
      <Head>
        <title>DevRev</title>
      </Head>
      <main>
        <SideNav />
        <div className={clsx(!isMobile && "ml-72")}>
          <UpdatesDesk />
        </div>
      </main>
    </>
  );
}
