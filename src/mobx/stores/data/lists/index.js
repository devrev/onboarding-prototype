import { observable, autorun, makeObservable, action, computed } from "mobx";
import { conversations, issues, tickets } from "@/data/lists";
import { parts, issues as sprintIssues } from "@/data/sprint/lists";

export class ListStore {
  conversations = [];
  updates = [];
  issues = [];
  tickets = [];
  parts = [];

  constructor() {
    makeObservable(this, {
      conversations: observable,
      updates: observable,
      issues: observable,
      tickets: observable,
      parts: observable,
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

  appendToParts = ({item}) => {
  this.parts.push({item})
  }

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
    this.issues = sprintIssues;
    this.tickets = tickets;
    this.parts = parts;
  };
}
