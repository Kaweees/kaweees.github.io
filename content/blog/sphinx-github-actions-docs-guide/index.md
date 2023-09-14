---
author:
  name: "Miguel Villa Floran"
  website: "https://example.com"

title: "Documentation with Sphinx and GitHub Actions the Right Way"
description:
  A brief guide to setting up Sphinx and GitHub Actions to automatically build
  and deploy your code documentation to GitHub Pages.
date: 2023-08-09
# cover:
#   src: cover.jpg
draft: false
tags:
  - Documentation
  - GitHub Actions
  - GitHub Pages
  - Sphinx
aliases:
  - /posts/sphinx-github-actions/
cover:
  src: ./code-comment.png
  caption: A cautinary tale of the dangers of an undocumented codebase by [Jens Roland](http://jensroland.com/)
---

One of the things I value the most when it comes to when it comes to writing
software I publish is its maintainability, from the obscure and simple bash
scripts to the large and complex programing pillars packed with passion that are
placed in my programming portfolio.

For most people, this is limited to writing consise comments in the codebases
with the hope that they work once and never need to be touched again. This
approach

falls flat

the big picture, as in what

modules do on their own and what are the consequences of its execution with
respect to the entire codebase

most important aspects of any software project is its documentation.
