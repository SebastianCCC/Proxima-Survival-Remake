# Requirements

- Bun - 1.3.13 (read `/.tool-version`)
- eslint (usually installed or available as an extension in your editor)
- prettier (either run "on save" or manually)

```bash
bun run format
```

# Setup

Install dependencies and run

```bash
bun install
bun run dev
```

Include a config file for the environment your trying to run.
In the `config/` folder, there should be 2 types of files:

- `index.dev.ts`: contains development variables
- `index.prod.ts`: contains production variables

Copy the `index.dev.ts` file and rename it `index.ts`.

# Styling

Proxima-Survival-Remake uses the following.

- [BEM](https://bem.info/en/methodology/css/)
