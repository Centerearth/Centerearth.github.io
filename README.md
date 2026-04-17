# Centerearth.github.io

Personal portfolio site for Andrew Nicholls, built with React and hosted on GitHub Pages at [centerearth.github.io](https://centerearth.github.io).

## Overview

Single-page site featuring:
- **Bio** — brief intro and photo
- **Projects** — FIDO2 Attacks, RateMyClass, Rubiks Solver, Chess
- **Footer** — links to GitHub and LinkedIn

## Commands

| Command | Description |
|---|---|
| `npm start` | Run dev server at [localhost:3000](http://localhost:3000) |
| `npm run build` | Build optimized production bundle to `build/` |
| `npm run deploy` | Build and deploy to GitHub Pages (pushes to `main`) |
| `npm test` | Run tests in interactive watch mode |

## Branch Structure

| Branch | Purpose |
|---|---|
| `develop` | Source code — work here |
| `main` | Built site files — managed by `npm run deploy` |

> **Note:** Never manually push source code to `main`. Always deploy via `npm run deploy` from `develop`.
