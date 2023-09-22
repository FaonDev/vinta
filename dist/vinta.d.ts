import { glob } from "glob";
export type VintaOptions = {
    onlyDefault?: boolean;
};
/**
 * Perform an asynchronous files import for the specified search pattern.
 * @param path - The search pattern.
 * @param options - Extra options.
 */
export declare function vinta<T>(path: Parameters<typeof glob>[0], options: VintaOptions): Promise<{
    files: string[];
    modules: T[];
}>;
//# sourceMappingURL=vinta.d.ts.map