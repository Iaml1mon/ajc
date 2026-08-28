# Vercel deployment diagnosis

The deployed URL `https://ajd-brown.vercel.app/` currently renders the contents of `server/index.ts` as plain text. It has no interactive elements and does not load the Vite-built React application. The repository is a Vite app whose source entry is `client/index.html` and whose intended frontend build output is `dist/public`, so Vercel needs an explicit build command, output directory, and SPA fallback rewrite. Burger images also currently use Manus-only `/manus-storage/` paths, which will not resolve on Vercel without a public asset source.
