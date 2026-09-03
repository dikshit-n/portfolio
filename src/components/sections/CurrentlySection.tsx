import { motion } from 'framer-motion';
import { Briefcase, Users, BookOpen, MessageCircle } from 'lucide-react';
import { CURRENTLY, SECTION_META } from '@/data/portfolio';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/cn';

type Cell = {
  icon: typeof Briefcase;
  label: string;
  value: string;
};

const CELLS: Cell[] = [
  { icon: Briefcase, label: 'Working on', value: CURRENTLY.working },
  { icon: Users, label: 'Collaborating on', value: CURRENTLY.collab },
  { icon: BookOpen, label: 'Learning', value: CURRENTLY.learning },
  { icon: MessageCircle, label: 'Ask me about', value: CURRENTLY.ask },
];

export function CurrentlySection() {
  const { fadeUp, stagger } = useScrollReveal();
  const meta = SECTION_META.currently!;

  return (
    <section id="currently" className="wrap scroll-mt-5 py-20 md:py-28">
      <SectionHeader number={meta.number} tag={meta.tag} title={meta.title} />

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
      >
        {CELLS.map((cell, i) => {
          const Icon = cell.icon;
          return (
            <motion.div
              key={cell.label}
              variants={fadeUp}
              className={cn(
                'border-t-2 border-ink p-6',
                i < CELLS.length - 1 ? 'md:border-r md:border-r-ink' : '',
              )}
            >
              <div className="flex h-10 w-10 items-center justify-center border border-ink">
                <Icon size={20} strokeWidth={2} className="text-accent" />
              </div>
              <p className="eyebrow mt-4 text-ink-soft">{cell.label}</p>
              <p className="mt-2 font-display text-xl font-bold leading-snug tracking-mega">
                {cell.value}
              </p>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.p
        className="mt-10 max-w-2xl border-l-2 border-accent pl-5 text-xl italic leading-relaxed text-ink-soft"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
      >
        I love exploring new ideas, contributing to open source, and shipping
        tools that make engineers' lives a little easier.
      </motion.p>
    </section>
  );
}
