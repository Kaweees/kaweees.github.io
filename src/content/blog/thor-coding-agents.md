---
author: Miguel Villa Floran
pubDatetime: 2026-06-03T20:40:08Z
modDatetime: 2026-06-03T20:40:08Z
title: Running Qwen 3.6 on NVIDIA Jetson Thor
slug: thor-coding-agents
featured: false
draft: false
tags:
  - jetson thor
  - qwen
  - vllm
canonicalURL: https://miguelvf.com/posts/thor-coding-agents/
description: Building a High-Performance Coding Agent Stack on NVIDIA's Jetson Thor
---

To run ./run-recipe.sh qwen3.6-35b-a3b-fp8 --solo at boot on a Jetson Thor (which runs Ubuntu/Debian), create a systemd service:

1. Install and build [spark-vllm-docker](https://github.com/eugr/spark-vllm-docker):

   ```sh
   git clone https://github.com/eugr/spark-vllm-docker.git
   cd spark-vllm-docker
   ./build-and-copy.sh
   ```

2. Create a systemd service:

   ```ini file=/etc/systemd/system/vllm-qwen.service
   [Unit]
   Description=vLLM Qwen3.6-35B-A3B-NVFP4
   After=network.target docker.service
   Requires=docker.service

   [Service]
   Type=oneshot
   RemainAfterExit=yes
   ExecStart=/usr/bin/docker run --rm --pull always \
     --name vllm_node \
     --runtime=nvidia --network host \
     vllm/vllm-openai:nightly-aarch64 \
     bash -c "pip install -q 'vllm[audio]' && vllm serve RedHatAI/Qwen3.6-35B-A3B-NVFP4 \
       --gpu-memory-utilization 0.8 \
       --enable-prefix-caching \
       --reasoning-parser qwen3 \
       --enable-auto-tool-choice \
       --tool-call-parser qwen3_coder"
   ExecStop=/usr/bin/docker stop vllm_node

   [Install]
   WantedBy=multi-user.target
   ```

3. Enable the service at boot time:

   ```sh
   sudo systemctl daemon-reload
   sudo systemctl enable vllm-qwen.service
   sudo systemctl start vllm-qwen.service
   ```

4. Benchmark

   ```bash
   uvx --from git+https://github.com/eugr/llama-benchy llama-benchy --base-url http://localhost:8000/v1 --model Qwen/Qwen3.6-35B-A3B-FP8 \
      --depth 0 4096 8192 16384 32768 65535 100000 \
      --pp 2048 \
      --tg 128 \
      --enable-prefix-caching \
      --concurrency 1 2 5 10 \
      --save-result results.csv
   ```

5. Install [OpenCode](https://opencode.ai/) to build coding agents:

   ```sh
   curl -fsSL https://opencode.ai/install | bash
   ```

6. Configure OpenCode to use the local vLLM instance:

   ```json file=.config/opencode/config.json
   {
     "$schema": "https://opencode.ai/config.json",
     "provider": {
       "local": {
         "npm": "@ai-sdk/anthropic",
         "name": "local",
         "options": {
           "baseURL": "http://localhost:8000/v1",
           "apiKey": "dummy"
         },
         "models": {
           "Qwen/Qwen3.6-35B-A3B-FP8": {
             "name": "Qwen3.6-35B-A3B-FP8",
             "tool_call": true,
             "limit": {
               "context": 212992,
               "context": 180224,
               "output": 32768
             }
           }
         }
       }
     },
     "compaction": {
       "auto": true,
       "prune": true,
       "reserved": 16384
     },
     "agent": {
       "build": {
         "temperature": 0.6,
         "top_p": 0.95,
         "max_tokens": 32768
       },
       "plan": {
         "temperature": 0.6,
         "top_p": 0.95,
         "max_tokens": 32768
       }
     },
     "model": "Qwen/Qwen3.6-35B-A3B-FP8",
     "permission": {
       "*": {
         "*": "allow"
       }
     }
   }
   ```
