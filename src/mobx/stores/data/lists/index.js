import { observable, autorun, makeObservable, action, computed } from "mobx";
import { issues as supportIssues, conversations as supportConversations, updates as supportUpdates } from "@/data/support";
import {
  parts as sprintParts,
  issues as sprintIssues,
  updates as sprintUpdates
} from "@/data/sprint";
import { tickets as clusteringTickets, updates as clusteringUpdates } from "@/data/clustering";
import { PATHS } from "@/constants";
export class ListStore {
  conversations = [];
  updates = [];
  issues = [];
  tickets = [];
  parts = [];
  updates = [];

  constructor() {
    makeObservable(this, {
      conversations: observable,
      updates: observable,
      issues: observable,
      tickets: observable,
      parts: observable,
      updates: observable,
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
          this.updates = supportUpdates
          break;
        case PATHS.CLUSTERING:
          this.tickets = clusteringTickets;
          this.updates = clusteringUpdates;
          break;
        case PATHS.SPRINT:
          this.issues = sprintIssues;
          this.parts = sprintParts;
          this.updates = sprintUpdates;
          break;
      }
    }
  };
}
