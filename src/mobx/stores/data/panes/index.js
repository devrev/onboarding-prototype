import {
  observable,
  autorun,
  makeObservable,
  action,
  extendObservable,
} from "mobx";
import {
  createEnhancement as clusteringCreateEnhancement,
  viewEnhancement as clusteringViewEnhancement
} from "@/data/clustering";
import {
  conversation as supportConversation,
} from "@/data/support";
import {
  viewEnhancement as sprintViewEnhancement,
} from "@/data/sprint";
import { viewEnhancement as trailsViewEnhancement } from "@/data/trails";
import { PATHS } from "@/constants";

export class PaneStore {
  conversation = {};
  createEnhancement = {};
  viewEnhancement = {};

  constructor() {
    makeObservable(this, {
      conversation: observable,
      createEnhancement: observable,
      viewEnhancement: observable,
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
        case PATHS.TICKET_LINK || PATHS.CONVERSATION:
          this.conversation = supportConversation;
          break;
        case PATHS.CONVERSATION:
          this.conversation = supportConversation;
          break;
        case PATHS.SUPPORT:
          this.conversation = supportConversation;
          break;
        case PATHS.CLUSTERING:
          this.createEnhancement = clusteringCreateEnhancement;
          this.viewEnhancement = clusteringViewEnhancement;
          break;
        case PATHS.SPRINT:
          this.viewEnhancement = sprintViewEnhancement;
          break;
        case PATHS.TRAILS:
          this.viewEnhancement = trailsViewEnhancement;
      }
    }
  };
}
