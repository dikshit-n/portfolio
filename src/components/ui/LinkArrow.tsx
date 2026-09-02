import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/cn';

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
};

export function LinkArrow({ children, className, ...rest }: Props) {
  return (
    <a
      className={cn(
        'group inline-flex items-center gap-1.5 font-display text-base font-bold',
        className,
      )}
      {...rest}
    >
      <span className="link-anim">{children}</span>
      <ArrowUpRight
        size={16}
        className="text-accent transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </a>
  );
}
