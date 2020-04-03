---
path: "/docs/artifact-monitoring/setup-with-circleci"
title: "Artifact Monitoring with CircleCI"
description: "How to setup GitRevue Artifact Monitoring using CircleCI"
---

1. Generate an API token for GitRevue at [https://app.gitrevue.io/settings#/api](https://app.gitrevue.io/settings#/api)
1. Set this at the `GITREVUE_TOKEN` environment variable under Repository Settings > Environment Variables
1. Next you can report artifacts to GitRevue using `npx @gitrevue/cli artifacts <glob>`. glob should be the path to your artifact(s). (e.g: `public/css/*.css` to monitor all css files in the `public/css` directory)

That's it. GitRevue will now keep track of your artifacts and comment on your pull requests so you can easily identify when and where bloat gets added.

Below is a sample CircleCI configuration

```yaml
steps:
  - run:
      name: Node dependencies
      command: npm install

  - run:
      name: Build artifacts
      command: webpack -p

  - run:
      name: Report artifacts to GitRevue
      command: npx @gitrevue/cli artifacts "public/**/*.css"
```
