---
author: Miguel Villa Floran
pubDatetime: 2026-02-23T20:40:08Z
modDatetime: 2026-02-23T18:59:05Z
title: Jetson Thor Quick Start Guide
slug: jetson-thor
featured: true
draft: false
tags:
  - jetson
  - thor
canonicalURL: https://miguelvf.com/posts/jetson-thor/
description: A guide to getting started with the Jetson Thor Dev Kit.
---

I've recently purchased a [Jetson Thor Dev Kit](https://www.nvidia.com/en-us/autonomous-machines/embedded-systems/jetson-thor/) for some projects, and
[Quick Start Guide](https://docs.nvidia.com/jetson/agx-thor-devkit/user-guide/latest/quick_start.html)

Upon rebooting my Thor, the machine became unbearably slow. Upon inspecting `sudo tegrastats`, I realized that the machine defaults the low-power nvpmodel profile. I paid for the whole Thor, I'm gonna use the whole Thor. Let's fix this by creating a systemd service to set the clocks to the max profile.

```sh
sudo vim /etc/systemd/system/jetson-clocks.service
```

```ini file=/etc/systemd/system/jetson-clocks.service
[Unit]
Description=Jetson Clocks
After=multi-user.target

[Service]
Type=oneshot
ExecStart=/bin/bash -c "/usr/sbin/nvpmodel -m 0 && /usr/bin/jetson_clocks"
RemainAfterExit=yes

[Install]
WantedBy=multi-user.target
```

Enable the service at boot time:

```sh
sudo systemctl enable jetson-clocks.service
```
