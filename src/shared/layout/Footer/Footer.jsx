import React from 'react';
import { motion } from 'framer-motion';
import { Social } from '@/shared/ui/Social';
import { fadeIn, staggerContainer } from '@/shared/lib/animations';
import { ThemeImage } from '@/shared/ui/ThemeImage';
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className="container">
          <motion.div
            className={styles.footerWrapper}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className={styles.brand} variants={fadeIn}>
              <ThemeImage name="logo" alt="Logo" position="left" fit="contain" />

              <p className={styles.description}>
                Building modern digital experiences with performance, accessibility, and style in mind.
              </p>

              <Social align="left" variant="light" networks={['facebook', 'x', 'linkedin', 'behance']} />
            </motion.div>

            <motion.div className={styles.linksGroup} variants={fadeIn} custom={1}>
              <h4>Company</h4>
              <ul>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </motion.div>

            <motion.div className={styles.linksGroup} variants={fadeIn} custom={2}>
              <h4>Resources</h4>
              <ul>
                <li>
                  <a href="#">Docs</a>
                </li>
                <li>
                  <a href="#">Support</a>
                </li>
                <li>
                  <a href="#">Terms</a>
                </li>
                <li>
                  <a href="#">Privacy</a>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          <motion.div
            className={styles.bottom}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p>© {new Date().getFullYear()} StartupBase. All rights reserved.</p>
          </motion.div>
        </div>
      </footer>
    </>
  );
};
