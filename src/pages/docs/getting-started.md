---
path: "/docs/getting-started"
title: "Getting Started"
description: "A short guide on setting up GitRevue with your GitHub repositories"
---

A short guide on setting up GitRevue with your GitHub repositories. If you already have GitRevue set up you may find the [Configuration Reference](/docs/rules) more useful.

### Prerequisites

Before getting started with GitRevue, make sure you have the following:

- A [GitHub](https://github.com) account
- Permission to install a GitHub App for a repository hosted on GitHub

### Let's Get Started

1. Go to [https://github.com/apps/gitrevue](https://github.com/apps/gitrevue) and install the GitRevue App.
2. Select the GitHub organisation and repositories you want to use with GitRevue.
3. Click the green *Install* button
4. Add a `.gitrevue.yaml` file to your repository. The sample below tells GitRevue to fail the review if the PR exceeds 1,000 additions/deletions.

```yaml
maximum_modifications: 1000
```

5. Commit the `.gitrevue.yaml` configuration, push and open a pull request.
6. View the Checks tab on your pull request to see if your review passed or failed.

### Further Reading

- [Configuration Reference](/docs/rules)
- [Artifact Monitoring](/docs/artifact-monitoring)
