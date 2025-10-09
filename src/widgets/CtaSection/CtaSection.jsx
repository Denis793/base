import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/shared/lib/animations';
import { Button } from '@/shared/ui/Button';
import styles from './CtaSection.module.scss';

export const CtaSection = () => {
  return (
    <>
      <section className={styles.ctaSection}>
        <div className="container">
          <motion.div
            className={styles.ctaContent}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className={styles.textBlock}>
              <h2>
                Join with <span>5000+ Startups</span>
                <br /> Growing with <span>Base.</span>
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis nibh lorem. Duis sed odio lorem. In a
                efficitur leo. Ut venenatis rhoncus.
              </p>
            </div>

            <Button variant="white">Get Started Now</Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};
