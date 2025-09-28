import React from 'react';
import shape04 from '@/images/shape/shape-04.svg';
import heroImg from '@/images/hero/hero.png';
import shapeYellow from '@/images/shape/shape-01.svg';
import shapeBlue from '@/images/shape/shape-02.svg';
import shapeWaves from '@/images/shape/shape-03.svg';
import styles from './Home.module.scss';

export const Home = () => {
  return (
    <>
      <main className={styles.home}>
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>We specialize in UI/UX, Web Development, Digital Marketing.</h1>
              <p className={styles.heroText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla magna mauris. Nulla fermentum
                viverra sem eu rhoncus consequat varius nisi quis, posuere magna.
              </p>
              <div className={styles.ctaGroup}>
                <a href="#" className={styles.btnPrimary}>
                  Get Started Now
                </a>
                <div>
                  <a href="tel:0123456789" className={styles.heroPhone}>
                    Call us (0123) 456 – 789
                  </a>
                  <p className={styles.heroSubtext}>For any question or concern</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.heroImageWrapper}>
              <img src={shape04} alt="Decorative background" className={styles.heroShape} />
            </div>
            <img src={heroImg} alt="Hero" className={styles.heroImage} />
            <img src={shapeYellow} alt="Yellow quarter" className={styles.shapeYellow} />
            <img src={shapeWaves} alt="Waves" className={styles.shapeWaves} />
            <img src={shapeBlue} alt="Blue quarter" className={styles.shapeBlue} />
          </div>
        </section>
      </main>
    </>
  );
};
