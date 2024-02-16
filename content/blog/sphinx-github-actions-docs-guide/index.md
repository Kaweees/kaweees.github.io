---
author:
  name: "Miguel Villa Floran"
  website: "https://miguelvf.dev"
title: "Documentation with Sphinx and GitHub Actions the Right Way"
description:
  A brief guide to setting up Sphinx and GitHub Actions to automatically build
  and deploy your code documentation to GitHub Pages.
date: 2023-08-09
draft: false
tags:
  - Documentation
  - GitHub Actions
  - GitHub Pages
  - Sphinx
aliases:
  - /posts/sphinx-github-actions/
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

```
.
├── .github/
│   └── workflows/
│       └── sphinx-pipeline.yml
├── source/
│   ├── _static/
│   │   ├── css/
│   │   ├── favicons/
│   │   ├── img/
│   │   └── pdf/
│   ├── conf.py
│   └── index.rst
├── .gitignore
├── Make.bat
├── Makefile
└── requirements.txt
```

```yaml
name: CI/CD Pipeline for Sphinx
# Controls when the workflow will run
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]
  workflow_dispatch:

# The sequence of runs in this workflow:
jobs:
  deploy:
    name: Build and Deploy Documentation
    runs-on: ubuntu-latest
    steps:
      - run: lsb_release -a
      - run: uname -a
      - name: Check out Repository Code
        uses: actions/checkout@v4
      - name: Setup Python
        uses: actions/setup-python@v4
        with:
          python-version: "3.10"

      # pip caching
      - name: Locate pip's cache
        id: pip-cache
        run: echo "::set-output name=dir::$(pip cache dir)"

      - name: Cache dependencies
        uses: actions/cache@v3
        with:
          path: ${{ steps.pip-cache.outputs.dir }}
          key: ${{ runner.os }}-pip-${{ hashFiles('**/requirements.txt') }}
          restore-keys: |
            ${{ runner.os }}-pip-

      # Install runtime dependencies
      - name: Upgrade pip
        run: pip install --upgrade pip
      - name: Install dependencies
        run: pip install -r requirements.txt

      # Build sphinx source files
      - name: Build sphinx files
        run: make html

      # Publish build files
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        if: github.ref == 'refs/heads/main'
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./build/html

      # Upload for introspection, useful for pull requests and debugging
      - uses: actions/upload-artifact@v3
        with:
          name: generated-site
          path: public/
```

```bash
# Byte-compiled / optimized / DLL files
__pycache__/
*.py[cod]
*$py.class

# C extensions
*.so

# Sphinx documentation
build/

# Environments
.env
.venv
```

```makefile
# Minimal makefile for Sphinx documentation
#

# You can set these variables from the command line.
SPHINXOPTS    =
SPHINXBUILD   = sphinx-build
SOURCEDIR     = source
BUILDDIR      = build

# Put it first so that "make" without argument is like "make help".
help:
	@$(SPHINXBUILD) -M help "$(SOURCEDIR)" "$(BUILDDIR)" $(SPHINXOPTS) $(O)

.PHONY: help Makefile

github:
	@make html
	@cp -a build/html/. ./docs

# Catch-all target: route all unknown targets to Sphinx using the new
# "make mode" option.  $(O) is meant as a shortcut for $(SPHINXOPTS).
%: Makefile
	@$(SPHINXBUILD) -M $@ "$(SOURCEDIR)" "$(BUILDDIR)" $(SPHINXOPTS) $(O)

```

```yaml
# To get started with Dependabot version updates, you'll need to specify which
# package ecosystems to update and where the package manifests are located.
# Please see the documentation for all configuration options:
# https://help.github.com/github/administering-a-repository/configuration-options-for-dependency-updates

version: 2
updates:
  # Maintain dependencies for GitHub Actions
  - package-ecosystem: "github-actions"
    directory: "/"
    schedule:
      interval: "daily"

  # Maintain dependencies for pipenv
  - package-ecosystem: "pip" # See documentation for possible values
    directory: "/" # Location of package manifests
    schedule:
      interval: "daily"
```
