import React from 'react';
import shape04 from '@/assets/images/shape/shape-04.svg';
import heroImg from '@/assets/images/hero/hero.png';
import shapeYellow from '@/assets/images/shape/shape-01.svg';
import shapeBlue from '@/assets/images/shape/shape-02.svg';
import shapeWaves from '@/assets/images/shape/shape-03.svg';
import { Button } from '@/shared/ui/Button';
import styles from './HeroSection.module.scss';

export const HeroSection = () => {
  return (
    <section className={styles.hero} id="home">
      <div className="container section">
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>We specialize in UI/UX, Web Development, Digital Marketing.</h1>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla magna mauris. Nulla fermentum
            viverra sem eu rhoncus consequat varius nisi quis, posuere magna.
          </p>

          <div className={styles.heroCta}>
            <div className={styles.ctaGroup}>
              <a href="tel:0123456789" className={styles.heroPhone}>
                Call us (0123) 456 – 789
              </a>
              <p className="description">For any question or concern</p>
            </div>
            <Button variant="primary" href="#">
              Get Started Now
            </Button>
          </div>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.heroImageWrapper}>
            <img src={shape04} alt="Decorative background" className={styles.heroShape} />
            <img src={heroImg} alt="Hero" className={styles.heroImage} />
            <img src={shapeYellow} alt="Yellow quarter" className={styles.shapeYellow} />
            <img src={shapeWaves} alt="Waves" className={styles.shapeWaves} />
            <img src={shapeBlue} alt="Blue quarter" className={styles.shapeBlue} />
          </div>
        </div>
      </div>
    </section>
  );
};
