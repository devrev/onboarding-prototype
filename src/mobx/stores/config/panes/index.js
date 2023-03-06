import {
  action,
  observable,
  computed,
  runInAction,
  makeObservable,
} from "mobx";
import { enableStaticRendering } from "mobx-react-lite";
import { ConversationPaneStore } from "./conversation";
import { CreateTicketPaneStore } from "./createTicket";

enableStaticRendering(typeof window === "undefined");

export class PaneStore {
  numberOfPanesOpen = 0;

  constructor() {
    this.conversationPane = new ConversationPaneStore(this);
    this.createTicketPane = new CreateTicketPaneStore(this);

    makeObservable(this, {
      numberOfPanesOpen: observable,
    });
  }
}
