import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './StatsSection.module.scss';

const stats = [
  { value: 785, label: 'Global Brands' },
  { value: 533, label: 'Happy Clients' },
  { value: 865, label: 'Winning Award' },
  { value: 346, label: 'Happy Clients' },
];

export function StatsSection() {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const duration = 1500;
    const intervals = stats.map((stat, i) => {
      const step = Math.ceil(stat.value / (duration / 16));
      return setInterval(() => {
        setCounts((prev) => {
          const next = [...prev];
          if (next[i] < stat.value) next[i] += step;
          else next[i] = stat.value;
          return next;
        });
      }, 16);
    });

    const timeout = setTimeout(() => intervals.forEach(clearInterval), duration + 200);
    return () => {
      intervals.forEach(clearInterval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      <section className={`section section--bg ${styles.statsSection}`}>
        <div className="container">
          <div className={styles.statsWrapper}>
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                className={styles.item}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}>
                <h3 className={styles.value}>{counts[i]}</h3>
                <p className={styles.label}>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
