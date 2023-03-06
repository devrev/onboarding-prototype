import {
  action,
  observable,
  computed,
  runInAction,
  makeObservable,
} from "mobx";
import { enableStaticRendering } from "mobx-react-lite";
import { DESKS } from "@/constants";

enableStaticRendering(typeof window === "undefined");

export class DeskStore {
  deskOpen = DESKS.UPDATE_DESK;

  constructor() {
    makeObservable(this, {
      deskOpen: observable,
      openConversationDesk: action,
      openIssueDesk: action,
      openUpdateDesk: action,
    });
  }

  openConversationDesk = () => {
    this.deskOpen = DESKS.CONVERSATION_DESK;
  };

  openIssueDesk = () => {
    this.deskOpen = DESKS.ISSUE_DESK;
  };

  openUpdateDesk = () => {
    this.deskOpen = DESKS.UPDATE_DESK;
  };
}
