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
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#blog">Blog</a>
                </li>
                <li>
                  <a href="#contacts">Contacts</a>
                </li>
              </ul>
            </motion.div>

            <motion.div className={styles.linksGroup} variants={fadeIn} custom={2}>
              <h4>Resources</h4>
              <ul>
                <li>
                  <a href="#testimonials">Testimonials</a>
                </li>
                <li>
                  <a href="#support">Support</a>
                </li>
                <li>
                  <a href="#team">Team</a>
                </li>
                <li>
                  <a href="#pricing">Pricing</a>
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
            <p>
              © {new Date().getFullYear()} StartupBase. <br />
              All rights reserved.
            </p>
          </motion.div>
        </div>
      </footer>
    </>
  );
};
