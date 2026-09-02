import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import type { NavLink } from './Header';

type Props = {
  open: boolean;
  onClose: () => void;
  links: NavLink[];
  activeId: string;
};

export function MobileMenu({ open, onClose, links, activeId }: Props) {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          ref={dialogRef}
          className="fixed inset-0 z-[60] flex flex-col bg-paper text-ink lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
        >
          <div className="flex items-center justify-between border-b border-ink px-5 py-3">
            <span className="eyebrow">Index</span>
            <button
              type="button"
              onClick={onClose}
              className="eyebrow inline-flex items-center gap-2 border border-ink px-3 py-1.5"
              aria-label="Close menu"
            >
              Close <X size={14} strokeWidth={2.25} />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto" aria-label="Primary">
            <ul className="divide-y divide-rule">
              {links.map((link) => {
                const isActive = link.href.startsWith('#') && activeId === link.href.slice(1);
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={onClose}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      className={[
                        'flex items-baseline justify-between gap-3 px-5 py-5 font-display text-3xl font-extrabold tracking-mega',
                        isActive ? 'text-accent' : 'text-ink hover:text-accent',
                      ].join(' ')}
                      aria-current={isActive ? 'true' : undefined}
                    >
                      <span>{link.label}</span>
                      {link.chip ? (
                        <span className="eyebrow text-ink-soft">{link.chip}</span>
                      ) : null}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
