import { motion } from 'framer-motion';
import { SECTION_META, STATS, SUMMARY } from '@/data/portfolio';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { StatsGrid } from '@/components/ui/StatsGrid';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export function AboutSection() {
  const { fadeUp, stagger } = useScrollReveal();
  const meta = SECTION_META.about!;

  return (
    <section id="about" className="wrap scroll-mt-24 py-20 md:py-28">
      <SectionHeader number={meta.number} tag={meta.tag} title={meta.title} />

      <motion.div
        className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-10"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
      >
        <motion.div variants={fadeUp} className="md:col-span-7">
          <p className="text-xl leading-relaxed text-ink md:text-2xl md:leading-relaxed">
            {SUMMARY}
          </p>
        </motion.div>
        <motion.div variants={fadeUp} className="md:col-span-5">
          <StatsGrid stats={STATS} />
        </motion.div>
      </motion.div>
    </section>
  );
}
