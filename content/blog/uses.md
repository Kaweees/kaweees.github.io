---
author:
  name: "Miguel Villa Floran"
  website: "https://miguelvf.dev"
title: "The Things I Use"
description: The wonderful world of things I use to make my life easier.
date: 2023-08-27
# cover:
#   src: cover.jpg
draft: false
math: false
tags:
  - uses
  - tools
  - software
  - hardware
  - dotfiles
aliases:
  - /posts/uses/
---

> Getting closer to how your environment actualy works will only expand your
> mind <br> — <cite>Michael B. Paulson, otherwise known as
> [ThePrimeagen](https://www.youtube.com/@ThePrimeagen)</cite>

This page was last edited on **August 14, 2023**

My former roomate and good friend,
[Hayden Buscher](https://techno-sorcery.com/), recently made a
[post](https://techno-sorcery.com/coolstuff/things.html) about the things he
uses to stay productive. Giving credit where its due, I thought it was a great
idea, so I decided to give my own spin on it.

This list is the fruits of my due diligence and research into finding the right
tools for my use cases. I hope it helps you find the right tools for you.

# Hardware

## Computer

The laptop I use is a is a Gigabyte AERO 16 OLED creator laptop, which features
a Intel 12th Gen i7 Processor, and a NVIDIA GeForce RTX 3070 Ti Graphics Card. I
love the anodized alumnium finish on the chasis, its sturdy, aesthetically
pleasing, and easy to clean. The OLED screen is gorgeous, I have become spolied
by such beautiful screens and stuggle looking at normal High Definition LED
screens. People passing by or in class will look at my screen and compliment it
(that's how you know its good, who in their right mind would do that). As with
all OLED screens, scren burn is a real and legitmate concern I struggle with at
times, but it is a skill issue I have solved by autohiding my dock and with
screen savers, and in dire situations [this](https://youtu.be/WJaRHJX4xYA)
video. The keyboard is a joy to type on, and the trackpad is smooth and
responsive, but both get dirty quickly. The dongle provided by Gigabyte was
filmsy, and cheaply made, so I replaced it with a USB-C hub from Amazon. The
battery lasts about 3-4 hours on a full charge, which is fine for my use cases,
but I wish it lasted longer. I've had this laptop for about a year now, and I'm
very happy with it and would recommend it to anyone looking for a new laptop.

## Mobile Devices

My phone isn't anything special, so I'm not going to talk about it. I use a iPad
of the 10.2" variety (9th generation). I use it for reading and taking notes in
class. Honestly, this felt like a missing piece of my workflow, and I'm glad I
got it. With a paper-type screen protector, I get the feel of writing on paper,
the clarity and beauty of a digital screen, and the syncing and backup of the
cloud on a screen the size of a notebook. I use a knockoff Apple Pencil, and it
works fine. For note taking, I use the app
[Goodnotes](https://www.goodnotes.com/) with the lifetime subcription.

# Software

## Operating System

Wow, what an easy and not at all controversial topic to answer... Welp, here we
go. I technically dual boot Windows 11 (ew) and
[Ubuntu 22.04.2 LTS](https://wiki.ubuntu.com/Releases), also known as Jammy
Jellyfish, but so much of my time is spent on Ubuntu that I'm just going to talk
about that. My only gripes with it are the graphics drivers for my Nvidia GPU,
but this is resolved by the proprietary drivers from Nvidia provided by Ubuntu.

I've come to notice that when it comes to the tools I use (especially when it
comes to software), usage time and maintainance/stability are inversely
proportional to the customizability the tool provides. The more customization is
provided in software, the more time is spent configuring and mataining it, and
in worst-case scenarios, the more unstable it becomes. Because of this, less
time is spend actually using it.

My operating system is a tool, and as all good tools should, the distro I use
should be one that leverages this relationship, so I can manage how the software
is used, and not how it works. This is why I am probably not ever going to be an
Arch Linux user. Its very impressive how quickly Arch Linux packages maintainers
innovate and release changes, and pacman is a great package manager, but I do
not have the time nor the patience to maintain my broken system when I forget to
update after a week.

On the other end of the spectrum, Ubuntu works out of the box, but its quite
bloated with software I will never use or need. I used to be a bit of a distro
hopper, but like an old pair of jeans, I always come back to Ubuntu for its ease
of use and stability. For the most part, it just works.

One distro that has caught my eye and I've been meaning to try is Debian,
specifically [Debian 12 (Bookworm)](https://www.debian.org/releases/) . Its
seems to hit the sweet spot of stability and customizability between Arch and
Ubuntu, and I've heard great things about from Hayden and
[Noah Oveson](https://github.com/sonofoven).

## Window Manager

I'm not a fan of the default GNOME desktop environment, I'm a tiling window
enjoyer. I like to have full control over my windows, so I use the
[i3 window manager](https://i3wm.org/). However, I plan on switching to dwm in
the future, as I've heard it is more stable and faster than i3.

## Coding Font

I cannot stress how elgalant and beautiful the font
[MonoLisa](https://www.monolisa.dev/) is. I use it for everything, from my code
editor to my terminal. MonoLisa definately lives up to its branding of "font
follows function". Being a monospaced font, each of the characters are the same
width and its ligatures, which is the combination of two or more characters into
a single character, provide a great reading experience and look cool. I patch
MonoLisa into a [Nerd Font](https://www.nerdfonts.com/) by using this custom
[patching script](https://github.com/daylinmorgan/monolisa-nerdfont-patch). I
highly recommend it.
