import { motion } from 'framer-motion';
import { SECTION_META, EXPERIENCE } from '@/data/portfolio';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Chip } from '@/components/ui/Chip';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export function ExperienceSection() {
  const { fadeUp, stagger } = useScrollReveal();
  const meta = SECTION_META.experience!;

  return (
    <section id="experience" className="wrap scroll-mt-5 py-20 md:py-28">
      <SectionHeader
        number={meta.number}
        tag={meta.tag}
        title={meta.title}
        subtitle={meta.subtitle}
      />

      <motion.div
        className="border-t-2 border-ink"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
      >
        {EXPERIENCE.map((role) => (
          <motion.article
            key={`${role.company}-${role.period}`}
            variants={fadeUp}
            className="grid grid-cols-1 gap-6 border-b border-ink py-8 md:grid-cols-12 md:gap-8 md:py-10"
          >
            <div className="md:col-span-4">
              <div className="flex items-center gap-3">
                <span className="display-title text-4xl text-accent">{role.index}</span>
                {role.chip ? <Chip className="border-ink">{role.chip}</Chip> : null}
              </div>
              <p className="eyebrow mt-4 text-ink-soft">{role.period}</p>
              <h3 className="mt-2 font-display text-2xl font-extrabold leading-tight tracking-mega md:text-3xl">
                {role.company}
              </h3>
              <p className="mt-1 text-lg italic text-ink-soft">{role.title}</p>
              <p className="mt-1 eyebrow text-ink-soft">{role.location}</p>
            </div>
            <div className="md:col-span-8">
              <ul className="space-y-3 md:columns-2 md:gap-8 md:space-y-0">
                {role.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="mb-3 flex gap-3 break-inside-avoid text-[1.05rem] leading-relaxed"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 flex-shrink-0 bg-accent"
                    />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
