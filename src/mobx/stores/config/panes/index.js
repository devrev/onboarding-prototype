import {
  action,
  observable,
  computed,
  runInAction,
  makeObservable,
} from "mobx";
import { enableStaticRendering } from "mobx-react-lite";
import { ConversationPaneStore } from "./conversation";
import { CreateEnhancementPane } from "./createEnhancement";
import { CreateTicketPaneStore } from "./createTicket";
import { ViewEnhancementPane } from "./viewEnhancement";

enableStaticRendering(typeof window === "undefined");

export class PaneStore {
  numberOfPanesOpen = 0;

  constructor() {
    this.conversationPane = new ConversationPaneStore(this);
    this.createTicketPane = new CreateTicketPaneStore(this);
    this.createEnhancementPane = new CreateEnhancementPane(this);
    this.viewEnhancementPane = new ViewEnhancementPane(this)

    makeObservable(this, {
      numberOfPanesOpen: observable,
    });
  }
}
