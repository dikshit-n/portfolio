import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { TechStackSection } from '@/components/sections/TechStackSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { ContributionsSection } from '@/components/sections/ContributionsSection';
import { CurrentlySection } from '@/components/sections/CurrentlySection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <TechStackSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContributionsSection />
        <CurrentlySection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
