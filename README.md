# Cyenetic Security Blog 🔒

![Cyenetic Security Blog](public/default-og.jpg)
[![Astro](https://img.shields.io/badge/Astro-FF5D01?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build)
![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
[![Security](https://img.shields.io/badge/Cybersecurity-Expert-green?style=for-the-badge)](https://www.cyenetic.com)

Cyenetic Security Blog is a comprehensive resource for cybersecurity insights, penetration testing guides, and security best practices. This blog is maintained by **Cyenetic Solutions Ltd.**, a leading cybersecurity firm specializing in vulnerability assessment and penetration testing.

Explore [the blog posts](https://blog.cyenetic.com/posts/) or visit [Cyenetic's Main Site](https://www.cyenetic.com) for professional security services.

## 🔥 Features

- [x] Comprehensive security content covering all major pentesting areas
- [x] Type-safe markdown for consistent content
- [x] Lightning-fast performance (Astro static generation)
- [x] Fully accessible (WCAG 2.1 compliant)
- [x] Responsive design (mobile to desktop)
- [x] SEO-optimized for search visibility
- [x] Light & dark mode support
- [x] Full-text search with Pagefind
- [x] Automatic sitemap & RSS feed generation
- [x] Social media integration (Facebook, Twitter, LinkedIn)
- [x] Easy content management with Markdown
- [x] Regular security updates and best practices
- [x] Built-in call-to-actions for Cyenetic services

This blog maintains the highest standards of accessibility and performance, ensuring readers can easily access critical security information from any device.

## ✅ Lighthouse Score

<p align="center">
  <a href="https://pagespeed.web.dev/report?url=https%3A%2F%2Fastro-paper.pages.dev%2F&form_factor=desktop">
    <img width="710" alt="AstroPaper Lighthouse Score" src="AstroPaper-lighthouse-score.svg">
  </a>
</p>

## 🚀 Project Structure

Inside of AstroPaper, you'll see the following folders and files:

```bash
/
├── public/
│   ├── pagefind/          # auto-generated on build
│   ├── favicon.svg
│   └── default-og.jpg
├── src/
│   ├── assets/
│   │   ├── icons/
│   │   └── images/
│   ├── components/
│   ├── content/
│   │   ├── pages/
│   │   │   └── about.md
│   │   └── posts/
│   │       └── some-blog-posts.md
│   ├── i18n/
│   ├── layouts/
│   ├── pages/
│   ├── scripts/
│   ├── styles/
│   ├── types/
│   ├── utils/
│   ├── config.ts
│   └── content.config.ts
├── astro-paper.config.ts  # user-defined configurations
└── astro.config.ts
```

All blog posts are stored in the `src/content/posts/` directory. You can organise posts into subdirectories — the subdirectory name becomes part of the post URL.

## 📖 Blog Categories

The blog covers the following security disciplines:

- **Web Application Security** - OWASP vulnerabilities, secure coding, penetration testing
- **API Security** - REST/GraphQL security, authentication, rate limiting, testing
- **Mobile App Security** - Android/iOS security, data protection, SAST/DAST
- **Network Security** - Firewalls, IDS/IPS, VPN, wireless security, infrastructure hardening
- **DDoS Protection** - Mitigation strategies, CDN solutions, incident response
- **Security Best Practices** - General guidelines for secure development and operations

### For Contributors

To add a new blog post, follow the format in `src/content/posts/`:

```markdown
---
author: Author Name
pubDatetime: 2026-06-11T10:00:00.000Z
title: Security Topic
slug: security-topic
featured: true/false
draft: false
tags:
  - Security
  - Topic
description: SEO description for search engines
---

Content goes here...
```

## 💻 Tech Stack

**Main Framework** - [Astro](https://astro.build/)  
**Type Checking** - [TypeScript](https://www.typescriptlang.org/)  
**Styling** - [TailwindCSS](https://tailwindcss.com/)  
**UI/UX** - [Figma Design File](https://www.figma.com/community/file/1356898632249991861)  
**Static Search** - [Pagefind](https://pagefind.app/)  
**Icons** - [Tablers](https://tabler-icons.io/)  
**Code Formatting** - [Prettier](https://prettier.io/)  
**Deployment** - [Cloudflare Pages](https://pages.cloudflare.com/)  
**Linting** - [ESLint](https://eslint.org)  
**Dynamic OG images** - [Satori](https://github.com/vercel/satori) + [Sharp](https://sharp.pixelplumbing.com/) + [Astro Fonts](https://docs.astro.build/en/guides/fonts/)

## 👨🏻‍💻 Running Locally

Clone the repository and start the development server:

```bash
# Clone the repository
git clone https://github.com/cyenetic/cyenetic-blog.git
cd cyenetic-blog

# Install dependencies
npm install

# Start development server
npm run dev
```

The blog will be available at `http://localhost:3000`

To build for production:

```bash
npm run build
npm run preview
```

## Google Site Verification (optional)

You can add your [Google Site Verification HTML tag](https://support.google.com/webmasters/answer/9008080#meta_tag_verification&zippy=%2Chtml-tag) by setting `site.googleVerification` in `astro-paper.config.ts`:

```ts file="astro-paper.config.ts"
export default defineAstroPaperConfig({
  site: {
    // ...
    googleVerification: "your-google-site-verification-value",
  },
  // ...
});
```

> See [this discussion](https://github.com/satnaing/astro-paper/discussions/334#discussioncomment-10139247) for adding AstroPaper to the Google Search Console.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command          | Action                                                                                                                           |
| :--------------- | :------------------------------------------------------------------------------------------------------------------------------- |
| `pnpm install`   | Installs dependencies                                                                                                            |
| `pnpm dev`       | Starts local dev server at `localhost:4321`                                                                                      |
| `pnpm build`     | Type-checks, builds the site, runs Pagefind indexing, and copies the index to `public/pagefind/`                                 |
| `pnpm preview`   | Preview your build locally, before deploying                                                                                     |
| `pnpm sync`      | Generates TypeScript types for all Astro modules. [Learn more](https://docs.astro.build/en/reference/cli-reference/#astro-sync). |
| `pnpm astro ...` | Run CLI commands like `astro add`, `astro check`                                                                                 |

## 📧 Contact & Support

For questions, feedback, or business inquiries:

- **Email**: info@cyenetic.com
- **Website**: https://www.cyenetic.com
- **LinkedIn**: https://www.linkedin.com/company/cyenetic/
- **Twitter**: https://x.com/cyenetic
- **Facebook**: https://www.facebook.com/cyenetic

## 📞 Cybersecurity Services

Cyenetic Solutions Ltd. provides professional cybersecurity services:

- **Vulnerability Assessment & Penetration Testing (VAPT)**
- **Web Application Security Testing**
- **Mobile App Security Assessment**
- **Network Penetration Testing**
- **API Security Testing**
- **DDoS Protection & Mitigation**
- **Security Consultation**

Visit [Cyenetic Solutions](https://www.cyenetic.com) for more information.

## 📜 License

Licensed under the MIT License, Copyright © 2026 Cyenetic Solutions Ltd.

---

Built with ❤️ by [Cyenetic Solutions Ltd.](https://www.cyenetic.com) | Security, Kinetic.

**Blog URL**: https://blog.cyenetic.com/  
**Main Website**: https://www.cyenetic.com
