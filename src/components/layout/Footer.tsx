import { SITE } from '@/data/portfolio';

export function Footer() {
  return (
    <footer className="border-t border-ink py-8">
      <div className="wrap flex flex-col items-start justify-between gap-2 text-ink-soft sm:flex-row sm:items-center">
        <p className="eyebrow">© {new Date().getFullYear()} {SITE.name}</p>
        <p className="eyebrow">Built with React + Vite · Editorial edition</p>
      </div>
    </footer>
  );
}
