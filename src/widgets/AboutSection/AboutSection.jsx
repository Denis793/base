import React from 'react';
import { motion } from 'framer-motion';
import { fadeLeft, fadeRight } from '@/shared/lib/animations';
import shape05 from '@/assets/images/shape/shape-05.svg';
import shape06 from '@/assets/images/shape/shape-06.svg';
import shape07 from '@/assets/images/shape/shape-07.svg';
import about01 from '@/assets/images/about/about-01.png';
import about02 from '@/assets/images/about/about-02.png';
import about03 from '@/assets/images/about/about-03.png';
import playIcon from '@/assets/images/icons/icon-play.svg';
import styles from './AboutSection.module.scss';

export const AboutSection = () => {
  return (
    <>
      <section className="section" id="about">
        <div className="container">
          <div className={styles.aboutWrapper}>
            <motion.div
              className={styles.aboutImages}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeLeft}
            >
              <div className={styles.imageWrapper}>
                <img className={styles.aboutImg} src={about01} alt="Team working together" />
                <img className={styles.aboutImg} src={about02} alt="Team collaboration" />
                <img className={styles.aboutImg} src={about03} alt="Team brainstorming" />
              </div>

              <img src={shape05} alt="Decorative shape" className={styles.shape05} />
              <img src={shape06} alt="Decorative shape" className={styles.shape06} />
              <img src={shape07} alt="Decorative shape" className={styles.shape07} />
            </motion.div>

            <motion.div
              className={styles.aboutContent}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeRight}
            >
              <h4>Why Choose Us</h4>
              <h2>We Make Our customers happy by giving Best services.</h2>
              <p className="description">
                It is a long established fact that a reader will be distracted by the readable content of a page when
                looking at its layout. The point of using Lorem Ipsum.
              </p>

              <a
                href="https://www.youtube.com/watch?v=xcJtL7QggTI"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.videoBtn}
              >
                <span className={styles.playIcon}>
                  <img src={playIcon} alt="Play video" />
                </span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};
