import {
  action,
  observable,
  computed,
  runInAction,
  makeObservable,
} from "mobx";
import { enableStaticRendering } from "mobx-react-lite";

enableStaticRendering(typeof window === "undefined");

export class ActionStore {
  isBulkActionOpen = false;

  constructor() {
    makeObservable(this, {
      isBulkActionOpen: observable,
    });
  }
}
