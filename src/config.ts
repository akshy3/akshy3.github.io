import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://akshy3.github.io/",
  author: "Akshay",
  desc: "Akshay's portfolio website.",
  title: "Akshay",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
};

export const LOCALE = ["en-EN"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/akshy3",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
   {
    name: "Instagram",
    href: "https://instagram.com/akshy.ashok",
    linkTitle: `${SITE.title} on Instagram`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/akshay209",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:akshayashok209@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: false,
  },
 ];
