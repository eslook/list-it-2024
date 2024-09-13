This sub project (`api`) within the parent project (`list-it-2024`) is used to serve a fake REST API for the parent project. The `json-server` module works locally without any extra steps. However the parent project is also deployed to Vercel. To use the `json-server` module in the deployed Next.js environment on Vercel, this `json-server-vercel` template from `kitloong` is used.

The project has read and write operations enabled.

For more information about the parent project and the sub project, see the `README.md` in the root of the repository.

For more information about the `json-server-vercel` template, see [kitloong/json-server-vercel](https://github.com/kitloong/json-server-vercel).
