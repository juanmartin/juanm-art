---
title: SAS
date: "2021-05-01T16:20:00.000Z"
description: "Sistema de Administración de Siniestros de Tránsito."
categories: [code]
featuredImage: './sas-512.png'
draft: true
---

# Notes about SAS system using NextJS

Been working on this, almost tearing my hair out lol. Dev and Prod envs were driving me nuts with .env

First I started using .env.local so that I can use a custom config for my local dev environment. Then in Vercel I would manually set my env vars. This way I could keep the codebase equal for all environments.

Something that I realised quite late is that the Feed was statically rendered, which works fine on local dev env since NextJS re-renders every page on dev, but when deployed to production, you may add and delete posts, but the feed wouldn't refresh since it was SSG, had to change it to use getServerSideProps in order to get it working on Vercel production env.


## TODO:

Still working out how to manage environments for local dev, preview staging and prod.

Production is quite clear, guess the _next_ step is to:
- Setup a new branch with a separate domain for staging, `sas-dev.vercel.app`
This way I could test with colleages before going to final users.

## Issues to solve/understand:
- Database would be the same... should we one-way-sync prod -> staging ?
- There are two OAuth apps created on GitHub but I believe we only need one. Env Vars in Vercel are set to the same prod OAuth app.