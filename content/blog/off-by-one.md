---
author: Miguel Villa Floran
title: "Off-By-One Errors and How to Avoid Them"
description: How to never overshoot or undershoot for loops again.
date: 2022-04-23
# cover:
#   src: cover.jpg
draft: false
math: true
comments: true
socialShare: true
tags:
  - programming
  - computer-science
  - algorithms
aliases:
  - /posts/impossible-list/
---

When I was a beginner at programming, I would often find myself struggling with
the implementation of for loops. The amount of times I would need to iterate
through an array, dictionary, iterable, or any given data structure would always
be one more or one less than I anticipated. As a result, I became quite familiar
with the following error message:

```python
IndexError: list index out of range
```

I recently discovered this problem I dealt with had a name: the off-by-one
error. An [off-by-one error](http://en.wikipedia.org/wiki/Off-by-one_error) is a
type of error that occurs when an loop is iterated one more or one less than
intended. Off-by-one errors are typically caused by a mistake in the either
initial value of the loop variable or in the end condition of the loop.
Mathematically this can be represented by

$$
n \pm	1
$$

- where $n$ represents the number of times intended to loop

There two types of off-by-one errors: undershooting and overshooting.
Undershooting occurs when the loop iterates one less time than intended, while
overshooting occurs when the loop iterates one more time than intended. Let's
look at an example of each case, where $n$ represents the amount of times we
intend to loop and $i$ represents the current iteration:

```c
// Case Study A
for (int i = 1; i < n; i++) {
  /* Body of the loop */
}
```

Case A is an example of undershooting, and it will be executed $(n - 1)$ times.
In Case A, $i$ is defined to be one more than intended, which can be proven with
experimentation. For example, if $n$ was defined to be $10$ (and each value of
$i$ was printed), then the following numbers would be the resulting output:

$$1, 2, 3, 4, 5, 6, 7, 8, 9$$

This is because, at that point where $i$ becomes $10$, the conditional statement
$i < n$ becomes false and the loop subsequently terminates one iteration less
than intended. This scenario can be fixed by changing the initial value of $i$
to be $0$ instead of $1$. A good example of overshooting is with the following
brain teaser:

- If you build a straight fence 30 feet long with posts spaced 3 feet apart, how
  many posts do you need?
  - (The common answer is one less than the correct answer)

```c
// Case Study B
for (int i = 0; i <= n; i++) {
  /* Body of the loop */
}
```

Case B is an example of overshooting, amd it will be executed $(n + 1)$ times.
In Case B, $i$ is defined to be one less than intended, which can also be proven
with experimentation. Following our previous thought experiment, the following
would be the resulting output:

$$0, 1, 2, 3, 4, 5, 6, 7, 8, 9, \text{error}$$

This is because, at that point where $i$ becomes $10$, the conditional statement
$i \leq n$ still remains true, resulting in the loop iterating one more than
intended. This scenario can be fixed by changing the initial value of $i$ to be
$1$ instead of $0$. A good example of overshooting is with the following brain
teaser:

- If you have n posts, how many sections are there between them?
  - (The common answer is one more than the correct answer)

Note that a for loop is simply a special case of a while loop where the number
of iterations to be done is already known, whereas a while loop has an
indefinite number of iterations. This means that an off-by-one error can occur
in while loops, although it is less common, as while loop definitions are based
around the output of logical expressions, whereas for loop definitions are based
around the repetition of an iterable object. One of the correct ways to write
the loop is:

```c
for (int i = 0; i < n; i++) {
  /* Body of the loop */
}
```

If you found this post interesting, I would recommend the following as further
reading to learn more about off-by-one errors:

- [Wikipedia article](https://en.wikipedia.org/wiki/Off-by-one_error)
