import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { SECTION_META, TECH_STACK } from '@/data/portfolio';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export function TechStackSection() {
  const { fadeUp, stagger } = useScrollReveal();
  const meta = SECTION_META.techstack!;

  return (
    <section
      id="techstack"
      className="scroll-mt-24 border-y border-ink bg-paper-2 py-20 md:py-28"
    >
      <div className="wrap">
        <SectionHeader
          number={meta.number}
          tag={meta.tag}
          title={meta.title}
          subtitle={meta.subtitle}
        />

        <motion.div
          className="grid grid-cols-1 gap-x-16 gap-y-10 md:grid-cols-2"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          {TECH_STACK.map((cat) => (
            <motion.div
              key={cat.name}
              variants={fadeUp}
              className="border-t-2 border-ink pt-4"
            >
              <div className="mb-4 flex items-baseline gap-3">
                <span className="eyebrow text-accent">{cat.index}</span>
                <h3 className="font-display text-2xl font-bold tracking-mega">
                  {cat.name}
                </h3>
              </div>
              <ul>
                {cat.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-baseline gap-3 py-2 text-lg"
                  >
                    <span>{item}</span>
                    <span aria-hidden="true" className="leader" />
                    <Check
                      size={16}
                      strokeWidth={2.5}
                      className="text-accent"
                    />
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
