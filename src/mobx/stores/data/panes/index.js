import { observable, autorun, makeObservable, action } from "mobx";
import { conversation } from "@/data/panes";

export class PaneStore {
  conversation = observable.object({
    revUser: {
      revOrg: "",
      name: "",
    },
    revOrg: "",
    title: "",
    filters: [
      {
        name: "",
        value: "",
      },
    ],
    links: {
      tickets: [],
    },
    chat: [],
  });

  constructor() {
    makeObservable(this, {
      hydrate: action,
    });
  }

  hydrate = () => {
    this.conversation = conversation;
  };
}
