<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
<div align="left">

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url] [![Stargazers][stars-shield]][stars-url]

</div>

<a href="https://miguelvf.dev">
  <img alt="Astro Logo'" src="assets/img/astro-logo.png" align="right" width="150">
</a>

<div align="left">
  <h1><em><a href="https://miguelvf.dev">~miguelvf.dev</a></em></h1>
</div>

<!-- ABOUT THE PROJECT -->

My personal website and blog. Peeking under the hood, it uses Hugo, a static
site generator written in Go, and Continuous Integration/Continuous Deployment
(CI/CD) via a GitHub Actions workflow I created for automatic builds and
deployments upon commits.

### Built With

[![Astro][Astro-shield]][Astro-url]
[![TypeScript][TypeScript-shield]][TypeScript-url]
[![Tailwind][Tailwind-shield]][Tailwind-url]
[![GitHub Actions][GitHub-Actions-shield]][GitHub-Actions-url]
[![Docker][Docker-shield]][Docker-url]

<!-- GETTING STARTED -->

## Getting Started

To get a local copy of the project up and running on your machine, follow these
simple steps:

### Prerequisites

Before attempting to build this project, make sure you have
[Node.js](https://nodejs.org/en/download), [pNpM](https://pnpm.io/), and
[taze](https://github.com/antfu/taze) installed on your machine.

### Installation

To get a local copy of the project up and running on your machine, follow these
simple steps:

1. Clone the repo
   ```sh
   git clone https://github.com/Kaweees/kaweees.github.io.git --recurse-submodules
   cd kaweees.github.io
   ```
2. Install the project dependencies
   ```sh
   pnpm i
   ```
3. Start the development server
   ```sh
   pnpm run dev
   ```

To update the projects modules, run the following commands:

```sh
pnpm taze -w
```

<!-- USAGE EXAMPLES -->

## Usage

### Available Commands

Here is a list of the commands provided in the `scripts` section of the
`package.json` file:

| Command         | Description                                                                                     |
| --------------- | ----------------------------------------------------------------------------------------------- |
| pnpm i          | Installs all the dependencies listed in `pnpm-lock.yaml`.                                       |
| npm run preview | Serves the production build from the `dist` folder.                                             |
| npm run format  | Formats the codebase according to the defined code style guidelines.                            |
| npm run lint    | Execute the linter to analyze the code for potential errors, style violations, or other issues. |
| npm run test    | Runs the test watcher in an interactive mode.                                                   |

_For more examples, please refer to the
[Go Command Documentation](https://go.dev/doc/cmd)_

<!-- PROJECT FILE STRUCTURE -->

## Project Structure

Here is an overview of the main directories and their purposes:

```sh
src
├── lib
│   ├── components
│   │   ├── ui
│   │   │   ├── alert-dialog
│   │   │   │   ├── index.ts
│   │   │   │   └── alert.svelte
│   │   │   ├── button
│   │   │   │   ├── index.ts
│   │   │   │   └── button.svelte
│   │   │   └── ...
│   │   ├── navigation.svelte
│   │   ├── page-header.svelte
│   │   └── ...
│   └── utils.ts
├── routes
│   ├── +page.svelte
│   └── +layout.svelte
├── app.pcss
```

<!-- LICENSE -->
<!-- https://choosealicense.com/ -->

## License

The source code for my website is distributed under the terms of the GNU General
Public License v3.0, as I firmly believe that collaborating on free and
open-source software fosters innovations that mutually and equitably beneficial
to both collaborators and users alike. See [`LICENSE`](./LICENSE) for details
and more information.

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]:
  https://img.shields.io/github/contributors/Kaweees/kaweees.github.io.svg?style=for-the-badge
[contributors-url]:
  https://github.com/Kaweees/kaweees.github.io/graphs/contributors
[forks-shield]:
  https://img.shields.io/github/forks/Kaweees/kaweees.github.io.svg?style=for-the-badge
[forks-url]: https://github.com/Kaweees/kaweees.github.io/network/members
[stars-shield]:
  https://img.shields.io/github/stars/Kaweees/kaweees.github.io.svg?style=for-the-badge
[stars-url]: https://github.com/Kaweees/kaweees.github.io/stargazers

<!-- MARKDOWN SHIELD BADGES & LINKS -->
<!-- https://github.com/Ileriayo/markdown-badges -->

[Astro-shield]:
  https://img.shields.io/badge/astro-%23008080.svg?style=for-the-badge&logo=astro&logoColor=FF5D01&labelColor=222222&color=FF5D01
[Astro-url]: https://astro.build/
[TypeScript-shield]:
  https://img.shields.io/badge/typescript-%23008080.svg?style=for-the-badge&logo=typescript&logoColor=3178C6&labelColor=222222&color=3178C6
[TypeScript-url]: https://www.typescriptlang.org/
[Tailwind-shield]:
  https://img.shields.io/badge/tailwindcss-%23008080.svg?style=for-the-badge&logo=tailwind-css&logoColor=0EA5E9&labelColor=222222&color=0EA5E9
[Tailwind-url]: https://tailwindcss.com/
[GitHub-Actions-shield]:
  https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=2671E5&labelColor=222222&color=2671E5
[GitHub-Actions-url]: https://github.com/features/actions
[Docker-shield]:
  https://img.shields.io/badge/docker-%232671E5.svg?style=for-the-badge&logo=docker&logoColor=1D63ED&labelColor=222222&color=1D63ED
[Docker-url]: https://www.docker.com/
