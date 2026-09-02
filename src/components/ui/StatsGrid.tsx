import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import type { Stat } from '@/types/portfolio';

type Props = {
  stats: Stat[];
  title?: string;
};

export function StatsGrid({ stats, title = 'By the numbers' }: Props) {
  const { fadeUp, stagger } = useScrollReveal();

  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      className="border border-ink"
    >
      <div className="border-b border-ink bg-ink px-5 py-2">
        <span className="eyebrow text-paper">{title}</span>
      </div>
      <dl className="grid grid-cols-2">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            variants={fadeUp}
            className={[
              'px-5 py-6',
              i % 2 === 0 ? 'border-r border-ink' : '',
              i < stats.length - 2 ? 'border-b border-ink' : '',
              i === stats.length - 2 ? 'border-b border-ink md:border-b-0' : '',
            ]
              .filter(Boolean)
              .join(' ')}
          >
            <dd className="display-title text-5xl text-accent">{stat.value}</dd>
            <dt className="eyebrow mt-2 text-ink-soft">{stat.label}</dt>
          </motion.div>
        ))}
      </dl>
    </motion.div>
  );
}
