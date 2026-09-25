---
title: Session Switcher
summary: Chrome extension to easily switch between different accounts on AI sites.
date: 2026-02-21
draft: false
tags:
  - Javascript
  - Chrome Manifest v3
  - ChatGPT
  - Indie Hacking
  - AI account switcher
  - SaaS
links:
  - label: See Website
    url: https://sessionswitcher.emeraldzhu.com/
    icon: globe
---
### v3 Update

The extension has gone through a couple of changes since its inception. From being a generic session switcher that promised to work on almost every site, to realizing that was far-fetched, to narrowing it down to only AI sites, to making it work reliably on AI sites. Ladies and mentlegen (pun intended), introducing v3.0

- This update adds a 7-day free trial to try out Pro.
- I made warning states and switching failures more explicit (instead of it silently failing).
- Added info texts to show how long since a session was refreshed (re-saved).
- Added auto session refreshing to be done periodically to avoid stale sessions. 
- Addded keyboard shortcuts to switch accounts.

### v2 Update

The new, updated version is live on the Chrome Web Store. 

- Added a free tier with 2 ChatGPT accounts
- Added a paid tier with support for unlimited ChatGPT accounts as well as support for Claude and Perplexity (as well as other future AI sites)

One small problem though, the extension might be broken on ChatGPT. *sigh* Not this again. Might provide a future fix. *Might* (I'll leave this here because, one, no, the extension wasn't broken - thank God - and two, I actually made it easier to deal with stale sessions)

### New scope

Decided to only narrow down to AI chatbot sites. Previous scope was too wide and consequentially too many problems.

*sigh* *Again...*

Session Switcher allows you to save, label, and swap between different accounts on AI chatbot sites with a single click - but with more QoL features.

### Old scope

Session Switcher allows you to save, label, and swap between different accounts on any website with a single click. Whether you are managing multiple ChatGPT accounts, switching between social media clients, or separating Work vs. Personal profiles, do it all without ever logging out.

### Lessons I Learnt From This Project

- Even the simplest projects can and will still take your time. So think about the reward before committing to a project. 
- This is a SaaS but in the world of painkillers vs nice-to-haves, I think you're the better judge of what this is. 
- Fun fact, most of this project was built using AI with me being the project manager (and it still consumed a lot of time).

