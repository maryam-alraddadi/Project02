import EventType from "./EventType";

import { ReactComponent as PushIcon } from "../icons/push-icon.svg";
import { ReactComponent as BranchIcon } from "../icons/branch-icon.svg";
import { ReactComponent as DeleteIcon } from "../icons/delete-icon.svg";
import { ReactComponent as ForkIcon } from "../icons/fork-icon.svg";
import { ReactComponent as CommentIcon } from "../icons/comment-icon.svg";
import { ReactComponent as FolderIcon } from "../icons/folder-icon.svg";
import { ReactComponent as PullRequestIcon } from "../icons/pull-request-icon.svg";
import { ReactComponent as StarIcon } from "../icons/star-icon.svg";
import { ReactComponent as IssueIcon } from "../icons/issue-icon.svg";

const getBranchName = (branchRef) => {
  return branchRef.replace("refs/heads/", "");
};

const getAction = (action) => {
  return action.charAt(0).toUpperCase() + action.slice(1);
};

export const BranchTagEvent = ({ event }) => {
  const branch = getBranchName(event.payload.ref);
  const repoUrl = `https://github.com/${event.repo.name}`;
  return (
    <span>
      {event.type === EventType.CREATE ? (
        <BranchIcon className="inline mr-3 pb-1 text-orange-500 h-5 w-5" />
      ) : (
        <DeleteIcon className="inline -ml-1 mr-3 pb-1 text-red-500 h-6 w-6" />
      )}
      {event.type === EventType.CREATE ? "Created" : "Deleted"} a{" "}
      {event.payload.ref_type}{" "}
      <a href={`${repoUrl}/tree/${branch}`} target="_blank" rel="noreferrer">
        {branch}
      </a>{" "}
      in{" "}
      <a href={repoUrl} target="_blank" rel="noreferrer">
        {event.repo.name}
      </a>
    </span>
  );
};

export const RepositoryEvent = ({ event }) => {
  return (
    <span>
      <FolderIcon className="inline mr-2 pr-1 pb-1 text-steel-500 h-6 w-6" />
      Created a repository{" "}
      <a
        href={`https://github.com/${event.repo.name}`}
        target="_blank"
        rel="noreferrer"
      >
        {event.repo.name}
      </a>
    </span>
  );
};

export const PushEvent = ({ event }) => {
  const branch = getBranchName(event.payload.ref);
  return (
    <span>
      <PushIcon className="inline mr-3 pb-1 text-green-500 h-5 w-5" />
      Pushed {event.payload.size}{" "}
      {event.payload.size > 1 ? "commits" : "commit"} to{" "}
      <a
        href={`https://github.com/${event.repo.name}/tree/${branch}`}
        target="_blank"
        rel="noreferrer"
      >
        {branch}
      </a>{" "}
      in{" "}
      <a
        href={`https://github.com/${event.repo.name}`}
        target="_blank"
        rel="noreferrer"
      >
        {event.repo.name}
      </a>
    </span>
  );
};

export const ForkEvent = ({ event }) => {
  return (
    <span>
      <ForkIcon className="inline mr-3 pb-1 text-violet-500 h-5 w-5" />
      Forked{" "}
      <a
        href={`https://github.com/${event.repo.name}`}
        target="_blank"
        rel="noreferrer"
      >
        {event.repo.name}
      </a>
      {" to "}
      <a href={event.payload.forkee.html_url} target="_blank" rel="noreferrer">
        {event.payload.forkee.full_name}
      </a>
    </span>
  );
};

export const PullRequestEvent = ({ event }) => {
  return (
    <span>
      {" "}
      <PullRequestIcon
        className={`inline mr-3 pb-1 ${
          event.payload.action === "opened" ? "text-teal-700" : "text-red-500"
        } h-5 w-5`}
      />
      {getAction(event.payload.action)} a{" "}
      <a
        href={event.payload.pull_request.html_url}
        target="_blank"
        rel="noreferrer"
      >
        pull request
      </a>
      {" in "}
      <a
        href={`https://github.com/${event.repo.name}`}
        target="_blank"
        rel="noreferrer"
      >
        {event.repo.name}
      </a>
    </span>
  );
};

export const IssueCommentEvent = ({ event }) => {
  return (
    <span>
      <CommentIcon className="inline -ml-1 mr-3 pb-1 text-mauve-500 h-6 w-6" />
      {getAction(event.payload.action) + " a "}
      <a href={event.payload.comment.html_url} target="_blank" rel="noreferrer">
        comment
      </a>{" "}
      on
      <a href={event.payload.issue.html_url} target="_blank" rel="noreferrer">
        {event.payload.issue.html_url.includes("issues")
          ? " an issue"
          : " a pull request"}
      </a>
    </span>
  );
};

export const IssuesEvent = ({ event }) => {
  return (
    <span>
      <IssueIcon className="inline ml-0 mr-3 text-pink-700 h-5 w-5" />
      {getAction(event.payload.action) + " an "}
      <a href={event.payload.issue.html_url} target="_blank" rel="noreferrer">
        issue
      </a>{" "}
      in
      <a
        href={`https://github.com/${event.repo.name}`}
        target="_blank"
        rel="noreferrer"
      >
        {event.repo.name}
      </a>
    </span>
  );
};

export const WatchEvent = ({ event }) => {
  return (
    <span>
      <StarIcon className="inline -ml-1 mr-2 pb-1 text-yellow-400 h-7 w-7" />
      Starred a repo{" "}
      <a
        href={`https://github.com/${event.repo.name}`}
        target="_blank"
        rel="noreferrer"
      >
        {event.repo.name}
      </a>
    </span>
  );
};
