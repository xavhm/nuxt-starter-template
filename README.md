# Agentic Nuxt Starter Template

[![Use this template](https://img.shields.io/badge/GitHub-Use_this_template-181717?logo=github)](https://github.com/xavhm/homepage-v3/generate)
[![Vite+](https://img.shields.io/badge/toolchain-Vite%2B-8B5CF6)](https://viteplus.dev/)
[![Nuxt](https://img.shields.io/badge/Nuxt-4-00DC82?logo=nuxt.js&logoColor=white)](https://nuxt.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-ready-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)

An agentic-ready Nuxt starter template for building modern, secure, content-driven applications with AI coding agents.

The repository provides a consistent Vite+ workflow, project-level agent instructions, and a practical collection of Nuxt modules. It is also available as a GitHub template, so you can create a new repository without preserving this project's Git history.

## Included modules

| Module                                             | Purpose                                                                      |
| -------------------------------------------------- | ---------------------------------------------------------------------------- |
| [Nuxt UI](https://ui.nuxt.com/)                    | Accessible Vue components and Tailwind CSS theming                           |
| [Nuxt SEO](https://nuxtseo.com/)                   | SEO utilities, sitemaps, robots configuration, and structured data           |
| [Nuxt Security](https://nuxt-security.vercel.app/) | Security headers, middleware, rate limiting, and request protection          |
| [Nuxt Hints](https://nuxt.com/modules/hints)       | Development-time feedback for performance, accessibility, and best practices |

## Agentic-ready development

The repository is structured to work effectively with AI coding agents:

- Project instructions are documented in `AGENTS.md`.
- Nuxt and modules MCPs are detailled in the project.
- Development commands use the consistent `vp` CLI.
- Linting, formatting, type-checking, and testing are part of the expected workflow.
- Nuxt UI guidance is available to agents working on the interface.
- Dependencies and framework conventions are explicitly documented.

Agents should read `AGENTS.md` before making changes.

## Use this template

Select **Use this template** on GitHub or open the following link:

[Create a repository from this template](https://github.com/xavhm/homepage-v3/generate)

Then clone your new repository:

```bash
git clone git@github.com:<username>/<repository>.git
cd <repository>
```

## Prerequisites

Install the global Vite+ CLI on macOS or Linux:

```bash
curl -fsSL https://vite.plus | bash
```

For Windows and alternative installation options, see the [Vite+ installation guide](https://viteplus.dev/guide/#install-vp-globally). Open a new terminal after installation and confirm that the CLI is available:

```bash
vp --version
```

Vite+ can manage the required Node.js runtime and package manager. This project currently resolves to pnpm from the `packageManager` field in `package.json`.

## Getting started

Install dependencies:

```bash
vp install
```

Start the Nuxt development server at `http://localhost:3000`:

```bash
vp run dev
```

## Commands

| Command            | Purpose                                                               |
| ------------------ | --------------------------------------------------------------------- |
| `vp install`       | Install dependencies with the package manager declared by the project |
| `vp run dev`       | Start the Nuxt development server with hot module replacement         |
| `vp run build`     | Create a production build                                             |
| `vp run preview`   | Preview the production build locally                                  |
| `vp run check`     | Run Oxfmt, Oxlint, and Vite+ type checks                              |
| `vp run format`    | Format files with Oxfmt                                               |
| `vp run test`      | Run the Vitest suite                                                  |
| `vp run typecheck` | Run Nuxt's TypeScript checks                                          |
| `vp toolchain`     | Display the active Vite+ toolchain and versions                       |
| `vp help`          | List all Vite+ commands                                               |

### Vite+ built-ins and project scripts

Vite+ built-in commands and `package.json` scripts use different syntax. This is a Nuxt application, so use `vp run <name>` for its framework scripts:

- `vp run dev` runs the `nuxt dev` script from `package.json`.
- `vp run build` runs the `nuxt build` script from `package.json`.
- `vp dev` and `vp build` invoke Vite+'s built-in Vite commands instead.

Use `vp run` without a task name to open the interactive task selector. See the [Vite+ task runner documentation](https://viteplus.dev/guide/run) for filtering, caching, and workspace options.

## Production

Create and preview a production build:

```bash
vp run build
vp run preview
```

The Vite+ pre-commit hook runs `vp staged`, which applies `vp check --fix` to staged JavaScript, TypeScript, and Vue files. The commit-message hook runs Commitlint. Run `vp run check`, `vp run typecheck`, and `vp run test` before deployment.

Use `vp run release` to publish a version through release-it. The release hook formats the generated changelog and runs the full `check` script before creating the release commit.

The generated Nuxt output is written to `.output/`. Refer to the [Nuxt deployment guide](https://nuxt.com/docs/getting-started/deployment) for provider-specific instructions.

## License

Released under the [MIT License](./LICENSE).
