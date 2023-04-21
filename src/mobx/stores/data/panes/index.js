import {
  observable,
  autorun,
  makeObservable,
  action,
  extendObservable,
} from "mobx";
import {
  enhancement as clusteringEnhancement,
} from "@/data/clustering";
import {
  conversation as supportConversation,
} from "@/data/support";
import { PATHS } from "@/constants";

export class PaneStore {
  conversation = {};
  enhancement = {};

  constructor() {
    makeObservable(this, {
      conversation: observable,
      enhancement: observable,
      hydrate: action,
    });
    extendObservable(this.conversation, {
      chat: observable,
      links: observable,
    });
  }

  hydrate = () => {
    if (!(typeof window === "undefined")) {
      switch (window.location.pathname) {
        case PATHS.SUPPORT:
          this.conversation = supportConversation
          break;
        case PATHS.CLUSTERING: 
          this.enhancement = clusteringEnhancement;
          break;
      }
    }
  };
}
