# Important Notes

## Whats next for production grade apps?

This repository is a minimal template for TypeSCript SvelteKit + TailwindCSS projects using Bun as runtime. I chose bun because of its speed and simplicity, but PNPM could be an equally good choice for monorepos or more complex projects.

If I had more time to make it a production grade app, I would:

- Add a database integration with Drizzle ORM: <https://svelte.dev/docs/cli/drizzle>
- Implement user authentication with Lucia, using Github or Google SSO because I don't want to handle with user's password: <https://svelte.dev/docs/cli/lucia>
- Add security headers: <https://github.com/skyf0l/sveltekit-helmet> (sveltekit wrapper around helmet.js)
- Harden the github repo rules/rulesets (I pushed on main branch directly for simplicity here)
- Ensure all tests are passing before deployment, here each push to main deploys directly, regardless of test status
- Design a DevContainer for consistent development environments across team members
- Why not enhancing the codebase security with SAST,SCA and DAST tools + secret and Malware scanning (everyone is ignoring malware scans in code, but it should be as important as other security measures)

## Alternative solutions I considered but didn’t done

I chose not to take advantage of SvelteKit's serverless capabilities by Deploying on AWS Lambda / GCP Cloud Functions, because it looks more complex than just deploying a container on Cloud Run. Here an unofficial workaround to deploy SvelteKit apps in AWS lambda: <https://www.tejusparikh.com/2025/serverless-sveltekit-in-aws-lambda.html>.

Using another Framework like React or Next.js could be more suitable for larger teams because of their popularity and larger ecosystem, but I think SvelteKit is more modern, lightweight and enjoyable to work with.
