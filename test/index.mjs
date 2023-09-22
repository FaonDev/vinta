import { vinta } from "../dist/index.js";

const { modules } = await vinta("test/modules/*.mjs");

console.log(modules);
