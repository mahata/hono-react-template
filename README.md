[![CI - frontend](https://github.com/mahata/hono-react-template/actions/workflows/ci-frontend.yml/badge.svg)](https://github.com/mahata/hono-react-template/actions/workflows/ci-frontend.yml) [![CI - backend](https://github.com/mahata/hono-react-template/actions/workflows/ci-backend.yml/badge.svg)](https://github.com/mahata/hono-react-template/actions/workflows/ci-backend.yml)

# What's this repository?

It's a repository intended to be used as a template repository on GitHub, so that people (especially me!) can quickly start writing full-stack TypeScript apps (i.e. Hono + React apps).

Assumption is that people deploy to Cloudflare Workers once React app is built and put underneath the `backend/` directory. This allows the React application to be served by the Hono backend.

## How to start building your app from this template repository?

(Assuming the latest version of `wrangler` is already available)

In `backend/wrangler.jsonc`, change the following setting:

```jsonc
{
  ...
  "name": "change-my-name-here",
  ...
}
```

Copy `frontend/.env to` `frontend/.env.production`, and update `VITE_API_URL`:

```
VITE_API_URL=https://change-my-name-here.mahata777.workers.dev
```

(Note1: `change-my-name-here` part needs to be the same as the one you set in `backend/wrangler.jsonc`)

(Note2: `mahata777.workers.dev` is my subdomain assigned by Cloudflare. You'd need to change that part too if you are not me 😝)

Then run the following commands:

```
$ make build_fe
$ wrangler login

$ cd backend/
$ wrangler deploy
```

## Settings for Dependabot

This repository contains a GitHub Actions workflow to automatically merge PRs using Dependabot. For this to work, "Allow auto-merge" must be enabled in the GitHub repository settings.

Also, "Allow GitHub Actions to create and approve pull requests" must be checked on GitHub. It's configurable through: `Settings > Actions > General`.
