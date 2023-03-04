import React from "react";
import Head from "next/head";
import SideNav from "@/libs/components/SideNav";
import useMobileScreen from "@/hooks/useMobileScreen";
import clsx from "clsx";
import IssueDesk from "@/libs/desks/issues";
import ConversationDesk from "@/libs/desks/conversations";

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
          <IssueDesk />
        </div>
      </main>
    </>
  );
}
