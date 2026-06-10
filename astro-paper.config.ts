import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://blog.cyenetic.com/",
    title: "Cyenetic Security Blog",
    description: "Security insights, penetration testing guides, and cybersecurity best practices from Cyenetic Solutions Ltd.",
    author: "Cyenetic Solutions Ltd.",
    profile: "https://www.cyenetic.com",
    aboutUrl: "https://www.cyenetic.com/about",
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: "Asia/Dhaka",
    dir: "ltr",
  },
  logo: {
    light: "https://www.cyenetic.com/cyenetic-logo-with-text-in-light-mode.png",
    dark: "https://www.cyenetic.com/cyenetic-logo-with-text-in-dark-mode.png",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: false,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: false,
    },
    search: "pagefind",
  },
  socials: [
    { name: "facebook",   url: "https://www.facebook.com/cyenetic" },
    { name: "x",        url: "https://x.com/cyenetic" },
    { name: "linkedin", url: "https://www.linkedin.com/company/cyenetic/" },
    { name: "mail",     url: "mailto:info@cyenetic.com" },
  ],
  shareLinks: [
    { name: "whatsapp", url: "https://wa.me/?text=" },
    { name: "facebook", url: "https://www.facebook.com/sharer.php?u=" },
    { name: "x",        url: "https://x.com/intent/post?url=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "linkedin", url: "https://www.linkedin.com/sharing/share-offsite/?url=" },
    { name: "mail",     url: "mailto:?subject=See%20this%20post&body=" },
  ],
});