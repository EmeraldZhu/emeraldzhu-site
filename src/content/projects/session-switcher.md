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
A lot (not really) has changed since the last v3 update. So, rather than boring you with technical details, here's a summary of the latest changes till date. 

### **What changed since:**

Currently, it's at v5 on [Chrome Web Store](https://chromewebstore.google.com/detail/session-switcher-ai-accou/oianbflnhmnfcpahokfmgchdpknccmaihttps://chromewebstore.google.com/detail/session-switcher-ai-accou/oianbflnhmnfcpahokfmgchdpknccmai) and [Firefox Add-Ons](https://addons.mozilla.org/en-US/firefox/addon/session-switcher-official/). In no order: 

- You can now switch accounts instantly, without being on a supported site, and even while logged out. In practice, you can easily open a saved session in an incognito session. 
- Improved session saving and switching on [claude.ai](https://claude.ai). *(Funny story: when this extension started out, ChatGPT was what worked best and with least amount of issue, Claude was the stubborn one. Then over time, ChatGPT became as annoying/stubborn just as Claude was, if not worse)*
- In v3.2.0, I introduced a feature called `Session Freeze` . Now did anybody ever use it? I have no idea, but I'd hope so. Anyway, its goal was simple, say you're using this extension and on your current tab, you're logged in on one session (session 1) and you want to open a new tab and load a different session/account (session 2). When you do load the new session in the new tab, the old tab with session 1 gets overwritten and now both tabs show session 2/account 2. This was especially annoying to me when I used to rely on free accounts and hit the session limit on an account. So what this feature does is, it freezes the session you choose *(meaning no background network requests to that tab/session/account)* and so you can have your old session/account still active while you also use the new session. Of course, this also means that you can't update anything on the old session while the feature is active.
- Also in v3.2.0, I added onboarding and offboarding flows, like a serious developer. *(Note: please leave feedback 🫠)*
- Improved error detection to reduce silent failures. *(this extension isn't bulletproof, server-side changes/expired cookies can render a saved session useless. But nothing that a quick resave won't fix)*
- Added drag and drop to reorder saved accounts
- Revamped the entire UI with my own version of `Liquid Glass`
- Can now automatically detect the email on saved accounts, so you can tell apart your accounts
- Made the free tier more generous and useful (unlimited ChatGPT accounts, up to 2 Claude & Perplexity accounts)
- Pro Lifetime dropped from $29.99 to $19.99
- Pro Monthly dropped from $5/mo to $1.99/mo
- Did I say the extension now works on Firefox (and/or other Mozilla-based browsers)? Did I also mention because of this, the extension also now works on phone (using the Firefox app..., it can also work on Kiwi Browser on mobile, which is a Chromium-based browser) 



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

