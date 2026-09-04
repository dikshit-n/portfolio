import { motion } from 'framer-motion';
import { Eye, GitMerge, Github, Star } from 'lucide-react';
import { CONTRIBUTIONS, SECTION_META } from '@/data/portfolio';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/cn';
import type { Contribution, ContributionType } from '@/types/portfolio';

const TYPE_META: Record<
  ContributionType,
  { label: string; icon: typeof GitMerge; tone: 'positive' | 'neutral' }
> = {
  merged: { label: 'Merged', icon: GitMerge, tone: 'positive' },
  review: { label: 'In review', icon: Eye, tone: 'neutral' },
};

function ContributionCard({
  contribution,
  variants,
}: {
  contribution: Contribution;
  variants: import('framer-motion').Variants;
}) {
  const meta = TYPE_META[contribution.type];
  const Icon = meta.icon;

  return (
    <motion.a
      href={contribution.url}
      target="_blank"
      rel="noopener noreferrer"
      variants={variants}
      aria-label={`View ${contribution.owner}/${contribution.repo} on GitHub`}
      className="group relative flex h-full flex-col border border-ink bg-paper p-6 transition-colors hover:bg-ink md:p-8"
    >
      {/* Top row: status badge + stars */}
      <div className="flex items-center justify-between gap-3">
        <span
          className={cn(
            'eyebrow inline-flex items-center gap-1.5 border px-2 py-1',
            meta.tone === 'positive'
              ? 'border-accent text-accent'
              : 'border-ink text-ink',
          )}
        >
          <Icon size={12} strokeWidth={2.5} />
          {meta.label}
        </span>
        <span className="eyebrow inline-flex items-center gap-1 text-ink-soft transition-colors group-hover:text-paper">
          <Star
            size={11}
            strokeWidth={2.5}
            className="transition-colors group-hover:text-accent"
          />
          {contribution.stars}
        </span>
      </div>

      {/* Repo name */}
      <h3 className="display-title mt-8 break-words text-3xl transition-colors group-hover:text-paper md:text-4xl">
        <span className="text-ink transition-colors group-hover:text-paper">
          {contribution.owner}
        </span>
        <span className="text-accent">/</span>
        <span className="text-accent">{contribution.repo}</span>
      </h3>

      {/* Description */}
      <p className="mt-4 flex-1 text-[1.05rem] leading-relaxed text-ink-soft transition-colors group-hover:text-paper/80">
        {contribution.description}
      </p>

      {/* Bottom CTA */}
      <span className="mt-8 inline-flex items-center gap-2 font-display text-base font-bold text-ink-soft transition-colors group-hover:text-paper">
        <Github
          size={16}
          strokeWidth={2}
          className="text-accent transition-transform duration-300 group-hover:scale-110"
        />
        <span className="link-anim">View contribution</span>
      </span>
    </motion.a>
  );
}

export function ContributionsSection() {
  const { fadeUp, stagger } = useScrollReveal();
  const meta = SECTION_META.contributions!;

  return (
    <section id="contributions" className="wrap scroll-mt-24 py-20 md:py-28">
      <SectionHeader
        number={meta.number}
        tag={meta.tag}
        title={meta.title}
        subtitle={meta.subtitle}
      />

      <motion.div
        className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
      >
        {CONTRIBUTIONS.map((c) => (
          <ContributionCard key={c.url} contribution={c} variants={fadeUp} />
        ))}
      </motion.div>
    </section>
  );
}
