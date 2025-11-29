---
author: Miguel Villa Floran
pubDatetime: 2025-11-29T20:40:08Z
modDatetime: 2025-11-29T18:59:05Z
title: Unitree Setup
slug: unitree-setup
featured: true
draft: true
tags:
  - unitree
  - robotics
canonicalURL: https://miguelvf.com/posts/unitree-setup/
description: A guide to configuring a development environment on the Unitree Go2 Pro.
---

```sh
curl -fsSL https://tailscale.com/install.sh | sh
```

Upon attempting to run `sudo tailscale up --ssh`, you'll run into the following error:

```sh

```

I've never encountered this issues whilst on my x86 or on my Apple Silicon (aarch64) machines, this is unique to ARM machines. I think it has to do something with ARM generally taking a backseat when it comes to supporting machines in that platform. Nonetheless, I've fixed this issue by modifying the Tailscale Systemd daemon:

```sh
sudo mkdir -p /etc/systemd/system/tailscaled.service.d
sudo nvim /etc/systemd/system/tailscaled.service.d/override.conf
```

```ini
[Service]
ExecStart=
ExecStart=/usr/sbin/tailscaled --state=/var/lib/tailscale/tailscaled.state --socket=/run/tailscale/tailscaled.sock --tun=userspace-networking
```

```sh
sudo systemctl daemon-reload
sudo systemctl stop tailscaled
sudo rm -f /run/tailscale/tailscaled.sock
sudo systemctl start tailscaled
sudo systemctl status tailscaled --no-pager
```

```js file=src/config.ts
export const SITE = {
  website: "https://astro-paper.pages.dev/", // replace this with your deployed domain
  author: "Sat Naing",
  profile: "https://satnaing.dev/",
  desc: "A minimal, responsive and SEO-friendly Astro blog theme.",
  title: "AstroPaper",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "Suggest Changes",
    url: "https://github.com/satnaing/astro-paper/edit/main/",
  },
  dynamicOgImage: true, // enable automatic dynamic og-image generation
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Bangkok", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
```

Then we can run the damon

```sh
sudo tailscale up --ssh
tailscale status
```

<!--
 ![Unitree Tailscale](./assets/unitree-tailscale.png) -->

![Unitree Tailscale](@/assets/images/unitree-tailscale.png)
