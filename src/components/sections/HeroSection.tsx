import { motion } from 'framer-motion';
import { ArrowDownRight, FileText, MapPin } from 'lucide-react';
import { HERO,
  // MARQUEE_TECH,
SITE } from '@/data/portfolio';
// import { Marquee } from '@/components/ui/Marquee';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export function HeroSection() {
  const { fadeUp, stagger } = useScrollReveal();

  return (
    <section
      id="top"
      className="relative overflow-hidden"
    >
      <div className="wrap pt-10 md:pt-16">
        {/* Meta strip */}
        <motion.div
          className="flex flex-wrap items-center justify-between gap-y-2 border-b border-ink pb-3"
          variants={fadeUp}
          initial="hidden"
          animate="show"
        >
          <span className="eyebrow flex items-center gap-1.5 text-ink-soft">
            <MapPin size={12} strokeWidth={2.5} className="text-accent" />
            {SITE.location}
          </span>
          <span className="eyebrow hidden text-ink-soft sm:inline">{SITE.edition.toUpperCase()}</span>
          <span className="eyebrow flex items-center gap-1.5 text-ink-soft">
            {HERO.available ? (
              <>
                <span className="inline-block h-2 w-2 animate-blink rounded-full bg-accent" />
                Available for hire
              </>
            ) : (
              <>
                <span className="inline-block h-2 w-2 rounded-full bg-ink-soft" />
                Open to conversations
              </>
            )}
          </span>
        </motion.div>

        {/* Name + tagline */}
        <div className="relative pt-6 md:pt-10">
          <motion.p
            className="eyebrow mb-3 text-accent md:mb-5"
            variants={fadeUp}
            initial="hidden"
            animate="show"
          >
            Frontend Engineer — Portfolio
          </motion.p>

          <motion.h1
            className="display-title -tracking-[0.05em]"
            variants={stagger}
            initial="hidden"
            animate="show"
          >
            <motion.span
              variants={fadeUp}
              className="block text-[13vw] sm:text-[11vw] md:text-[10vw] lg:text-[7rem] xl:text-[8rem] 2xl:text-[9rem]"
            >
              {HERO.firstName}
            </motion.span>
            <motion.span
              variants={fadeUp}
              className="block text-[13vw] text-accent sm:text-[11vw] md:text-[10vw] lg:text-[7rem] xl:text-[8rem] 2xl:text-[9rem]"
              style={{
                WebkitTextStroke: '2px var(--ink)',
                color: 'transparent',
              }}
            >
              {HERO.lastName}
            </motion.span>
          </motion.h1>

          <motion.div
            className="mt-8 grid grid-cols-1 gap-8 md:mt-12 md:grid-cols-12 md:gap-10"
            variants={stagger}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={fadeUp} className="md:col-span-9">
              <p className="max-w-2xl border-l-2 border-accent pl-5 text-lg leading-relaxed text-ink md:text-xl">
                {HERO.tagline}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-2 border border-ink bg-ink px-6 py-3 font-display text-base font-bold text-paper transition-colors hover:border-accent hover:bg-accent"
                >
                  View Projects
                  <ArrowDownRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                  />
                </a>
                <a href="#contact" className="font-display text-base font-bold link-anim">
                  Let's Connect
                </a>
                <a
                  href={SITE.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-display text-base font-bold link-anim"
                >
                  <FileText size={17} className="text-accent" />
                  Résumé
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="mt-12 md:mt-16">
        {/* <Marquee items={MARQUEE_TECH} /> */}
      </div>
    </section>
  );
}
