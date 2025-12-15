import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "EMERALD ZHU",
  DESCRIPTION: "Welcome to my small world. See my portfolio. Occasionally write blogs.",
  AUTHOR: "Emerald Zhu",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  { 
    TEXT: "Work", 
    HREF: "/work", 
  },
  { 
    TEXT: "Blog", 
    HREF: "/blog", 
  },
  { 
    TEXT: "Projects", 
    HREF: "/projects", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "hello@emeraldzhu.com",
    HREF: "mailto:hello@emeraldzhu.com",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "emeraldzhu",
    HREF: "https://github.com/emeraldzhu"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "justusnzioki",
    HREF: "https://www.linkedin.com/in/justusnzioki/",
  },
  { 
    NAME: "Twitter",
    ICON: "twitter-x",
    TEXT: "emeraldzhu",
    HREF: "https://x.com/EmeraldZhu",
  },
  {
    NAME: "Instagram",
    ICON: "instagram",
    TEXT: "emeraldzhu",
    HREF: "https://www.instagram.com/emeraldzhu/",
  },
  {
    NAME: "YouTube",
    ICON: "youtube",
    TEXT: "Emerald Zhu",
    HREF: "https://www.youtube.com/@emeraldzhu",
  }
]

