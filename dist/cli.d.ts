/**
 * CLI argument parsing — extracted for testability.
 */
/**
 * Get the value following a CLI flag (e.g. --url https://...).
 * Returns undefined if the flag is absent or has no value.
 */
export declare function getArg(argv: string[], flag: string): string | undefined;
/**
 * Check if a flag is present in the argument list.
 */
export declare function hasFlag(argv: string[], flag: string): boolean;
