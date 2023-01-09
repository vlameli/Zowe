// GITHUB_EVENT_PATH always exists when run by an Action,
// see https://git.io/JvUf7 for a full list
const eventPayload = require(process.env.GITHUB_EVENT_PATH);
const { Octokit } = require("@octokit/action");

createPrComment();

async function createPrComment() {
  // No need to pass process.env.GITHUB_TOKEN, `@octokit/action`
  // is using it directly and throws an error if it is not present.
  const octokit = new Octokit();

  console.log("Comment created: %d", data.html_url);
}
