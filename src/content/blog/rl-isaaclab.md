---
author: Miguel Villa Floran
pubDatetime: 2026-08-31T25:35:08Z
modDatetime: 2026-08-31T25:35:08Z
title: Reinforcement Learning in Isaac Lab
slug: robotics
featured: false
draft: false
tags:
  - robotics
canonicalURL: https://miguelvf.com/posts/robotics/
description: A guide to reinforcement learning in Isaac Lab.
---

$$
\begin{aligned}
\nabla \cdot \mathbf{E} &= \frac{\rho}{\varepsilon_0} \\
\nabla \cdot \mathbf{B} &= 0 \\
\nabla \times \mathbf{E} &= -\frac{\partial \mathbf{B}}{\partial t} \\
\nabla \times \mathbf{B} &= \mu_0\left(\mathbf{J} + \varepsilon_0 \frac{\partial \mathbf{E}}{\partial t}\right)
\end{aligned}
$$

```tikz
\begin{tikzpicture}[
  node distance = 6em, auto, thick,
  block/.style={rectangle, draw, text width=8em, text centered, rounded corners, minimum height=4em}
]
  \node [block] (Agent) {Agent};
  \node [block, below of=Agent] (Environment) {Environment};

  \path [draw, -latex] (Agent.0) --++ (4em,0em) |- node [near start]{Action $a_t$} (Environment.0);
  \path [draw, -latex] (Environment.190) --++ (-6em,0em) |- node [near start] {New state  $s_{t+1}$} (Agent.170);
  \path [draw, -latex] (Environment.170) --++ (-4.25em,0em) |- node [near start, right] {Reward $r_{t+1}$} (Agent.190);
\end{tikzpicture}
```
