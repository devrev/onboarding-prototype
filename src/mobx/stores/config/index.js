import { enableStaticRendering } from "mobx-react-lite";
import { DeskStore } from "./desks";
import { PaneStore } from "./panes";

enableStaticRendering(typeof window === "undefined");

export class ConfigStore {
  constructor() {
    this.desks = new DeskStore(this);
    this.panes = new PaneStore(this);
  }
}
