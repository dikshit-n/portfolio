import { Monitor, Moon, Sun } from 'lucide-react';
import { useTheme, type Theme } from '@/hooks/useTheme';
import { cn } from '@/lib/cn';

const ICONS: Record<Theme, typeof Sun> = {
  light: Sun,
  dark: Moon,
  system: Monitor,
};

const LABEL: Record<Theme, string> = {
  light: 'Light',
  dark: 'Dark',
  system: 'System',
};

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, cycle } = useTheme();
  const Icon = ICONS[theme];

  return (
    <button
      type="button"
      onClick={cycle}
      className={cn(
        'eyebrow inline-flex items-center gap-2 border border-ink px-3 py-1.5 text-ink hover:bg-ink hover:text-paper',
        className,
      )}
      aria-label={`Theme: ${LABEL[theme]} (click to switch)`}
      title={`Theme: ${LABEL[theme]}`}
    >
      <Icon size={14} strokeWidth={2.25} />
      <span className="hidden sm:inline">{LABEL[theme]}</span>
    </button>
  );
}
