---
author: Miguel Villa Floran
pubDatetime: 2026-08-31T25:35:08Z
modDatetime: 2026-08-31T25:35:08Z
title: Isaac Lab on DGX Spark
slug: isaaclab-dgx-spark
featured: false
draft: false
tags:
  - isaac lab
  - dgx spark
canonicalURL: https://miguelvf.com/posts/isaaclab-dgx-spark/
description: A guide to installing Isaac Lab on DGX Spark.
---

## Install Isaac Sim 6.0.0 Beta

1. Clone the Isaac Sim repository

   ```sh
   git clone --depth=1 --recursive --branch=develop https://github.com/isaac-sim/IsaacSim
   cd IsaacSim
   git lfs install
   git lfs pull
   ```

2. Build Isaac Sim

   ```sh
   ./build.sh
   ```

## Install Isaac Lab 3.0 Beta

1. Clone the Isaac Lab repository

   ```sh
   git clone --depth=1 --recursive --branch=develop https://github.com/Kaweees/IsaacLab
   cd IsaacLab
   ```

2. Install Isaac Lab

    ```sh
    uv venv --python 3.12
    source .venv/bin/activate
    ./isaaclab.sh --install
    ```

3. Create a symbolic link to the Isaac Sim installation directory.

   ```sh
   ln -sfn "${ISAACSIM_PATH}" "${PWD}/_isaac_sim"
   ls -l "${PWD}/_isaac_sim/python.sh"
   ```
