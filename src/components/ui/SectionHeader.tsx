import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/cn';

type Props = {
  number: string;
  tag: string;
  title: string;
  subtitle?: string;
  className?: string;
};

export function SectionHeader({ number, tag, title, subtitle, className }: Props) {
  const { fadeUp } = useScrollReveal();

  return (
    <motion.div
      className={cn('mb-10 md:mb-14', className)}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
    >
      <div className="flex items-center gap-4">
        <span className="eyebrow text-accent">{number}</span>
        <span className="h-px flex-1 bg-ink" />
        <span className="eyebrow text-ink-soft">{tag}</span>
      </div>
      <h2 className="display-title mt-5 text-5xl sm:text-6xl md:text-7xl">{title}</h2>
      {subtitle ? (
        <p className="mt-4 max-w-2xl text-lg italic text-ink-soft">{subtitle}</p>
      ) : null}
    </motion.div>
  );
}
