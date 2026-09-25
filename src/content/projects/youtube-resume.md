---
title: YouTube Resume
summary: Chrome extension that lets you automatically resume YouTube videos
  exactly where you left off.
date: 2026-03-13
draft: false
tags:
  - Javascript
  - Chrome Manifest v3
  - Open-source
  - Chrome Extension
  - YouTube
links:
  - label: See Website
    url: https://youtuberesume.emeraldzhu.com/
    icon: globe
  - label: See Repository
    url: https://github.com/EmeraldZhu/youtube-resume
    icon: link
---
### So What is YouTube Resume?

Following the K.I.S.S. principle, YouTube Resume is a Chrome extension that automatically resumes where you left off on YouTube. 

### Doesn't YouTube Already Do This?

Yeahhh... No. 

![](/images/projects/yes-and-no-marques-brownlee.gif)

Ideally, this extension shouldn't exist. Heavy on ideally. But for some reason, YouTube almost never consistently remembers where I (among many other users on Reddit and complaints from people I personally know) left off. I'll reopen a past YouTube video and it'll either start me from scratch or start off at a very "behind" timestamp. This is especially frustrating on long videos (tutorials, podcasts, etc.).

That's why I made this. 

### **Updates**

Almost forgot I have a site. So, let me keep you up to date on how much this extension has evolved/changed since its inception (on March, I think).

### **What changed since**

Currently, it's at v4.0.0 on [Chrome Web Store](https://chromewebstore.google.com/detail/youtube-resume/ofjdhidbckonobbcgogkmgkjniopcjkh), with the latest update being on September 10, 2026, so yes, it's actively maintained. And even as I write this changelog (I'm using PagesCMS actually, cool stuff), I know there's a current bug I'm monitoring, so expect an update soon. 

Anywho, here’s a summary of the latest changes till date…

- You can now pin (up to 20) saved videos, so they're always at the top of your list
- Added a saved videos panel with all the good stuff (thumbnail, title, channel name, watch progress)
- Added a settings panel (minimum watch time before a video is saved, when a video is counted as `finished` , how far to rewind on resume, among many others)
- You can now remove completed videos in one go from the saved videos panel
- Currently, the extension respects timestamp links *(opening a video with a specific starting time **(?t=)** is respected over your saved position)* but I personally hate it, since YouTube's isn't always reliable, so I'm planning on fixing it, but will add a toggle for it in the settings so you can turn it on/off

Anyway, just like before, even if you never touch the saved videos panel, the extension still remains true to its purpose as a behind-the-scenes/background extension. It will always work with no effort from you.



&nbsp;

&nbsp;