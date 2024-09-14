Welcome to List It 2024! This project is built with React, Next.js and TypeScript, testing is done using Jest and it comes with a Storybook app and a JSON server. It is deployed with Vercel.

## Getting Started

To run the development server, use:

```bash
npm run dev
```

After running the server, open [http://localhost:3000](http://localhost:3000) in your browser to see the Next.js app.

It also comes with a Storybook app, to run it, use:

```bash
npm run storybook
```

Afterwards, open [http://localhost:6006](http://localhost:6006) in your browser to see the Storybook app.

The project uses a [json-server](https://www.npmjs.com/package/json-server), from within the `api` folder. To run it, use:

```bash
cd api
npm start
```

Afterwards, open [http://localhost:8080](http://localhost:8080) in your browser to see the JSON server.

Since `json-server` is in beta, we're using the stable v0. View stable v0 documentation [here](https://github.com/typicode/json-server/tree/v0).

## Deploy on Vercel

Deploy the Next.js project to Vercel using the Framework Preset for `Next.js`.

Deploy the `api` to Vercel using the Framework Preset for`Other`, set `Root Directory` to `./api` and set `Include files outside the root directory in the Build Step.` to `Disabled`.

See [Vercel](https://vercel.com/docs/deployments/overview) for the latest documentation.

## Changelog

See the `CHANGELOG.md` in the root of the project for changes between automated releases of the package.

Features have been roughly added in the following order:

- nextjs with typescript in expected file structure
- formatters and linters
- unit testing with jest
- storybook
- husky hooks
- github pipelines
- routing
- json server
- localization
- data fetching
- search on items
- post, put and delete of lists
- manage item in list on item overview
- stale while revalidating on lists

## Roadmap

The following materials are on the roadmap:

- image material to wrap the next/image and handle settings based on url
- link material to wrap next/link to handle any additional features or styling
- icon material with predefined icons from library
- ...

The following features are on the roadmap:

- overall design
- theme switcher to switch between different visual themes of the app
- login feature
- merge user's logged out wishlists with logged in wishlists when logging in
- ...
