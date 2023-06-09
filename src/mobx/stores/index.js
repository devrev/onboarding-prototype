import {
  action,
  observable,
  computed,
  runInAction,
  makeObservable,
} from "mobx";
import { enableStaticRendering } from "mobx-react-lite";
import { ConfigStore } from "./config";
import { DataStore } from "./data";

enableStaticRendering(typeof window === "undefined");

export class Store {
  constructor() {
    this.configs = new ConfigStore();
    this.data = new DataStore();

    makeObservable(this, {
      hydrate: action,
      init: action,
    });
  }

  hydrate = () => {
    this.data.hydrate();
  };

  init = () => {
    this.data.hydrate();
  };
}
