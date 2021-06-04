const EventType = Object.freeze({
  CREATE: "CreateEvent",
  DELETE: "DeleteEvent",
  FORK: "ForkEvent",
  PUSH: "PushEvent",
  PULL_REQUEST: "PullRequestEvent",
  ISSUE_COMMENT: "IssueCommentEvent",
  ISSUES: "IssuesEvent",
  WATCH: "WatchEvent",
});
export default EventType;
