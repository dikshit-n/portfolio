import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Lock } from 'lucide-react';
import { PROJECTS, SECTION_META } from '@/data/portfolio';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import type { Project } from '@/types/portfolio';
import { cn } from '@/lib/cn';

function isGitHubUrl(url: string) {
  try {
    const host = new URL(url).hostname.toLowerCase();
    return host === 'github.com' || host === 'www.github.com';
  } catch {
    return false;
  }
}

type ProjectLinkProps = {
  project: Project;
  /** 'lead' = full-size card (paper-on-ink hover); 'row' = compact list entry. */
  variant: 'lead' | 'row';
};

function ProjectLink({ project, variant }: ProjectLinkProps) {
  const url = project.url;

  if (!url) {
    return variant === 'lead' ? (
      <span className="mt-8 inline-flex items-center gap-2 font-display text-lg font-bold text-ink-soft transition-colors group-hover:text-paper/70">
        <Lock size={18} />Private client work
      </span>
    ) : (
      <span className="mt-5 inline-flex items-center gap-1.5 self-start font-display text-base font-bold text-ink-soft">
        <Lock size={14} />Private
      </span>
    );
  }

  const isGh = isGitHubUrl(url);
  const label = isGh ? 'View code' : 'View live';
  const aria = isGh
    ? `Open ${project.name} source on GitHub`
    : `Open ${project.name} live site`;

  const sharedClass = cn(
    'group/link inline-flex items-center gap-2 font-display text-base font-bold',
    variant === 'lead' &&
      'mt-8 text-ink-soft transition-colors group-hover:text-paper',
    variant === 'row' && 'mt-5 self-start',
  );

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={aria}
      className={sharedClass}
    >
      {isGh ? (
        <Github
          size={variant === 'lead' ? 18 : 16}
          strokeWidth={2}
          className="text-accent transition-transform duration-300 group-hover/link:scale-110"
        />
      ) : (
        <ArrowUpRight
          size={variant === 'lead' ? 18 : 16}
          className="text-accent transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
        />
      )}
      <span className="link-anim">{label}</span>
    </a>
  );
}

function LeadCard({ project, variants }: { project: Project; variants: import('framer-motion').Variants }) {
  return (
    <motion.article
      variants={variants}
      className="group relative flex flex-col border border-ink bg-paper p-6 transition-colors hover:bg-ink md:p-8"
    >
      <div className="flex items-center justify-between">
        <span className="eyebrow text-accent">Lead Story — {project.index}</span>
        <span className="eyebrow text-ink-soft transition-colors group-hover:text-paper">
          {project.categories.join(' · ')}
        </span>
      </div>
      <h3 className="display-title mt-4 text-4xl transition-colors group-hover:text-paper md:text-5xl">
        {project.name}
      </h3>
      <p className="mt-4 max-w-md text-[1.05rem] leading-relaxed text-ink-soft transition-colors group-hover:text-paper/80">
        {project.description}
      </p>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="eyebrow border border-rule px-2.5 py-1 transition-colors group-hover:border-paper/40 group-hover:text-paper"
          >
            {t}
          </span>
        ))}
      </div>
      <ProjectLink project={project} variant="lead" />
    </motion.article>
  );
}

function ProjectRow({ project, variants }: { project: Project; variants: import('framer-motion').Variants }) {
  return (
    <motion.article
      variants={variants}
      className="group flex flex-col border-t border-ink py-6"
    >
      <div className="flex items-baseline justify-between gap-3">
        <span className="display-title text-3xl text-ink-soft transition-colors group-hover:text-accent">
          {project.index}
        </span>
        <div className="flex flex-wrap justify-end gap-1.5">
          {project.categories.map((c) => (
            <span key={c} className="eyebrow text-ink-soft">
              {c}
            </span>
          ))}
        </div>
      </div>
      <h3 className="mt-3 font-display text-2xl font-bold leading-tight tracking-mega">
        {project.name}
      </h3>
      <p className="mt-2 flex-1 text-[0.98rem] leading-relaxed text-ink-soft">
        {project.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1">
        {project.tech.map((t) => (
          <span key={t} className="eyebrow text-ink-soft">
            {t}
          </span>
        ))}
      </div>
      <ProjectLink project={project} variant="row" />
    </motion.article>
  );
}

export function ProjectsSection() {
  const { fadeUp, stagger } = useScrollReveal();
  const meta = SECTION_META.projects!;
  const leads = PROJECTS.filter((p) => p.isLead);
  const rest = PROJECTS.filter((p) => !p.isLead);

  return (
    <section
      id="projects"
      className="scroll-mt-5 border-y border-ink bg-paper-2 py-20 md:py-28"
    >
      <div className="wrap">
        <SectionHeader
          number={meta.number}
          tag={meta.tag}
          title={meta.title}
          subtitle={meta.subtitle}
        />

        {leads.length > 0 ? (
          <motion.div
            className="mb-14 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
          >
            {leads.map((p) => (
              <LeadCard key={p.name} project={p} variants={fadeUp} />
            ))}
          </motion.div>
        ) : null}

        <motion.div
          className="grid grid-cols-1 gap-0 md:grid-cols-2 md:gap-x-12"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          {rest.map((p) => (
            <ProjectRow key={p.name} project={p} variants={fadeUp} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
