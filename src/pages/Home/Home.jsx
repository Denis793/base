import React from 'react';
// import { Features } from '@/components/Features';
// import { AboutSection } from '@/components/AboutSection';
import shape04 from '@/images/shape/shape-04.svg';
import heroImg from '@/images/hero/hero.png';
import styles from './Home.module.scss';

export const Home = () => {
  return (
    <main className={styles.home}>
      <section className={styles.hero}>
        <div className={styles.heroImages}>
          <img src={shape04} alt="shape" />
          <img src={heroImg} alt="Hero" />
        </div>
        <div className={styles.heroContent}>
          <h1>We specialize in UI/UX, Web Development, Digital Marketing.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla magna mauris. Nulla fermentum
            viverra sem eu rhoncus consequat varius nisi quis, posuere magna.
          </p>
          <div className={styles.cta}>
            <a href="#" className={styles.btnPrimary}>
              Get Started Now
            </a>
            <span>
              <a href="tel:0123456789" className={styles.phone}>
                Call us (0123) 456 – 789
              </a>
              <span>For any question or concern</span>
            </span>
          </div>
        </div>
      </section>

      {/* <Features />

      <AboutSection /> */}
    </main>
  );
};
