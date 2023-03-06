import React, { useEffect } from "react";
import Head from "next/head";
import SideNav from "@/libs/molecules/SideNav";
import useMobileScreen from "@/hooks/useMobileScreen";
import clsx from "clsx";
import IssueDesk from "@/libs/desks/issues";
import CreateTicketPane from "@/libs/panes/createTicket";
import ConversationDesk from "@/libs/desks/conversations";
import { useStore } from "@/mobx/providers";
import ConversationPane from "@/libs/panes/conversation";

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
  useEffect(() => {
    console.log("effect called");
    setTimeout(() => {
      store.showTicket = true;
    }, 3000);

    let word = "This is a sample title shown in a text format.";
    setTimeout(() => {
      const elem = document.getElementById("createTicketPane__title");
      if (elem) {
        console.log("calling type");
        elem.innerHTML = "";
        typeWriter(elem, word, 0, 30);
      }
    }, 6000);

    let word2 =
      "This is a long description of the body, Monday Tuesday Wednesday Thursday Friday Saturday Sunday";
    setTimeout(() => {
      const elem = document.getElementById("createTicketPane__description");
      if (elem) {
        console.log("calling type");
        elem.innerHTML = "";
        typeWriter(elem, word2, 0, 30);
      }
    }, 8000);
  }, []);
  return (
    <>
      <Head>
        <title>DevRev</title>
      </Head>
      <main>
        <SideNav />
        <div className={clsx(!isMobile && "ml-72")}>
          <IssueDesk />
          {/* <ConversationDesk /> */}
          {/* <CreateTicketPane /> */}
          <ConversationPane />
        </div>
      </main>
    </>
  );
}
