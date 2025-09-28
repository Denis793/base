import React from 'react';
import styles from './AboutSection.module.scss';
import shape05 from '@/images/shape/shape-05.svg';
import about01 from '@/images/about/about-01.png';
import about02 from '@/images/about/about-02.png';

export const AboutSection = () => {
  return (
    <section className={styles.about}>
      <div className={styles.aboutImages}>
        <img src={shape05} alt="Decorative Shape" />
        <img src={about01} alt="Team working together" />
        <img src={about02} alt="Team collaboration" />
      </div>
      <div className={styles.aboutContent}>
        <h4>Why Choose Us</h4>
        <h2>We Make Our customers happy by giving Best services.</h2>
        <p>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking
          at its layout.
        </p>
        <a href="https://www.youtube.com/watch?v=xcJtL7QggTI" className={styles.videoBtn}>
          SEE HOW WE WORK
        </a>
      </div>
    </section>
  );
};
