# blog

## Local Developing

We are using **Bun** as fast all-in-one JS runtime. See instructions to install Bun here: <https://bun.com/docs/installation>.

```sh
bun install
bun run dev
```

Always lint, test and build before committing, else your CI will fail:

```sh
bun run lint
bun run test
bun run build
```

## Local Building

You can build a production-like version of your app using:

```sh
docker build -t blog .
docker run -it -p 3000:3000 blog
```

## Deployment

The app is automatically deployed to <https://skyblog-931432431384.australia-southeast1.run.app> on every push to the `main` branch using GCP Cloud Run.

Fast access for Admins here: <https://console.cloud.google.com/run/detail/australia-southeast1/skyblog/observability/metrics?project=skyf0l-blog&supportedpurview=folder>.
