const { vinta } = require("../dist/index.js");

(async () => {
  const { modules } = await vinta("test/modules/*.cjs");

  console.log(modules);
})();
