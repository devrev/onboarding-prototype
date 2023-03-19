import React, { useEffect, useState } from "react";
import Head from "next/head";
import SideNav from "@/libs/molecules/SideNav";
import useMobileScreen from "@/hooks/useMobileScreen";
import clsx from "clsx";
import { useStore } from "@/mobx/providers";
import NNLDesk from "@/libs/desks/nnl";

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
        <SideNav />
        <div className={clsx(!isMobile && "ml-72")}>
          <NNLDesk />
        </div>
      </main>
    </>
  );
}
