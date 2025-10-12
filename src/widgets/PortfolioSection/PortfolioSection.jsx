import React, { useState } from 'react';
import { Button } from '@/shared/ui/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/shared/lib/animations';
import project1 from '@/assets/images/projects/project-01.png';
import project2 from '@/assets/images/projects/project-02.png';
import project3 from '@/assets/images/projects/project-03.png';
import project4 from '@/assets/images/projects/project-04.png';
import arrowRight from '@/assets/images/icons/icon-arrow-right.svg';
import styles from './PortfolioSection.module.scss';

const categories = ['All', 'Branding Strategy', 'Digital Experiences', 'Ecommerce'];

const projects = [
  { id: 1, img: project1, category: 'Branding Strategy' },
  { id: 2, img: project2, category: 'Digital Experiences' },
  { id: 3, img: project4, category: 'Branding Strategy' },
  { id: 4, img: project3, category: 'Ecommerce' },
];

export const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const filteredProjects = activeCategory === 'All' ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      <section className="section" id="portfolio">
        <div className="container">
          <div className="header">
            <motion.h2
              className={styles.headerTitle}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              We Offer Great Affordable <br /> Premium Prices.
            </motion.h2>

            <motion.p
              className="description"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
            >
              It is a long established fact that a reader will be distracted by the readable content of a page when
              looking at its layout. The point of using.
            </motion.p>
          </div>

          <div className={styles.filters}>
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={activeCategory === cat ? 'primary' : 'secondary'}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </Button>
            ))}
          </div>

          <motion.div
            className={styles.grid}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <AnimatePresence>
              {filteredProjects.map((p, i) => (
                <motion.div
                  key={p.id}
                  className={`card ${styles.card}`}
                  variants={fadeIn}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, scale: 0.9 }}
                  layout
                >
                  <div className="cardImage">
                    <img src={p.img} alt={p.category} />
                    <div className="overlay">
                      <div className="overlayContent">
                        <h3 className={styles.overlayTitle}>Photo Retouching</h3>
                        <p className={styles.overlayDescription}>{p.category}</p>
                        <Button variant="primary" round icon={arrowRight} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </>
  );
};
