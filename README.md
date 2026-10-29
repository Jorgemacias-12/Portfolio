# Portfolio

This is my portfolio, where I share my professional profile.

[Leer en español](README.es.md)

## Package manager

This project uses [Bun](https://bun.sh/) to install dependencies and run scripts. From the project root, install the dependencies and start the development server with:

```sh
bun install
bun run dev
```

Add a dependency with `bun add package-name`, or a development dependency with `bun add --dev package-name`.

## Available commands

These commands are defined in `package.json`:

| Command                   | Description                                                                                |
| ------------------------- | ------------------------------------------------------------------------------------------ |
| `bun run dev`             | Start the Astro development server.                                                        |
| `bun run build`           | Build the production site in `dist/`.                                                      |
| `bun run preview`         | Preview the production build locally.                                                      |
| `bun run local`           | Start the Astro development server on the network host.                                    |
| `bun run astro -- ...`    | Run Astro CLI commands.                                                                    |
| `bun run storybook`       | Start Storybook on port 6006.                                                              |
| `bun run build-storybook` | Build Storybook.                                                                           |
| `bun run prepare`         | Set up Husky Git hooks. This script also runs automatically after installing dependencies. |
| `bun run lint`            | Run ESLint.                                                                                |
| `bun run lint:fix`        | Run ESLint and automatically fix issues where possible.                                    |
| `bun run format`          | Format project files with Prettier.                                                        |
