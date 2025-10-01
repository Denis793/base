import React from 'react';
import { HeroSection } from '@/widgets/HeroSection';
import { Features } from '@/widgets/Features';
import { AboutSection } from '@/widgets/AboutSection';
import { TeamSection } from '@/widgets/TeamSection';
import { ServicesSection } from '@/widgets/ServicesSection';
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
      </main>
    </>
  );
};
