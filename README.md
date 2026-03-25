# My Portfolio and Blog

Welcome to my personal portfolio and blog! This project is a website built with [Astro](https://astro.build/), where I share my projects in depth and delve into my technical knowledge.

## About this project

In this space, you will find:

- **Featured projects**: A collection of my most relevant works, with detailed explanations of the development process, technologies used, and lessons learned.
- **Technical blog**: Articles where I explore advanced topics in software development, from programming languages to best practices and technological trends.
- **Technical knowledge**: I delve into areas such as web development, backend, frontend, databases, and more, sharing my experience and continuous learning.

The site is designed to be fast, accessible, and easy to navigate, taking advantage of Astro's capabilities for generating optimized static pages.

## Project Structure

```
/
├── astro.config.mjs
├── package.json
├── tsconfig.json
├── public/
│   ├── llm.txt
│   ├── robots.txt
│   └── site.webmanifest
└── src/
    ├── components/
    │   ├── astro/
    │   │   ├── Footer.astro
    │   │   ├── Header.astro
    │   │   ├── Link.astro
    │   │   └── Section.astro
    │   └── react/
    │       ├── RotateText.tsx
    │       └── ThemeToggler.tsx
    ├── constants/
    │   ├── index.ts
    │   └── social-networks.ts
    ├── i18n/
    │   └── lang-definitions.ts
    ├── layouts/
    │   └── PortfolioLayout.astro
    ├── locales/
    │   ├── en.json
    │   └── es.json
    ├── pages/
    │   ├── index.astro
    │   └── en/index.astro
    ├── sections/
    │   ├── index.ts
    │   └── portfolio/
    │       ├── About.astro
    │       ├── Education.astro
    │       ├── Experiences.astro
    │       ├── Projects.astro
    │       └── Skills.astro
    ├── seo/
    │   └── me.ld.json
    ├── styles/
    │   └── global.css
    ├── types/
    │   ├── component-types.ts
    │   ├── dtos.ts
    │   ├── i18n.ts
    │   ├── index.ts
    │   ├── sections.ts
    │   └── theme.ts
    └── utils/
        ├── animations.ts
        ├── i18n.ts
        └── link.ts
```

## Directory Reference

- `astro.config.mjs`: Astro configuration and integrations.
- `package.json`: NPM/Bun dependencies, scripts, and metadata.
- `tsconfig.json`: TypeScript compiler options.
- `public/`: Static assets served directly (images, icons, robots, manifest, etc.).
- `src/components/astro/`: Reusable Astro UI components for layout and interface elements.
- `src/components/react/`: React component widgets used in pages (e.g., rotating text, theme toggle).
- `src/constants/`: Application constants (social links, shared values).
- `src/i18n/`: Internationalization helper and language definitions.
- `src/layouts/`: High-level page layout component (`PortfolioLayout.astro`).
- `src/locales/`: Locale JSON files for English and Spanish text content.
- `src/pages/`: Astro pages and routes (root and language-specific pages).
- `src/sections/`: Structured sections used in page composition, including portfolio subcomponents.
- `src/seo/`: SEO meta data and JSON-LD configuration (`me.ld.json`).
- `src/styles/`: Global CSS styling for the site.
- `src/types/`: TypeScript type definitions and interfaces.
- `src/utils/`: Utility functions for animations, localization, and link helpers.

## Commands

All commands are run from the root of the project, in a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `bun install`             | Installs dependencies                            |
| `bun run dev`             | Starts local dev server at `localhost:4321`      |
| `bun run local`           | Starts local dev server with host binding        |
| `bun run build`           | Build your production site to `./dist/`          |
| `bun run preview`         | Preview your build locally, before deploying     |
| `bun run astro`           | Run Astro CLI commands                           |
| `bun run astro -- --help` | Get help using the Astro CLI                     |

## Contact

If you have questions or want to collaborate, feel free to contact me!

---

*Built with love using Astro.*

Spanish version: [README.es.md](README.es.md)
