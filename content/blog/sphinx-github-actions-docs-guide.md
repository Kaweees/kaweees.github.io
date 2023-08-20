---
author: Miguel Villa Floran
title: "Documentation with Sphinx and GitHub Actions the Right Way"
description:
  A brief guide to setting up Sphinx and GitHub Actions to automatically build
  and deploy your code documentation to GitHub Pages.
date: 2023-08-09
# cover:
#   src: cover.jpg
draft: false
math: true
comments: true
socialShare: true
tags:
  - Sphinx
  - Documentation
  - GitHub Actions
  - GitHub Pages
aliases:
  - /posts/sphinx-github-actions-docs-guide
---

> // <br> // Dear maintainer:<br> // <br> // Once you are done trying to
> 'optimize' this routine, <br> // and have realized what a terrible mistake
> that was, <br> // please increment the following counter as a warning <br> //
> to the next guy: <br> // <br> // total_hours_wasted_here = 42 <br> // <br> —
> <cite>Jens Roland [^1]</cite>

[^1]:
    The above quote is excerpted from a post by
    [Jens Roland](http://jensroland.com/) on
    [a Stack Overflow thread](https://stackoverflow.com/questions/184618/what-is-the-best-comment-in-source-code-you-have-ever-encountered),
    on Nov 19, 2011

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
