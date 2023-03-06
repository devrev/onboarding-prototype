import {
  action,
  observable,
  computed,
  runInAction,
  makeObservable,
} from "mobx";
import { enableStaticRendering } from "mobx-react-lite";
import { ConfigStore } from "./config";
import { ListStore } from "./data/lists";

enableStaticRendering(typeof window === "undefined");

export class Store {
  constructor() {
    this.configs = new ConfigStore();
    this.lists = new ListStore();

    makeObservable(this, {
      hydrate: action,
      init: action,
    });
  }

  hydrate = () => {
    this.lists.hydrate();
  };

  init = () => {
    this.lists.hydrate();
  };
}
