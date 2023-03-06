import {
  action,
  observable,
  computed,
  runInAction,
  makeObservable,
} from "mobx";
import { enableStaticRendering } from "mobx-react-lite";
import { ListStore } from "./lists";
import { PaneStore } from "./panes";

enableStaticRendering(typeof window === "undefined");

export class DataStore {
  constructor() {
    this.lists = new ListStore();
    this.panes = new PaneStore();

    makeObservable(this, {
      hydrate: action,
    });
  }

  hydrate = () => {
    this.lists.hydrate();
    this.panes.hydrate();
  };
}
