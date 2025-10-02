import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/shared/lib/animations';
import styles from './PortfolioSection.module.scss';

const categories = ['All', 'Branding Strategy', 'Digital Experiences', 'Ecommerce'];

const projects = [
  { id: 1, img: '/src/assets/images/projects/project-01.png', category: 'Branding Strategy' },
  { id: 2, img: '/src/assets/images/projects/project-02.png', category: 'Digital Experiences' },
  { id: 4, img: '/src/assets/images/projects/project-04.png', category: 'Branding Strategy' },
  { id: 3, img: '/src/assets/images/projects/project-03.png', category: 'Ecommerce' },
];

export const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      <section className={styles.portfolioSection} id="portfolio">
        <div className="container section">
          <div className={styles.header}>
            <motion.h2 variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
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

          {/* Filter Buttons */}
          <div className={styles.filters}>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`${styles.filterBtn} ${activeCategory === cat ? styles.active : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
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
                  className={styles.card}
                  variants={fadeIn}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, scale: 0.9 }}
                  layout
                >
                  <img src={p.img} alt={p.category} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </>
  );
};
