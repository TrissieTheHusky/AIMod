# Contributing to AIMod
Thank you for your interest in contributing! This guide lays out everything you need to know about contributing to AIMod!

## Table of Contents
* [Ideas](https://github.com/xerexDev/AIMod/blob/master/CONTRIBUTING.md#ideas)
* [Reporting Bugs](https://github.com/xerexDev/AIMod/blob/master/CONTRIBUTING.md#reporting-bugs)
* [Writing Code](https://github.com/xerexDev/AIMod/blob/master/CONTRIBUTING.md#writing-code)
  * [Instructions](https://github.com/xerexDev/AIMod/blob/master/CONTRIBUTING.md#instructions)
  * [Branching & Canary](https://github.com/xerexDev/AIMod/blob/master/CONTRIBUTING.md#branchingflow)
  * [Commit Style](https://github.com/xerexDev/AIMod/blob/master/CONTRIBUTING.md#commit-style)
  * [Types](https://github.com/xerexDev/AIMod/blob/master/CONTRIBUTING.md#types)
  * [Pull Request Info and Guidelines](https://github.com/xerexDev/AIMod/blob/master/CONTRIBUTING.md#pull-request-info-and-guidelines)
  * [Additional Rules, Guidelines, and Notes for Code Contributors](https://github.com/xerexDev/AIMod/blob/master/CONTRIBUTING.md#additional-rules-guidelines-and-notes-for-code-contributors)
* [Thank You!](https://github.com/xerexDev/AIMod/blob/master/CONTRIBUTING.md#thank-you)

## Ideas
Have a great idea for a new feature for the bot, but don't know how to code? Feel free to [open an issue](https://github.com/xerexDev/AIMod/issues/new) and describe your idea. The community will discuss it and add it to the bot if we decide like it. However, if you know what you are doing, feel free to open a Pull Request and demonstrate how you think the code should work! (Read below for more info!)

## Reporting Bugs
I really appreciate it when people find bugs and report them to me. If you find a bug in the code, please let me know by [opening an issue](https://github.com/xerexDev/AIMod/issues/new). You can just follow the bug report template we have to make everything easier for everyone.

## Writing Code
I could always use some help with writing code for the bot. Because I want to focus on the development of AIMod, I'm not going to take any time to document the bot except for commenting my code (but, if you want to work on documentation, feel free). However, the bot is simple enough that a quick look at the code should get you up and running. If you are interested in contributing, please read instructions below for more information!

> Don't want to go through the hastle of cloning the project and installing modules? [Click here](https://repl.it/github/xerexDev/AIMod) to automagically clone the project to repl.it so you can easily edit the bot and make a pull request!

### Instructions
If you know how to code in JavaScript using `Node.js` and `Discord.js`, then feel free to give one of the [issues](https://github.com/xerexDev/AIMod/issues) a try, or see if you can fix anything proposed by [CodeClimate](https://codeclimate.com/github/xerexDev/AIMod/issues). Fork this repository, make some changes and then open a pull request!

> Keep in mind that this bot is hosted on `repl.it`, using the `Hacker` plan. Take that into account when you're writing code!

### Branching and Canary
## Branching and Canary
Here's how AIMod's development flow works:
* Commits are made to `main`. This is for simplicity, we don't need any fancy branching right now.
* When the code on `main` is (reasonably) stable, it is pushed out to the live bot.
* The latest code is run on the `AIMod Canary` bot. The bot is only brought online when stuff is being tested, and it is not open for the public to use.

### Commit Style
* AIMod uses the [Conventional Commits](https://www.conventionalcommits.org/) commit convention.
* Write your commit subjects in the imperative case *(say `add`, not `adds` or `added`, for example!)*
* Prefix your commit with `feat:`, `fix:`, `docs:`, `refactor:`, `ci:`, `test:`, `perf:`, `build:`, `style:` or `chore:` (meta).
* Do not use capitalization in your commit.
* Don't use punctuation in your commit message!
* The description is optional.
  * If you add a description, use full sentences and punctuation. Describe your commit, it doesn't matter what style you use!
  * Please wrap your description to 100 lines!
  * Be sure to separate your commit message and description with a newline!
* If your commit fixes an issue, the [Closing Keywords](https://docs.github.com/en/free-pro-team@latest/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue) should be placed in the footer.
  * The footer should be separated from the body with a newline.

### Types
* **chore**: Changes to the GitHub repository
* **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
* **ci**: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
* **docs**: Documentation only changes
* **feat**: A new feature
* **fix**: A bug fix
* **perf**: A code change that improves performance
* **refactor**: A code change that neither fixes a bug nor adds a feature
* **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
* **test**: Adding missing tests or correcting existing tests

### Pull Request Info and Guidelines
* Your PR should...
  * Start with a capital letter
  * Use the imperative case
  * Use less than 50 characters
  * Not end with a period
* If your PR is still a work in progress, please add `(wip)` after the type. `<type>(wip): <title>` (It will be blocked from being merged and will receive a `wip` label!)
* Please name your PRs using the following naming pattern:
  * `<type>: <title>`
  * `Type` can be one of the types listed above.
* If you want to make a not for yourself, you can place a `TO DO:` tag in a comment in your code. (Without the space, I don't want the bot generating an issue from this file!)

### Additional Rules, Guidelines, and Notes for Code Contributors
* **ALWAYS SIGN YOUR COMMITS!** You *must* sign your commits to this repository.
* I would really appreciate it if you commented your code.
* Please make sure you lint your code! (`npm run lint`, or `npm run lintfix` to auto fix any issues it finds)

## Thank You!
That's all there is to it! Thank you for your contribution!

**Fonud a tpyo? [Let us know!](https://github.com/xerexDev/AIMod/issues/new)**
