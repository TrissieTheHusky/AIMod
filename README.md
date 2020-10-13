# Meet AIMod
AIMod uses machine learning to automatically process reported messages on your server.

![Lint Workflow Status](https://img.shields.io/github/workflow/status/CamTheHelpDesk/AIMod/ESLint?label=Lint&style=for-the-badge)

![Uptime](https://img.shields.io/uptimerobot/ratio/m785979879-8b41100ca85c4a06cbdd0155?style=for-the-badge)
![Status](https://img.shields.io/uptimerobot/status/m785979879-8b41100ca85c4a06cbdd0155?style=for-the-badge)

![License](https://img.shields.io/github/license/CamTheHelpDesk/AIMod?style=for-the-badge&color=00ff00)
![Version](https://img.shields.io/github/v/release/CamTheHelpDesk/AIMod?include_prereleases&label=version&style=for-the-badge&color=00ff00)

![Maintenance](https://img.shields.io/maintenance/yes/2020?style=for-the-badge)
![Last Commit](https://img.shields.io/github/last-commit/CamTheHelpDesk/AIMod?style=for-the-badge)
![Commit Activity](https://img.shields.io/github/commit-activity/m/CamTheHelpDesk/AIMod?style=for-the-badge)

![Languages](https://img.shields.io/github/languages/count/CamTheHelpDesk/AIMod?style=for-the-badge&color=0000ff)
![Top Language](https://img.shields.io/github/languages/top/CamTheHelpDesk/AIMod?style=for-the-badge&color=0000ff)
![GitHub Repo Size](https://img.shields.io/github/repo-size/CamTheHelpDesk/AIMod?style=for-the-badge&color=0000ff)

![Code Quality](https://img.shields.io/codeclimate/maintainability/CamTheHelpDesk/AIMod?label=Code%20Quality&style=for-the-badge)
![Code Quality Issues](https://img.shields.io/codeclimate/issues/CamTheHelpDesk/AIMod?label=Code%20Quality%20Issues&style=for-the-badge)

![Open Issues](https://img.shields.io/github/issues-raw/CamTheHelpDesk/AIMod?style=for-the-badge&color=ff0000)
![Closed Issues](https://img.shields.io/github/issues-closed-raw/CamTheHelpDesk/AIMod?style=for-the-badge&color=ff0000)
![Open PRs](https://img.shields.io/github/issues-pr-raw/CamTheHelpDesk/AIMod?style=for-the-badge&color=00ff00)
![Closed PRs](https://img.shields.io/github/issues-pr-closed-raw/CamTheHelpDesk/AIMod?style=for-the-badge&color=00ff00)

## INVITE LINK
[Click here to invite AIMod](https://discord.com/api/oauth2/authorize?client_id=676864099832954884&permissions=2080762967&redirect_uri=https%3A%2F%2Fauth.meetAIMod.ml&response_type=code&scope=identify%20guilds.join%20bot) - [Click here to view AIMod on DiscordLabs](https://dbots.cc/AIMod)

## Table of Contents
* [About](https://github.com/CamTheHelpDesk/AIMod#about)
* [Contributing](https://github.com/CamTheHelpDesk/AIMod#contributing)
* [Self-Hosting](https://github.com/CamTheHelpDesk/AIMod#self-hosting)
* [Branching and Canary](https://github.com/CamTheHelpDesk/AIMod#branching-and-canary)
* [Support](https://github.com/CamTheHelpDesk/AIMod#support)

## About
AIMod is a completely new idea when it comes to moderating your server. **Most moderation bots do one or more of three things:**
* **Moderation Commands** - The bot might provide a suite of moderation commands, such as banning, kicking, and muting. They have various additional features, from logging to giving reasons to allowing appeals.
* **Automod** - Other bots might be automods. They will read every message that is sent and automatically delete or censor it if it meets certain criteria.
* **Report System** - There's also moderation bots that allow users to report each other and get their reports added to a queue for the mods to see and then act on.

### Okay, that's all great, but what's so special about AIMod?
AIMod is sort of a **combination** of the last two types - it's a mix of an automod and a report system. That doesn't mean that AIMod is an automod that happens to have a report command! Instead, when a user reports a message, AIMod will then run that message through a machine learning algorithm to see if it should be deleted, and will then act on that decision and alert anyone involved. This has several advantages:
* **Less "false positives"** - A false positive is an issue that many automod bots have, where they will mistake a message that is perfectly acceptable as inappropriate for the server and delete it. While this can still happen with AIMod, it still keeps the human aspect of an automod- a message needs to be reported before AIMod can act on it. Odds are, only messages that are *genuinely* bad will be reported, and any appropriate messages that are just randomly reported as spam will be left as-is.
* **No flooded report queues** - A common issue with ordinary report-centric bots is that report queues can get flooded with reports that humans then need to review. AIMod won't concern your moderators with anything they don't need to worry about, it will go through it's queue on it's own without any help.
* **Faster turnaround time** - A report with an ordinary bot may take days to be reviewed, but AIMod will review reports quickly, usually in a matter of seconds. No more rude messages sitting around in the chat for days!

### Anything else to tell me?
In addition to all of that, AIMod is under constant development, with the code being updated almost daily and a goal to make a major update every month. (We'll see how long that holds out!) If you have an idea, fell free to suggest it!

With everything you know now, what is stopping your from inviting AIMod?

## Contributing
Thank you for your interest in contributing! If you would like to contribute to the bot in some way (including writing code, suggesting ideas, or hunting bugs), please read [`CONTRIBUTING.md`](https://github.com/CamTheHelpDesk/AIMod/blob/master/CONTRIBUTING.md) to learn more about the bot and how to help with it's development.

> [Check us out on CodeClimate](https://codeclimate.com/github/CamTheHelpDesk/AIMod)

[![Run on Repl.it](https://repl.it/badge/github/CamTheHelpDesk/AIMod)](https://repl.it/github/CamTheHelpDesk/AIMod)

## Self-Hosting
**I would really appreciate it if you didn't host your own version of AIMod.** While AIMod's license technically allows it, AIMod thrives off of people adding the bot to their servers and using the official instance that I host. If you have any concerns about the security of my instance, please contact me. I'd love to talk and answer questions and incorporate new ideas. However, in the event that you do decide to self-host the bot, please note the following things.
* I will not offer *any* support if you decide to self-host the bot. The code is provided without **any warranty whatsoever** in accordance with the `GNU GPL v3.0` license. **YOU WILL BE ON YOUR OWN**.
* You're going to need to know how to write JavaScript code to modify the production code to work for you.

> If you really feel it necessary to self-host, please read the license to ensure that you understand what you are getting yourself into.

## Branching and Canary
Here's how AIMod's development flow works:
* Commits are made to `main`. This is for simplicity, we don't need any fancy branching right now.
* When the code on `main` is (reasonably) stable, it is pushed out to the live bot.
* The latest code is run on the `AIMod Canary` bot. The bot is only brought online when stuff is being tested, and it is not open for the public to use.
* Please read more in `CONTRIBUTING.md`.

## Support
If you need support, please join our official support server at https://discord.gg/3zzE4n7!

![GitHub followers](https://img.shields.io/github/followers/CamTheHelpDesk?label=Follow%20CamTheHelpDesk&style=social) ![GitHub forks](https://img.shields.io/github/forks/CamTheHelpDesk/AIMod?label=Fork&style=social) ![GitHub stars](https://img.shields.io/github/stars/CamTheHelpDesk/AIMod?label=Star&style=social) ![GitHub watchers](https://img.shields.io/github/watchers/CamTheHelpDesk/AIMod?label=Watch&style=social)

**Fonud a tpyo? [Let us know!](https://github.com/CamTheHelpDesk/AIMod/issues/new)**
