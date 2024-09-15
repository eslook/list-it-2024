[View Demo](https://list-it-2024.vercel.app/)

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

## Known issues

The following are known issues: warnings or errors.

### "Warning: React does not recognize the `fetchPriority` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `fetchpriority` instead. If you accidentally passed it from a parent component, remove it from the DOM element."

Reproduce by installing modules and running tests.

```bash
npm i
npm run test
```

The warning refers to test-utils `) => render(ui, { wrapper: ProviderWrapper, ...options });`.
The warning only started occurring since the inclusion of `ItemOverview.test.tsx`.
The warning can be found online in several GitHub issues. The issue seems to be occurring throughout the next versions.

Considering the above, and:

- this is a warning rather than an error
- this does not actually affect the result of tests, application, api or storybook

we've decided not to fix this warning at this time.

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
- localize pathnames
- localized meta, opengraph image, etc
- get favicon from json server
- support RTL languages
- humans.txt
- basics
- components
- structures
- update structures, views and pages to use the new styled materials
- further styling

In summary, I first set up the bare basics of the project, after which I could set up tooling to make the workflow smoother. Then, I worked on the skeleton of the application, creating a functional app that didn't have design and had only a few components. This included implementing routing, localization, data fetching, and adding features like item search. This process took around 4-6 hours in parts, give or take some dinners and walks.

Once the main requirements were met, I felt comfortable spending time on the design part. I'm not a designer, so I typically browse Dribbble for inspiration and blend ideas into a design in Figma. That was not needed in this case, as I could match the style of the provided website. The design part also involved splitting the code into reusable materials, starting with basic elements, following Atomic Design principles, and progressing to components and structures, while incrementally adding features. I spent around 4-6 hours on Sunday on this, give or take some baking, cooking, walking and gaming breaks. This took more time than typical development since I did not have or create a one-to-one design in Figma, as that wouldn't add technical value to the assignment.

Overall, I'm happy with the first part of the assignment and content with the visual result. I decided not to spend more time on refining the design, as it wouldn't add technical value and would defeat the purpose of the assignment. I also decided not to do bonus end-to-end testing, as I have limited experience with it and felt it was more important to focus on showcasing the skills I do have.

## Roadmap

The following materials are on the roadmap:

- material: icon material with predefined icons from library
- ...

The following features are on the roadmap:

- style: design for cards
- data: caching fetched items
- data: delay the success of calls after actions like delete, and show a loader in the button while delayed
- data: show errors in toasts instead of redirecting to error page
- storybook: expand storybook with actions for the api calls in the overview structures
- lists overview: add list overview with full item info of items on list. using intercepting routes, on list click, open list overview
- item overview: if item does not exist, don't show error page, show notfound (serverside and clientside)
- item overview: click on category/brand to go to items overview filtered by category/brand
- items overview: filtering on category and brand for items
- items overview: add to list instead of having to click through
- items overview: using intercepting routes, click on item to open item overview in modal
- items overview: pagination for items
- header: theme switcher to switch between different visual themes of the app, ie favicon is via json-server, have CSS variables also via json-server
- login: login feature
- login: merge user's logged out wishlists with logged in wishlists when logging in
- ...
