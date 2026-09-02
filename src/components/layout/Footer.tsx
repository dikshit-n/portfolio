import { SITE } from '@/data/portfolio';

export function Footer() {
  return (
    <footer className="border-t border-ink py-8">
      <div className="wrap flex flex-col items-start justify-between gap-2 text-ink-soft sm:flex-row sm:items-center">
        <p className="eyebrow">© {new Date().getFullYear()} {SITE.name} · All rights reserved</p>
        <p className="eyebrow">Tamil nadu, India · Available worldwide</p>
      </div>
    </footer>
  );
}
