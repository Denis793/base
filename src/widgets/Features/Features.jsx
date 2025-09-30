import React from 'react';
import { motion } from 'framer-motion';
import icon01 from '@/assets/images/icons/icon-01.svg';
import icon02 from '@/assets/images/icons/icon-02.svg';
import icon03 from '@/assets/images/icons/icon-03.svg';
import styles from './Features.module.scss';

const itemVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.2,
      ease: 'easeOut',
    },
  }),
};

export const Features = () => {
  const items = [
    { icon: icon01, title: '24/7 Support', desc: 'Lorem ipsum dolor sit amet conse adipiscing elit.' },
    { icon: icon02, title: 'Take Ownership', desc: 'Lorem ipsum dolor sit amet conse adipiscing elit.' },
    { icon: icon03, title: 'Team Work', desc: 'Lorem ipsum dolor sit amet conse adipiscing elit.' },
  ];

  return (
    <div className="container section" id="features">
      <section className={styles.features}>
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            className={styles.featureItem}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={i}
          >
            <div className={`${styles.imageWrapper} ${styles[`image${i + 1}`]}`}>
              <img className={styles.featureSVG} src={item.icon} alt={item.title} />
            </div>
            <div className={styles.descriptionWrapper}>
              <h4>{item.title}</h4>
              <p className="description">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
};
