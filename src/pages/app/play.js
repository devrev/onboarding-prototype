import React from "react";
import Head from "next/head";
import SideNav from "@/libs/components/SideNav";
import styles from "@/styles/Home.module.css";

export default function Playground() {
  return (
    <>
      <Head>
        <title>DevRev</title>
      </Head>
      <main>
        <SideNav />
      </main>
    </>
  );
}
