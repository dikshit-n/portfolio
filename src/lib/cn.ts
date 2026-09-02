// Tiny className joiner. Avoids adding `clsx` as a dep.
export function cn(
  ...args: Array<string | number | boolean | null | undefined | false>
): string {
  return args.filter(Boolean).join(' ');
}
