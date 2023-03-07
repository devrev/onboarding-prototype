import { observable, autorun, makeObservable, action } from "mobx";
import { conversations, issues } from "@/data/lists";

export class ListStore {
  conversations = [];
  updates = [];
  issues = [];

  constructor() {
    makeObservable(this, {
      conversations: observable,
      updates: observable,
      issues: observable,
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
