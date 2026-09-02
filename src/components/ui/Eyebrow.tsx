import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/cn';

type Props = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode;
};

export function Eyebrow({ children, className, ...rest }: Props) {
  return (
    <span className={cn('eyebrow', className)} {...rest}>
      {children}
    </span>
  );
}
