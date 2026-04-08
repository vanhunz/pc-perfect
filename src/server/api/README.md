# Server API Layer (Scaffold)

This folder is reserved for server-side handlers and API contracts.

Current project still runs as a Vite SPA, but the codebase is now structured to support splitting into a real client/server setup:

- `src/client`: UI, feature pages, client state, API calls
- `src/server`: server-facing contracts and handlers (to be connected to Express/Nest/Fastify later)

Suggested next step:
1. Move business logic from UI components into `src/server` handlers.
2. Expose endpoints and consume them from `src/client` services.
