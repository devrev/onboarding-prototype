import { observable, autorun, makeObservable, action, computed } from "mobx";
import { conversations, issues, tickets } from "@/data/lists";

export class ListStore {
  conversations = [];
  updates = [];
  issues = [];
  tickets = [];

  constructor() {
    makeObservable(this, {
      conversations: observable,
      updates: observable,
      issues: observable,
      tickets: observable,
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

  clusterTickets = () => {
    let cluster = {};
    tickets.forEach((tkt) => {
      if (!cluster.hasOwnProperty(tkt.cluster)) {
        cluster[tkt.cluster] = [];
      }

      cluster[tkt.cluster].push(tkt);
    });
    return cluster;
  };

  hydrate = () => {
    this.conversations = conversations;
    this.issues = issues;
    this.tickets = tickets;
  };
}
