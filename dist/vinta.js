"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vinta = void 0;
const node_url_1 = require("node:url");
const glob_1 = require("glob");
/**
 * Perform an asynchronous files import for the specified search pattern.
 * @param path - The search pattern.
 * @param options - Extra options.
 */
async function vinta(path, options) {
    const files = (await (0, glob_1.glob)(path)).map((path) => (0, node_url_1.pathToFileURL)(path).toString());
    const modules = [];
    for (const file of files) {
        const module = await import(file).catch(() => null);
        if (module) {
            if (options?.onlyDefault) {
                if (module.default)
                    modules.push(module.default);
            }
            else
                modules.push(module);
        }
    }
    return { files, modules };
}
exports.vinta = vinta;
//# sourceMappingURL=vinta.js.map