import { pathToFileURL } from "node:url";
import { glob } from "glob";

export type VintaOptions = {
  onlyDefault?: boolean;
};

/**
 * Perform an asynchronous files import for the specified search pattern.
 * @param path - The search pattern.
 * @param options - Extra options.
 */

export async function vinta<T>(
  path: Parameters<typeof glob>[0],
  options: VintaOptions
) {
  const files = (await glob(path)).map((path) =>
    pathToFileURL(path).toString()
  );

  const modules: T[] = [];

  for (const file of files) {
    const module = await import(file).catch(() => null);

    if (module) {
      if (options?.onlyDefault) {
        if (module.default) modules.push(module.default);
      } else modules.push(module);
    }
  }

  return { files, modules };
}
