import React from 'react';
import { motion } from 'framer-motion';
import shape04 from '@/assets/images/shape/shape-04.svg';
import heroImg from '@/assets/images/hero/hero.png';
import shapeYellow from '@/assets/images/shape/shape-01.svg';
import shapeBlue from '@/assets/images/shape/shape-02.svg';
import shapeWaves from '@/assets/images/shape/shape-03.svg';
import { Button } from '@/shared/ui/Button';
import styles from './HeroSection.module.scss';

const textVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay: i * 0.2, ease: 'easeOut' },
  }),
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } },
};

export const HeroSection = () => {
  return (
    <>
      <div className={styles.heroWrapper}>
        <div className="container section">
          <section className={styles.hero} id="home">
            <motion.div
              className={styles.heroContent}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.h2 variants={textVariants} custom={0} className={styles.heroTitle}>
                We specialize in UI/UX, Web Development, Digital Marketing.
              </motion.h2>

              <motion.p variants={textVariants} custom={1} className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla magna mauris. Nulla fermentum
                viverra sem eu rhoncus consequat varius nisi quis, posuere magna.
              </motion.p>

              <motion.div variants={textVariants} custom={2} className={styles.heroCta}>
                <div className={styles.ctaGroup}>
                  <a href="tel:0123456789" className={styles.heroPhone}>
                    Call us (0123) 456 – 789
                  </a>
                  <p className="description">For any question or concern</p>
                </div>
                <Button variant="primary" href="#">
                  Get Started Now
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              className={styles.heroVisual}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
            >
              <motion.div className={styles.heroImageWrapper} variants={imageVariants}>
                <img src={shape04} alt="Decorative background" className={styles.heroShape} />
                <img src={heroImg} alt="Hero" className={styles.heroImage} />
                <img src={shapeYellow} alt="Yellow quarter" className={styles.shapeYellow} />
                <img src={shapeWaves} alt="Waves" className={styles.shapeWaves} />
                <img src={shapeBlue} alt="Blue quarter" className={styles.shapeBlue} />
              </motion.div>
            </motion.div>
          </section>
        </div>
      </div>
    </>
  );
};
