import {
  action,
  observable,
  computed,
  runInAction,
  makeObservable,
} from "mobx";
import { enableStaticRendering } from "mobx-react-lite";
import { PANES } from "@/constants";

enableStaticRendering(typeof window === "undefined");

export class PaneStore {
  numberOfPanesOpen = 0;
  isCreateWorkPaneOpen = false;

  constructor() {
    makeObservable(this, {
      numberOfPanesOpen: observable,
      isCreateWorkPaneOpen: observable,
      openCreateWorkPane: action,
      closeCreateWorkPane: action,
    });
  }

  // Do not allow more than 2 panes
  allowPaneOpening = () => {
    return this.numberOfPanesOpen < 2;
  };

  openCreateWorkPane = () => {
    if (!this.isCreateWorkPaneOpen) {
      if (!this.allowPaneOpening()) {
        return;
      }
      this.numberOfPanesOpen = this.numberOfPanesOpen + 1;
    }
    this.isCreateWorkPaneOpen = true;
  };

  closeCreateWorkPane = () => {
    if (this.isCreateWorkPaneOpen) {
      this.numberOfPanesOpen = this.numberOfPanesOpen - 1;
    }
    this.isCreateWorkPaneOpen = false;
  };
}
