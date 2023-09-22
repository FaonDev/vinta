# Vinta

## Import directories with one line, seriously.

```sh-session
bun add vinta
npm add vinta
pnpm add vinta
yarn add vinta
```

# Quick Start:

```js
// Or require for CommonJS modules
import { vinta } from "vinta";

const { modules } = await vinta("someFolder/**/*.js");

console.log(modules);
```

With TypeScript

```ts
import { vinta } from "vinta";

const { modules } = await vinta("someFolder/**/*.ts");

console.log(modules);
```

## License

Refer to the [LICENSE](LICENSE).
