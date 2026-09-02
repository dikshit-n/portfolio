import { useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/cn';

type Props = {
  items: string[];
  className?: string;
};

export function Marquee({ items, className }: Props) {
  const reduced = useReducedMotion() ?? false;

  // When reduced motion is preferred, render a static wrapping grid instead
  // of an infinite scrolling band, so users still get the same information.
  if (reduced) {
    return (
      <div
        className={cn(
          'border-y border-ink bg-ink py-4',
          className,
        )}
        aria-label="Technologies"
      >
        <ul className="wrap flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          {items.map((item) => (
            <li key={item} className="eyebrow flex items-center gap-6 text-paper">
              <span>{item}</span>
              <span className="text-accent" aria-hidden="true">
                ✦
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  // Doubled list for a seamless loop
  const doubled = [...items, ...items];

  return (
    <div
      className={cn(
        'overflow-hidden border-y border-ink bg-ink py-3',
        className,
      )}
      aria-label="Technologies"
    >
      <div className="flex w-max animate-marquee gap-8 whitespace-nowrap will-change-transform">
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="eyebrow flex items-center gap-8 text-paper"
            aria-hidden={i >= items.length}
          >
            <span>{item}</span>
            <span className="text-accent" aria-hidden="true">
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
