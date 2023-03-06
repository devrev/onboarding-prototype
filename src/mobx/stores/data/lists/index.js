import { observable, autorun, makeObservable, action } from "mobx";
import { conversations, issues } from "@/data/lists";

export class ListStore {
  conversations = observable.array([], { deep: false });
  updates = observable.array([], { deep: false });
  issues = observable.array([], { deep: false });

  constructor() {
    makeObservable(this, {
      hydrate: action,
    });
  }

  appendToConversations = ({ item }) => {
    this.conversations.push({ item });
  };

  appendToUpdates = ({ item }) => {
    this.updates.push({ item });
  };

  appendToIssues = ({ item }) => {
    this.issues.push({ item });
  };

  hydrate = () => {
    this.conversations = conversations;
    this.issues = issues;
  };
}
