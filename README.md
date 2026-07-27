mise install
trivy fs .
pnpm audit --fix
pnpm install --no-frozen-lockfile
pnpm install
pnpm ci
