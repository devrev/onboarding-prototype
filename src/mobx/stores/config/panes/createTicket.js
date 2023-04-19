import {
  action,
  observable,
  computed,
  runInAction,
  makeObservable,
} from "mobx";
import { enableStaticRendering } from "mobx-react-lite";
import { POSITION } from "@/constants";
import { WORK_PANES } from "@/constants";

enableStaticRendering(typeof window === "undefined");

export class CreateTicketPaneStore {
  isOpen = false;
  position = POSITION.RIGHT;
  type = WORK_PANES.TICKET;

  constructor(root) {
    this.root = root;

    makeObservable(this, {
      isOpen: observable,
      position: observable,
      type: observable,
      open: action,
      close: action,
      setTicketType: action,
      setIssueType: action,
      numberOfPanesOpen: action,
    });
  }

  numberOfPanesOpen = () => {
    return this.root.numberOfPanesOpen;
  };

  changeNumberOfPanesOpen = (inc) => {
    return (this.root.numberOfPanesOpen += inc);
  };

  setTicketType = () => {
    this.type = WORK_PANES.TICKET;
  };

  setIssueType = () => {
    this.type = WORK_PANES.ISSUE;
  };

  open = () => {
    if (!this.isOpen) {
      const panesOpen = this.numberOfPanesOpen();
      if (panesOpen > 1) return;
      else if (panesOpen == 1) this.position = POSITION.MIDDLE;

      this.changeNumberOfPanesOpen(1);
    }

    this.isOpen = true;
  };

  close = () => {
    if (this.isOpen) {
      this.changeNumberOfPanesOpen(-1);
    }
    this.isOpen = false;
  };
}
