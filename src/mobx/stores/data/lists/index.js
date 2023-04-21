import { observable, autorun, makeObservable, action, computed } from "mobx";
import { issues as supportIssues, conversations as supportConversations } from "@/data/support";
import {
  parts as sprintParts,
  issues as sprintIssues,
} from "@/data/sprint";
import { tickets as clusteringTickets } from "@/data/clustering";
import { PATHS } from "@/constants";
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

  appendToParts = ({ item }) => {
    this.parts.push({ item });
  };

  clusterTickets = () => {
    let cluster = {};
    this.tickets.forEach((tkt) => {
      if (!cluster.hasOwnProperty(tkt.cluster)) {
        cluster[tkt.cluster] = [];
      }

      cluster[tkt.cluster].push(tkt);
    });
    return cluster;
  };

  hydrate = () => {
    if (!(typeof window === "undefined")) {
      switch (window.location.pathname) {
        case PATHS.SUPPORT:
          this.issues = supportIssues;
          this.conversations = supportConversations;
          break;
        case PATHS.CLUSTERING:
          this.tickets = clusteringTickets
          break;
        case PATHS.SPRINT:
          this.issues = sprintIssues;
          this.parts = sprintParts;
          break;
      }
    }
  };
}
