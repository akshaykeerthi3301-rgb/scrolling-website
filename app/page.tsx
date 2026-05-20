import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import MarqueeSection from '@/components/MarqueeSection';
import WorkSection from '@/components/WorkSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <MarqueeSection />
      <WorkSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
