<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## UI: shadcn first

- Build UI from shadcn/ui components (`components/ui`, style `base-lyra`, Base UI primitives). Load the `shadcn` skill before any UI work.
- Before writing custom markup, check `bunx --bun shadcn@latest search @shadcn -q "<need>"` and add the component with `bunx --bun shadcn@latest add <name>`. Only build a custom component when no registry component fits, and say why.
- Base UI: use `render={<Link />}` (not `asChild`), plus `nativeButton={false}` when a Button renders a non-button element.
- Use `className` for layout only. Don't override component colors or type, and use semantic tokens. Use `flex`/`gap` instead of `space-*`.
