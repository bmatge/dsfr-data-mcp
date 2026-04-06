/**
 * CLI argument parsing — extracted for testability.
 */
/**
 * Get the value following a CLI flag (e.g. --url https://...).
 * Returns undefined if the flag is absent or has no value.
 */
export function getArg(argv, flag) {
    const idx = argv.indexOf(flag);
    if (idx !== -1 && argv[idx + 1] && !argv[idx + 1].startsWith('--')) {
        return argv[idx + 1];
    }
    return undefined;
}
/**
 * Check if a flag is present in the argument list.
 */
export function hasFlag(argv, flag) {
    return argv.includes(flag);
}
