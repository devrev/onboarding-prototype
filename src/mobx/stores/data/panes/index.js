import {
  observable,
  autorun,
  makeObservable,
  action,
  extendObservable,
} from "mobx";
import { conversation, enhancement } from "@/data/panes";

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
    this.conversation = conversation;
    this.enhancement = enhancement;
  };
}
