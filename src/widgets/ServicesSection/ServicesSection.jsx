import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/shared/lib/animations';
import { FaChartBar, FaLayerGroup, FaThLarge, FaRocket, FaCogs, FaSyncAlt } from 'react-icons/fa';

import styles from './ServicesSection.module.scss';

export const ServicesSection = () => {
  const services = [
    {
      icon: <FaChartBar />,
      title: 'Crafted for Startups',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.',
    },
    {
      icon: <FaLayerGroup />,
      title: 'High-quality Design',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.',
    },
    {
      icon: <FaThLarge />,
      title: 'All Essential Sections',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.',
    },
    {
      icon: <FaRocket />,
      title: 'Speed Optimized',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.',
    },
    {
      icon: <FaCogs />,
      title: 'Fully Customizable',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.',
    },
    {
      icon: <FaSyncAlt />,
      title: 'Regular Updates',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.',
    },
  ];

  return (
    <>
      <section className="section" id="services">
        <div className="container ">
          <motion.div
            className="header"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}>
            <h2>We Offer The Best Quality Service for You</h2>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. <br />
              Donec vitae tortor lacus. Phasellus aliquam ante in maximus.
            </p>
          </motion.div>

          <motion.div
            className={styles.servicesGrid}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}>
            {services.map((s, i) => (
              <motion.div key={s.title} className={styles.serviceCard} variants={fadeIn} custom={i}>
                <div className={styles.icon}>{s.icon}</div>
                <h4>{s.title}</h4>
                <p className="description">{s.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};
