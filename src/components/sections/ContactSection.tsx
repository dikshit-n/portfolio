import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, Linkedin, Github } from 'lucide-react';
import { SECTION_META, SITE } from '@/data/portfolio';
import { useScrollReveal } from '@/hooks/useScrollReveal';

type Row = {
  label: string;
  value: string;
  href: string;
  external?: boolean;
  icon: typeof Mail;
};

const ROWS: Row[] = [
  {
    label: 'Email',
    value: SITE.email,
    href: `mailto:${SITE.email}`,
    icon: Mail,
  },
  {
    label: 'LinkedIn',
    value: SITE.linkedin.replace(/^https?:\/\//, ''),
    href: SITE.linkedin,
    external: true,
    icon: Linkedin,
  },
  {
    label: 'GitHub',
    value: SITE.github.replace(/^https?:\/\//, ''),
    href: SITE.github,
    external: true,
    icon: Github,
  },
];

export function ContactSection() {
  const { fadeUp, stagger } = useScrollReveal();
  const meta = SECTION_META.contact!;

  return (
    <section
      id="contact"
      className="scroll-mt-14 border-t-2 border-ink bg-ink py-20 text-paper md:py-28"
    >
      <div className="wrap">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="flex items-center gap-4">
            <span className="eyebrow text-accent">{meta.number}</span>
            <span className="h-px flex-1 bg-paper/40" />
            <span className="eyebrow text-paper/60">{meta.tag}</span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="display-title mt-8 text-[14vw] sm:text-7xl md:text-8xl"
          >
            {meta.title}
            <br />
            <span
              style={{
                WebkitTextStroke: '2px var(--paper)',
                color: 'transparent',
              }}
            >
              something.
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-8 max-w-xl text-xl leading-relaxed text-paper/70"
          >
            Have a role, a project, or an idea worth shipping? I'm{' '}
            <span className="text-accent">open to opportunities</span> and reply
            fast.
          </motion.p>

          <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="border-t border-paper/25">
              {ROWS.map((row) => {
                const Icon = row.icon;
                return (
                  <a
                    key={row.label}
                    href={row.href}
                    target={row.external ? '_blank' : undefined}
                    rel={row.external ? 'noopener noreferrer' : undefined}
                    className="group flex items-center justify-between gap-4 border-b border-paper/25 py-5 transition-colors hover:text-accent"
                  >
                    <div className="flex min-w-0 flex-col gap-0.5">
                      <span className="eyebrow text-paper/50 group-hover:text-accent">
                        {row.label}
                      </span>
                      <span className="break-all font-display text-lg font-bold tracking-mega sm:text-2xl">
                        {row.value}
                      </span>
                    </div>
                    <Icon
                      size={20}
                      strokeWidth={2}
                      className="flex-shrink-0 text-paper/60 group-hover:text-accent"
                    />
                  </a>
                );
              })}
              <motion.p
                variants={fadeUp}
                className="eyebrow mt-8 text-paper/50"
              >
                Based in {SITE.location} — open to roles worldwide.
              </motion.p>
            </div>

            <motion.div variants={fadeUp}>
              <p className="eyebrow text-paper/50">The fastest way to reach me</p>
              <a
                href={`mailto:${SITE.email}?subject=Hello%20Dikshit`}
                className="group mt-3 inline-flex items-center gap-3 border border-paper bg-paper px-6 py-4 font-display text-lg font-bold text-ink transition-colors hover:border-accent hover:bg-accent hover:text-paper"
              >
                <Mail size={20} />
                {SITE.email}
                <ArrowUpRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
