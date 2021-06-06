import React from "react";
import EventType from "./EventType";
import {
  BranchTagEvent,
  ForkEvent,
  IssueCommentEvent,
  IssuesEvent,
  PullRequestEvent,
  PushEvent,
  RepositoryEvent,
  WatchEvent,
} from "./EventsComponents";

const Event = ({ event }) => {
  const getEvent = (type) => {
    switch (type) {
      case EventType.CREATE:
        return event.payload.ref_type === "repository" ? (
          <RepositoryEvent event={event} />
        ) : (
          <BranchTagEvent event={event} />
        );
      case EventType.DELETE:
        return <BranchTagEvent event={event} />;
      case EventType.FORK:
        return <ForkEvent event={event} />;
      case EventType.PUSH:
        return <PushEvent event={event} />;
      case EventType.PULL_REQUEST:
        return <PullRequestEvent event={event} />;
      case EventType.ISSUE_COMMENT:
        return <IssueCommentEvent event={event} />;
      case EventType.ISSUES:
        return <IssuesEvent event={event} />;
      case EventType.WATCH:
        return <WatchEvent event={event} />;
      default:
        break;
    }
  };

  const getRelativeTime = (date) => {
    var units = {
      day: 24 * 60 * 60 * 1000,
      hour: 60 * 60 * 1000,
      minute: 60 * 1000,
      second: 1000,
    };

    let now = new Date();
    let eventDate = new Date(date);
    let elapsed = eventDate - now;

    var rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

    for (var u in units)
      if (Math.abs(elapsed) > units[u] || u === "second") {
        if (Math.abs(Math.round(elapsed / units[u])) < 30)
          return rtf.format(Math.round(elapsed / units[u]), u);
        else return getEventDate(date);
      }
  };

  const getEventDate = (date) => {
    let d = new Date(date);
    return d.toLocaleString("default", { month: "short" }) + " " + d.getDate();
  };

  return (
    <div className="px-3">
      <div className="py-3 border-b border-gray-200">
        <span className="inline-block max-w-lg leading-10">
          {getEvent(event.type)}{" "}
        </span>
        <span className="float-right align-middle leading-10 text-gray-400">
          {getRelativeTime(event.created_at)}
        </span>
      </div>
    </div>
  );
};

export default Event;
