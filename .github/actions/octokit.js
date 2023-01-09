// .github/actions/octokit.js
const { Octokit } = require("@octokit/action");

const octokit = new Octokit();

// `octokit` is now authenticated using GITHUB_TOKEN
