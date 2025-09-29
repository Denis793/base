import React from 'react';
import { HeroSection } from '@/widgets/HeroSection';
import { Features } from '@/widgets/Features';
import { AboutSection } from '@/widgets/AboutSection';
import styles from './Home.module.scss';

export const Home = () => {
  return (
    <>
      <main className={styles.home}>
        <div className="container">
          <HeroSection />
          <Features />
          <AboutSection />
        </div>
      </main>
    </>
  );
};
