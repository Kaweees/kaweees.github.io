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

<a href="https://github.com/anre-ai/ran-app">
  <source media="(prefers-color-scheme: dark)" srcset="assets/img/svelte-logo-light-mode.svg">
  <img alt="Text changing depending on mode. Light: 'Svelte Logo Light Mode' Dark: 'Svelte Logo Dark Mode'" src="assets/img/svelte-logo-dark-mode.svg" align="right" width="150">
</a>

<div align="left">
  <h1><em>~ran-app</em></h1>
</div>

<!-- ABOUT THE PROJECT -->

Frontend for [Research Acceleration Nexus (RAN)](https://ran.anemo.ai).

### Built With

[![Rust][Rust-shield]][rust-url] [![Svelte][Svelte-shield]][Svelte-url]
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
[Rust](https://www.rust-lang.org/), [taze](https://github.com/antfu/taze), and
[pNpM](https://pnpm.io/) installed on your machine.

### Installation

To get a local copy of the project up and running on your machine, follow these
simple steps:

1. Clone the repo
   ```sh
   git clone https://github.com/anre-ai/ran-app.git
   cd ran-app
   ```
2. Install the project dependencies
   ```sh
   pnpm i
   ```

<!-- USAGE EXAMPLES -->

## Usage

### Available Commands

Here is a list of the commands provided in the `scripts` section of the
`package.json` file:

| Command          | Description                                                                                     |
| ---------------- | ----------------------------------------------------------------------------------------------- |
| pnpm i           | Installs all the dependencies listed in `pnpm-lock.yaml`.                                       |
| pnpm tauri dev   | Runs the app in the development mode with hot reload.                                           |
| pnpm tauri build | Builds the application into an executable file for different platforms using the Rust compiler. |
| npm run preview  | Serves the production build from the `dist` folder.                                             |
| npm run check    | Formats the codebase according to the defined code style guidelines.                            |
| npm run format   | Formats the codebase according to the defined code style guidelines.                            |
| npm run lint     | Execute the linter to analyze the code for potential errors, style violations, or other issues. |
| npm run test     | Runs the test watcher in an interactive mode.                                                   |

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

The codebase for Research Acceleration Nexus (RAN) is currently privately
sourced and not available for public use. Do not distribute or use this codebase
without the explicit permission of the project maintainers.

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]:
  https://img.shields.io/github/contributors/Kaweees/kiwi-controls.svg?style=for-the-badge
[contributors-url]: https://github.com/anre-ai/ran-app/graphs/contributors
[forks-shield]:
  https://img.shields.io/github/forks/Kaweees/kiwi-controls.svg?style=for-the-badge
[forks-url]: https://github.com/anre-ai/ran-app/network/members
[stars-shield]:
  https://img.shields.io/github/stars/Kaweees/kiwi-controls.svg?style=for-the-badge
[stars-url]: https://github.com/anre-ai/ran-app/stargazers

<!-- MARKDOWN SHIELD BADGES & LINKS -->
<!-- https://github.com/Ileriayo/markdown-badges -->

[Rust-shield]:
  https://img.shields.io/badge/Rust-20232A?style=for-the-badge&logo=Rust&logoColor=CE422B&labelColor=222222&color=CE422B
[Rust-url]: https://rust-lang.org/
[Svelte-shield]:
  https://img.shields.io/badge/svelte-%23008080.svg?style=for-the-badge&logo=svelte&logoColor=FF3E00&labelColor=222222&color=FF3E00
[Svelte-url]: https://svelte.dev/
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
