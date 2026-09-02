import { useState } from 'react';
import { Menu } from 'lucide-react';
import { SITE } from '@/data/portfolio';
import { useActiveSection } from '@/hooks/useActiveSection';
import { ThemeToggle } from './ThemeToggle';
import { MobileMenu } from './MobileMenu';
import { cn } from '@/lib/cn';

export type NavLink = {
  label: string;
  href: string;
  external?: boolean;
  chip?: string;
  filled?: boolean;
};

const NAV_LINKS: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Tech Stack', href: '#techstack' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Currently', href: '#currently' },
  { label: 'Contact', href: '#contact' },
  { label: 'Résumé', href: SITE.resumeUrl, external: true, chip: 'PDF' },
  { label: 'Hire me', href: '#contact', filled: true },
];

const SECTION_IDS = ['about', 'techstack', 'experience', 'projects', 'currently', 'contact'];

export function Header() {
  const [open, setOpen] = useState(false);
  const activeId = useActiveSection(SECTION_IDS);

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-50 border-b border-ink bg-paper/90 backdrop-blur',
          'py-3',
        )}
      >
        <div className="wrap flex items-center justify-between gap-4">
          <a
            href="#top"
            className="group flex items-baseline gap-2 text-left"
            aria-label="Back to top"
          >
            <span className="font-display text-lg font-extrabold leading-none tracking-mega">
              {SITE.name}
            </span>
            <span className="eyebrow hidden text-ink-soft sm:inline">/ FRONTEND</span>
          </a>

          <nav
            className="hidden items-center gap-6 lg:flex"
            aria-label="Primary"
          >
            {NAV_LINKS.map((link) => {
              const isAnchor = link.href.startsWith('#');
              const isActive = isAnchor && activeId === link.href.slice(1);
              if (link.filled) {
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className="eyebrow border border-ink bg-ink px-3 py-1.5 text-paper transition-colors hover:border-accent hover:bg-accent"
                  >
                    {link.label}
                  </a>
                );
              }
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  className={cn(
                    'eyebrow py-1 transition-colors',
                    isActive ? 'text-accent' : 'text-ink hover:text-accent',
                  )}
                  aria-current={isActive ? 'true' : undefined}
                >
                  {link.label}
                </a>
              );
            })}
            <ThemeToggle />
          </nav>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="eyebrow inline-flex items-center gap-2 border border-ink px-3 py-1.5"
              aria-expanded={open}
              aria-label="Open menu"
            >
              Index <Menu size={14} strokeWidth={2.25} />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={open} onClose={() => setOpen(false)} links={NAV_LINKS} activeId={activeId} />
    </>
  );
}
