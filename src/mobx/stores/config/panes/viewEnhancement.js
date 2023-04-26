import {
  action,
  observable,
  computed,
  runInAction,
  makeObservable,
} from "mobx";
import { enableStaticRendering } from "mobx-react-lite";
import { POSITION } from "@/constants";

enableStaticRendering(typeof window === "undefined");

export class ViewEnhancementPane {
  isOpen = false;
  position = POSITION.RIGHT;

  constructor(root) {
    this.root = root;

    makeObservable(this, {
      isOpen: observable,
      position: observable,
      open: action,
      close: action,
      numberOfPanesOpen: action,
    });
  }

  numberOfPanesOpen = () => {
    return this.root.numberOfPanesOpen;
  };

  changeNumberOfPanesOpen = (inc) => {
    return (this.root.numberOfPanesOpen += inc);
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
