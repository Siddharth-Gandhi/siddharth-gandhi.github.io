---
title: "Github Scrape"
date: 2023-09-18T20:03:59-04:00
draft: false
---

# Hi, please read this note

I am [Siddharth](https://www.ssgandhi.com/), a first year MIIS student at Carnegie Mellon's Language Technologies Institute. I am working on neural information retrieval project which [Prof. Jamie Callan](http://www.cs.cmu.edu/~callan/) which involves collecting commit data along with pre and post commit file states. I will be querying Github's API for this data on various big repositories (like PyTorch & Tensorflow) and storing it locally. I will be optimizing it in some time to just clone the repository and build the dataset locally, but for proof of concept, I am doing with API (albeit at a small scale).

The project description, if you are interested is as follows:

> Recent code language models have demonstrated strong capabilities in generating, completing, editing and debugging code. Given certain prompts, they are able to provide human-quality completions. A very capable code language model, however, only captures part of the entire programming workflow. In the case of improving a big code project, after designing some new features, the first thing the programmer would consider is to locate the existing code files to be edited. This is a retrieval problem and is non-trivial in large code bases.
>
> In this student project, we’d like to investigate this retrieval problem. Specifically, we want to tackle the feature request/design doc to code files retrieval problem using the state-of-the-art neural retrieval techniques. The student will mine the training dataset from open source projects, create test cases with human filtering, train neural retrieval models and create retrieval systems. We’d like to produce datasets, open source models, a research paper and a live demo at the end of the project.
