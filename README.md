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
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

Components for Astro/React/Vue/Svelte/Preact are placed in `src/components/`.

Static assets, like images, go in the `public/` directory.

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
