import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/cn';

type Props = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode;
  variant?: 'default' | 'solid';
};

export function Chip({ children, className, variant = 'default', ...rest }: Props) {
  return (
    <span
      className={cn(
        'eyebrow inline-flex items-center gap-2 border px-2.5 py-1',
        variant === 'default' && 'border-rule text-ink-soft',
        variant === 'solid' && 'border-ink bg-ink text-paper',
        className,
      )}
      {...rest}
    >
      {children}
    </span>
  );
}
