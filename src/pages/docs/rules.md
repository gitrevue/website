---
path: "/docs/rules"
title: "Review Rules"
---

#### Max Modifications

Max Modifications allows you to manage the size of pull requests, encouraging authors to make small, understandable and reviewable changes.

| Key | Type | Description |
|-----|------|-------------|
| `maximum_modifications` | Integer | The maximum number of additions and deletions allowed in a single pull request |

#### Require Assignee

Require assignee encourages authors to assign all relevant contributors to a pull request so your team is aware of who is responsible for maintaining the changes.

| Key | Type | Description |
|-----|------|-------------|
| `require_assignee` | Boolean | Set to `true` to require an assignee on a pull request |

#### Require File Modified

Require file modified ensures specific files are kept up to date with every pull request. This is especially handy for keeping your changelog and other such files up-to-date.

| Key | Type | Description |
|-----|------|-------------|
| `require_file_modified` | Array | An array of file paths or globs which must match a file modified in the pull request. *Note*: Paths are relative to your repository root |

```yaml
require_file_modified:
    - CHANGELOG.md
    - docs/**/*.md
```

#### Rule File Not Modified

Require file not modified ensures specific files are not changed. This is good for ensuring developers are not editing old documentation, sensitive files, or commiting dependencies to the repository.

| Key | Type | Description |
|-----|------|-------------|
| `require_file_not_modified` | Array | An array of file paths or globs which must not match a file modified in the pull request. *Note*: Paths are relative to your repository root |

```yaml
require_file_not_modified:
    - legacy-docs/**/*.md
    - node_modules
```

#### Paired Files

Paired files allows you to keep multiple files in sync with each other. This is useful for ensuring contributors keep dependency lock files up-to-date when they modify your projects dependencies, something which is easily overlooked.

| Key | Type | Description |
|-----|------|-------------|
| `paired_files` | Map | A map defining files and their pairs which require modifications |

```yaml
paired_files:
    package.json:
      - package-lock.json

    composer.json:
      - composer.lock
```
