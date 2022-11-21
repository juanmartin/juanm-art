---
title: SAS
date: "2021-05-01T16:20:00.000Z"
description: "Sistema de Administración de Siniestros de Tránsito."
categories: [code]
featuredImage: './sas-512.png'
draft: true
---

I was asked by a client to make an old system responsive. It is a platform in which lawyers can interact with assurance agents and keep up to date with each and all of their current cases related to traffic accidents. This involves users with different roles, a DB to store all the info and lots of forms on the frontend.

It's currently running on production and hosted [here](https://sbtabogados.sastransito.com.ar/). The instance is private so you probably won't have access.

## The stack

The stack consisted in an Apache Tomcat server with a Postgres DB, frontend made with jQuery and some Bootstrap. Since they also needed some changes related to the business logic, I decided to start from scratch using techs I wanted to use (and expand my knowledge on). Also knowing that the developer who started the project was no longer reachable, building on top of an old codebase without documentation seemed more like a problem than a shortcut.

After trying Next.js which was something I wanted to try for some time back then, I figured I could save some time by keeping and building using the old DB (the current content had to be kept). I may have been able to do the job only building a new frontend, but since the API was also a mystery that I would need to reverse-engineer, and there were many security flaws (big ones), I just built everything again based on the existing database. The stack I chose is **PERN** (Postgres, Express, React, Node).

So I went the full stack route and started building the frontend and adding routes to my baby API as I needed. My strength is frontend but every time I could fix something by manipulating data in the backend I felt very _empowered_.

## Auth

After building the main functionality it was time to add authentication and roles. Here I decided I would use auth0 instead of reinventing the wheel. This was something that kept me thinking even after the decision was made. Designing and building an authentication system myself could have been a fun way to learn about this matter in depth, but I was short on time (and money) so I thought it would be faster the other way. Still not sure if it was 😅.

## Next steps

There are a couple of things I'd like to do:
- Refactor the whole thing. Use TypeScript this time.
- Step up a layer of abstraction on the business logic so that it can apply to more projects. Kind of making a framework out of it.
- Dockerize.
- Have a demo instance running.
- Have a way to easily run new instances... $profit.

Maybe one day...
Ping me if you are interested in doing something with this!

---------------------------------

# OLD / DEPRECATED

## The following content has been deprecated as I chose to build the app with a different stack.
Still decided to post it for archive sake. Data hoarder, yes.
### Notes about SAS system using NextJS

Been working on this, almost tearing my hair out lol. Dev and Prod envs were driving me nuts with .env

First I started using .env.local so that I can use a custom config for my local dev environment. Then in Vercel I would manually set my env vars. This way I could keep the codebase equal for all environments.

Something that I realized quite late is that the Feed was statically rendered, which works fine on local dev env since NextJS re-renders every page on dev, but when deployed to production, you may add and delete posts, but the feed wouldn't refresh since it was SSG, had to change it to use getServerSideProps in order to get it working on Vercel production env.


## TODO:

Still working out how to manage environments for local dev, preview staging and prod.

Production is quite clear, guess the _next_ step is to:
- Setup a new branch with a separate domain for staging, `sas-dev.vercel.app`
This way I could test with colleagues before going to final users.

## Issues to solve/understand:
- Database would be the same... should we one-way-sync prod -> staging ?
- There are two OAuth apps created on GitHub but I believe we only need one. Env Vars in Vercel are set to the same prod OAuth app.