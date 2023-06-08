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
  isSaveActionOpen = false;
  isFilterSaved = false;

  constructor() {
    makeObservable(this, {
      isBulkActionOpen: observable,
      isSaveActionOpen: observable,
      isFilterSaved: observable,
      openSaveAction: action,
      closeSaveAction: action,
      saveFilter: action,
    });
  }

  openSaveAction = () => {
    this.isSaveActionOpen = true;
  };

  closeSaveAction = () => {
    this.isSaveActionOpen = false;
  };

  saveFilter = () => {
    this.isFilterSaved = true;
  };
}
