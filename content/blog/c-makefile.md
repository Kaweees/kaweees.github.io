---
author:
  name: "Miguel Villa Floran"
  website: "https://miguelvf.dev"
title: "Crafting a Robust and Maintainable C Makefile"
description:
  A brief guide to creating from scratch the Makefile template that is used in
  my C projects.
date: 2024-03-29
draft: false
tags:
  - c
  - makefile
  - build-system
---

I'm pretty pedantic about the quality of my code, and I like to keep my projects
organized and maintainable. One of the tools that I use to achieve this is
[GNU Make](https://www.gnu.org/software/make/), which is a powerful build system
that can be used to automate the process of compiling and linking C programs. In
this post, I will show you how to create a simple and robust Makefile template
that can be used in your C projects.

First, create a new file called `Makefile` in the root directory of your
project. Let's start by defining the name of the program that we will be
building.

```makefile
# The name of the program to build.
TARGET := example
```

# Complier

The first thing we need to do is define the compiler and shell that we will be
using. In this example, we will be using `gcc` and `/bin/bash`, respectively. We
will also define the compiler flags that we will be using.

```makefile
# The compiler executable.
CC := gcc
# The compiler flags.
CFLAGS := -Wall -Wextra -Werror -pedantic -std=c99
# The linker executable.
LD := gcc
# The linker flags.
LDFLAGS := -Wall -Wextra -Werror -pedantic -std=c99
# The shell executable.
SHELL := /bin/bash
```

# Testing and Debugging

Next, we will define some variables that will be used for testing and debugging
our project. We will define the name of the test executable, the name of the
debug executable, and provide some flags that will be used by the memory checker
and debugger.

```makefile
# The memory checker executable.
MEMCHECK := valgrind
# The memory checker flags.
MEMCHECK_FLAGS := --leak-check=full --show-leak-kinds=all --track-origins=yes
# The debugger executable.
DEBUGGER := gdb
# The debugger flags.
DEBUGGER_FLAGS :=

# The name of the test input file
TEST_INPUT :=
# The name of the test output file
TEST_OUTPUT :=
# The name of the reference executable
REF_EXE :=
# The name of the reference output file
REF_OUTPUT :=
```

# Directories

One of the cool things about make is we can set varibles to be the output of
shell commands by using the `:=` operator. This way, we can define variables
that refer to directories related to the root directory of the project. We are
going to work under the assumption that the project has the following directory
structure:

```Makefile
.project/ # root directory of the project
├── include/ # header files
├── lib/ # external libraries
├── obj/ # object files
├── src/ # source files
└── target/ # build artifacts
    ├── debug/ # debug build
    └── release/ # release build
```

To achieve this, we can define the following variables:

```makefile
# top directory of project
TOP_DIR := $(shell pwd)
# directory to locate source files
SRC_DIR := $(TOP_DIR)/src
# directory to locate header files
INC_DIR := $(TOP_DIR)/include
# directory to locate external libraries files
LIB_DIR := $(TOP_DIR)/lib
# directory to locate object files
OBJ_DIR := $(TOP_DIR)/obj
# directory to place build artifacts
BUILD_DIR := $(TOP_DIR)/target/release/
```

# Targets

Now that we have defined all the necessary variables, we can start defining the targets that will be used to build our project. The first target that we will define is the `all` target, which will build the program.

```makefile
# The default target.
.PHONY: all
all: $(BUILD_DIR)/$(TARGET)
```
