---
path: "/docs/artifact-monitoring"
title: "Monitor your Artifacts"
description: "Monitor the size of your artifacts and avoid bloat using GitRevue"
---

Improving your site's performance and trimming down your artifacts can be a time consuming process, one that can easily be undone when installing new dependencies, plugins and libraries.

GitRevue remedies this problem by monitoring your artifacts across pull requests, warning you when bloat is added and praising when artifacts are streamlined.

### Let's Get Started

Firstly you should already have GitRevue setup on your repository. If you don't already have GitRevue setup, you can follow our [Getting Started Tutorial](/docs/getting-started), then join us back here.

 To monitor your artifacts GitRevue runs as part of your continuous integration process. We have a handy CLI tool to make this as seamless as possible. 
 
1. Generate an API token for GitRevue at [https://app.gitrevue.io/settings#/api](https://app.gitrevue.io/settings#/api)
1. Set this as the `GITREVUE_TOKEN` environment variable in your continuous integration environment. Keep this value secret as it will allow anyone to access your GitRevue account
1. Next you can report artifacts to GitRevue using `npx @gitrevue/cli artifacts <glob>`. glob should be the path to your artifact(s). (e.g: `public/css/*.css` to monitor all css files in the `public/css` directory)

That's it. GitRevue will now keep track of your artifacts and comment on your pull requests so you can easily identify when and where bloat gets added.
