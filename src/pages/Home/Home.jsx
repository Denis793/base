import React from 'react';
import { HeroSection } from '@/widgets/HeroSection';
import { Features } from '@/widgets/Features';
import { AboutSection } from '@/widgets/AboutSection';
import { TeamSection } from '@/widgets/TeamSection';
import { ServicesSection } from '@/widgets/ServicesSection';
import { PricingSection } from '@/widgets/PricingSection';
import { PortfolioSection } from '@/widgets/PortfolioSection';
import { PartnersSection } from '@/widgets/PartnersSection';
import { TestimonialsSection } from '@/widgets/TestimonialsSection';
import { StatsSection } from '@/widgets/StatsSection';
import { BlogSection } from '@/widgets/BlogSection';
import styles from './Home.module.scss';

export const Home = () => {
  return (
    <>
      <main className={styles.home}>
        <HeroSection />
        <Features />
        <AboutSection />
        <TeamSection />
        <ServicesSection />
        <PricingSection />
        <PortfolioSection />
        <PartnersSection />
        <TestimonialsSection />
        <StatsSection />
        <BlogSection />
      </main>
    </>
  );
};
