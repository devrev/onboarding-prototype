import {
  observable,
  autorun,
  makeObservable,
  action,
  extendObservable,
} from "mobx";
import { conversation } from "@/data/panes";

export class PaneStore {
  conversation = {};

  constructor() {
    makeObservable(this, {
      conversation: observable,
      hydrate: action,
    });
    extendObservable(this.conversation, {
      chat: observable,
      links: observable,
    });
  }

  hydrate = () => {
    this.conversation = conversation;
  };
}
