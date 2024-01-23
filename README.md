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
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]

</div>

<a href="https://github.com/Kaweees/kaweees.github.io">
  <img alt="Hugo Logo" src="static/hugo.png" align="right" width="150">
</a>

<div align="left">
  <h1><em><a href="https://miguelvf.dev">miguelvf.dev</a></em></h1>
</div>
<div></div>

<!-- ABOUT THE PROJECT -->

My personal website and blog. Peeking under the hood, it uses Hugo, a static site generator written in Go, and Continuous Integration/Continuous Deployment (CI/CD) via a GitHub Actions workflow I created for automatic builds and deployments upon commits.

### Built With

[![Hugo][Hugo-shield]][Hugo-url]
[![Go][Go-shield]][Go-url]
[![GitHub Actions][github-actions-shield]][github-actions-url]

<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

Before attempting to build this project, make sure you have [Hugo installed](https://gohugo.io/installation/) on your machine. Additionally, in order for the Sass/SCSS files to be compiled via Hugo extension, you'll need to have [Go](https://go.dev/doc/install) and [Node.js](https://nodejs.org/en/download) installed on your machine.

### Installation

To get a local copy of the project up and running on your machine, follow these simple 
steps:

1. Clone the project repository
   ```sh
   git clone https://github.com/Kaweees/kaweees.github.io.git
   cd kaweees.github.io
   ```
2. Install the project dependencies
   ```sh
   npm ci
   ```
3. Run the project
   ```sh
   hugo server -D
   ```

To update the projects modules, run the following commands:

```sh
# Update the Hugo modules
hugo mod get -u
hugo mod tidy

# Update the NPM dependencies
hugo mod npm pack
npm install
```

## License

The source code for my website is distributed under the terms of the GNU General Public License v3.0, as I firmly believe that collaborating on free and open-source software fosters innovations that mutually and equitably beneficial to both collaborators and users alike. See [`LICENSE`](./LICENSE) for details and more information.

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/Kaweees/kaweees.github.io.svg?style=for-the-badge
[contributors-url]: https://github.com/Kaweees/kaweees.github.io/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Kaweees/kaweees.github.io.svg?style=for-the-badge
[forks-url]: https://github.com/Kaweees/kaweees.github.io/network/members
[stars-shield]: https://img.shields.io/github/stars/Kaweees/kaweees.github.io.svg?style=for-the-badge
[stars-url]: https://github.com/Kaweees/kaweees.github.io/stargazers

<!-- MARKDOWN SHIELD BAGDES & LINKS -->
<!-- https://github.com/Ileriayo/markdown-badges -->
[Hugo-shield]: https://img.shields.io/badge/hugo-%23008080.svg?style=for-the-badge&logo=hugo&logoColor=ff4088&labelColor=222222&color=ff4088
[Hugo-url]: https://go.dev/
[Go-shield]: https://img.shields.io/badge/go-%23008080.svg?style=for-the-badge&logo=go&logoColor=00add8&labelColor=222222&color=00add8
[Go-url]: https://gohugo.io/
[github-actions-shield]: https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=2671E5&labelColor=222222&color=2671E5
[github-actions-url]: https://github.com/features/actions
