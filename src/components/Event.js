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

  // TODO: get relative date
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
          {getEventDate(event.created_at)}
        </span>
      </div>
    </div>
  );
};

export default Event;
